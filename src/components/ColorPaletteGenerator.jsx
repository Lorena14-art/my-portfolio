import React, { useState, useCallback } from 'react';
import { Copy, Lock, Unlock, Palette, ChevronDown, ChevronUp, RefreshCw, CopyCheck } from 'lucide-react';

const ColorPaletteGenerator = () => {
  const [palette, setPalette] = useState([]);
  const [locked, setLocked] = useState(new Set());
  const [toast, setToast] = useState('');
  const [showGradient, setShowGradient] = useState(false);
  const [gradient, setGradient] = useState({
    color1: '#10b981',
    color2: '#047857',
    angle: 135
  });

  const generateRandomHex = useCallback(() => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }, []);

  const generatePalette = useCallback(() => {
    const newPalette = palette.map((color, index) => 
      locked.has(index) ? color : generateRandomHex()
    );
    while (newPalette.length < 5) {
      newPalette.push(generateRandomHex());
    }
    setPalette(newPalette.slice(0, 5));
  }, [palette, locked, generateRandomHex]);

  const toggleLock = useCallback((index) => {
    const newLocked = new Set(locked);
    if (newLocked.has(index)) {
      newLocked.delete(index);
    } else {
      newLocked.add(index);
    }
    setLocked(newLocked);
  }, [locked]);

  const copyColor = useCallback(async (color) => {
    await navigator.clipboard.writeText(color);
    setToast('Color copied!');
    setTimeout(() => setToast(''), 2000);
  }, []);

  const updateGradient = useCallback((key, value) => {
    setGradient(prev => ({ ...prev, [key]: value }));
  }, []);

  const getGradientCSS = useCallback(() => {
    return `linear-gradient(${gradient.angle}deg, ${gradient.color1}, ${gradient.color2})`;
  }, [gradient]);

  const copyGradientCSS = useCallback(async () => {
    const css = getGradientCSS();
    await navigator.clipboard.writeText(css);
    setToast('Gradient CSS copied!');
    setTimeout(() => setToast(''), 2000);
  }, [gradient, getGradientCSS]);

  React.useEffect(() => {
    generatePalette();
  }, []); // Initial gen

  return (
    <section id="colors" className="mt-16">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Color Palette Generator</h2>
        <span className="text-xs uppercase tracking-widest text-emerald-600">Interactive Tool</span>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Palette Grid */}
        <div>
          <div className="mb-6 flex items-center gap-2">
            <Palette size={20} className="text-emerald-600" />
            <h3 className="text-lg font-semibold text-zinc-900">Color Swatches</h3>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {palette.map((color, index) => (
              <div
                key={index}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl border-2 border-zinc-200 bg-gradient-to-br shadow-md transition-all hover:scale-105 hover:border-emerald-500/50 hover:shadow-emerald-500/20"
                onClick={() => copyColor(color)}
              >
                <div
                  className="h-full w-full transition-all"
                  style={{ backgroundColor: color }}
                />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/80 px-2 py-1 text-xs font-mono text-white backdrop-blur-sm">
                  {color}
                </div>
                <button
                  className={`absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/30 ${locked.has(index) ? 'bg-emerald-500 text-white shadow-md' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLock(index);
                  }}
                >
                  {locked.has(index) ? <Lock size={14} /> : <Unlock size={14} />}
                </button>
              </div>
            ))}
          </div>
          <button
            className="mt-6 rounded-full border border-zinc-200 bg-zinc-50 px-6 py-3 text-sm font-semibold uppercase text-zinc-700 transition-all hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600"
            onClick={generatePalette}
          >
            <RefreshCw size={16} className="mr-2 inline h-4 w-4" />
            Generate New Palette
          </button>
        </div>

        {/* Gradient Generator */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Palette size={20} className="text-emerald-600" />
              <h3 className="text-lg font-semibold text-zinc-900">Gradient Builder</h3>
            </div>
            <button
              onClick={() => setShowGradient(!showGradient)}
              className="flex items-center gap-1 text-xs font-semibold text-zinc-600 hover:text-zinc-900"
            >
              {showGradient ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
          <div className={`overflow-hidden transition-all ${showGradient ? 'max-h-96' : 'max-h-0'}`}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <label className="block">
                  <span className="mb-1 block text-xs font-medium text-zinc-700">Color 1</span>
                  <input
                    type="color"
                    value={gradient.color1}
                    onChange={(e) => updateGradient('color1', e.target.value)}
                    className="h-12 w-full cursor-pointer rounded-xl border border-zinc-300 shadow-sm"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-medium text-zinc-700">Color 2</span>
                  <input
                    type="color"
                    value={gradient.color2}
                    onChange={(e) => updateGradient('color2', e.target.value)}
                    className="h-12 w-full cursor-pointer rounded-xl border border-zinc-300 shadow-sm"
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-1 block text-xs font-medium text-zinc-700">Angle</span>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={gradient.angle}
                    onChange={(e) => updateGradient('angle', parseInt(e.target.value))}
                    className="flex-1 cursor-pointer"
                  />
                  <span className="w-12 shrink-0 text-sm font-mono text-zinc-900">{gradient.angle}°</span>
                </div>
              </label>
              <div
                className="aspect-video w-full cursor-pointer rounded-2xl border-2 border-zinc-200 shadow-xl transition-all hover:border-emerald-500/50 hover:shadow-emerald-500/20"
                style={{ background: getGradientCSS() }}
                onClick={copyGradientCSS}
              />
              <div className="relative rounded-xl bg-zinc-900/50 p-3 backdrop-blur-sm">
                <button
                  className="absolute right-2 top-2 rounded-full p-1 text-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-300"
                  onClick={copyGradientCSS}
                  title="Copy CSS"
                >
                  <CopyCheck size={16} />
                </button>
                <code className="font-mono text-sm text-zinc-100 break-all">
                  {getGradientCSS()}
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="toast fixed bottom-6 right-6 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-2xl">
          {toast}
        </div>
      )}
    </section>
  );
};

export default ColorPaletteGenerator;

