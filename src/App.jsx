﻿import React, { useState, useEffect, useRef } from 'react'
import { Mail, Github, Workflow, ShieldCheck, FileCode, ChevronDown, Facebook, Info, Instagram, MapPin, ArrowRight, X, Search, ChevronLeft, ChevronRight, ArrowUp } from 'lucide-react'
import loren2Img from './assets/loren2.jpg'
// import cvFile from './assets/Delejero_Lorena.pdf'
const cvFile = '#'

export default function Portfolio() {
  const activePhoto = loren2Img

  const projectLogs = [
    {
      arch: 'MVC',
      id: 'PROJECT_01',
      title: 'Smart Enrollment System & AI Chatbot',
      role: 'Project Lead & Documentation Head',
      year: '2026',
      status: 'DEPLOYED',
      version: '2.1',
      highlights: [
        { icon: <Workflow size={14} className="text-emerald-600" />, text: 'Designed modular enrollment workflow' },
        { icon: <ShieldCheck size={14} className="text-emerald-600" />, text: 'Added role-based access and validation' },
        { icon: <FileCode size={14} className="text-emerald-600" />, text: 'Documented PHP/Laravel endpoints & logic' },
      ],
      snippet: `function enrollStudent($data) {
  // validate input
  // create record
  // notify via chatbot
}
`,
   },
    {
      arch: 'SPA',
      id: 'PROJECT_02',
      title: 'E\'spasyo Online Ordering System',
      role: 'Frontend Developer',
      year: '2026',
      status: 'DEPLOYED',
      version: '1.0',
      highlights: [
        { icon: <Workflow size={14} className="text-emerald-600" />, text: 'Developed responsive user interface for ordering' },
        { icon: <ShieldCheck size={14} className="text-emerald-600" />, text: 'Implemented secure payment integration' },
        { icon: <FileCode size={14} className="text-emerald-600" />, text: 'Built React components for menu and cart' },
      ],
      snippet: `function handleOrderSubmit(orderData) {
  // validate order
  // process payment
  // update inventory
}
`,
    },
  ]

  const workTimeline = [
    {
      title: "Associate Software Engineer (Frontend) | E'spasyo Development",
      range: '2026 - Current',
      commits: [
        'ENGINEERING_ROBUST_FRONTEND_SOLUTIONS_WITH_REACT',
        'OPTIMIZING_APPLICATION_PERFORMANCE_AND_UX',
      ],
    },
    {
      title: "Service Crew | McDonald’s Georgetown, Calamba",
      range: 'Sep 2024 – Jan 2026',
      commits: [
        'OPTIMIZED_PEAK_HOUR_WORKFLOWS_TO_100%_EFFICIENCY',
        'RESOLVED_COMPLEX_CONFLICTS_WITH_ANALYTICAL_THINKING',
      ],
    },
  ]

  const education = [
    {
      school: 'City College of Calamba',
      degree: 'BS in Information Technology',
      year: '2023 – 2026',
    },
    {
      school: 'STI Calamba',
      degree: 'ICT – Mobile App & Web Development',
      year: '2021 – 2023',
    },
  ]

  const blogPosts = [
    {
      title: 'Welcome to My Portfolio',
      desc: 'Hello! I’m Lorena (Enatech). This space is where I document my journey in frontend engineering, share code snippets, and explore new technologies.',
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      readTime: '2 min read',
      tags: ['Portfolio', 'Personal', 'Intro'],
      pinned: true,
      content: [
        "Welcome to my digital garden! I'm thrilled to have you here.",
        "This portfolio represents not just my work, but my evolution as a developer. I built this using React and Tailwind CSS to showcase clean, performant code.",
        "Feel free to look around, check out my projects, and reach out if you'd like to collaborate!"
      ]
    },
    {
      title: 'From Mobile Screens to Machine Logic: My Raw Journey in Code',
      desc: 'Reflecting on the grit required to learn coding on a smartphone and the journey of rediscovering passion after burnout.',
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      readTime: '4 min read',
      tags: ['Personal', 'Growth', 'Career'],
      content: [
        "## The Tiny Screen Era: Coding Without a Canvas",
        "My journey into programming didn't start with a high-end setup or a comfortable desk; it started with a smartphone and a lot of determination. Back in Senior High School, when my interest in tech began to spark, I didn’t have the luxury of owning a laptop. While my peers were navigating full-sized keyboards, I was squinting at a small screen, typing out lines of code with my thumbs. Every semicolon felt like a battle, and debugging a single function meant scrolling endlessly on a device that wasn't meant for development. It was incredibly challenging and often frustrating, but that struggle forced me to visualize logic in a way that most people don't have to. It tested my patience and my ability to solve problems with limited resources, proving to me that the drive to learn is more important than the hardware you own.",
        "## The Paradox of Plenty: Losing the Spark",
        "The irony of my journey is that the moment I finally reached my goal and bought a laptop, I hit a wall. I expected that having \"real\" equipment would make my passion explode, but instead, I felt the drive to develop my skills slowly slip away. Maybe it was the exhaustion of the mobile era, or perhaps the sudden lack of friction made the process feel less like a hard-won victory. For a while, the laptop sat there, a symbol of a dream I was suddenly too tired to chase. I learned the hard way that tools don't create the coder; the hunger does. Without that daily struggle of the \"phone era,\" I had to rediscover why I fell in love with logic in the first place, leading to a period of silence where my growth as a developer stalled.",
        "## The Restart: Embracing the Never-Ending Evolution",
        "Now, I am back at the starting line, intentionally restarting my learning journey with a fresh perspective. I’ve come to realize that programming is a uniquely difficult craft—it isn't a \"one-day hobby\" where you wake up the next morning as a master. It is a grueling, rewarding, and deeply fulfilling process that requires you to be comfortable with being a student forever. Because technology keeps evolving at such a breakneck pace, the moment you think you’ve mastered a stack, a new framework or a new AI capability emerges to challenge you again. I am embracing that \"never-ending learning\" cycle now, understanding that the fulfillment doesn't come from knowing everything, but from the grit it takes to keep figuring it out."
      ]
    },
    {
      title: 'The Human Algorithm: Lessons in Leadership and Logic',
      desc: 'Bridging the gap between technical architecture and team leadership during our capstone project.',
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      readTime: '3 min read',
      tags: ['Leadership', 'Management', 'Soft Skills'],
      content: [
        "## Bridging the Gap Between Code and Collaboration",
        "When I first stepped into the role of Lead for our capstone project, I assumed my biggest challenge would be the technical architecture of CWC Connect, yet I quickly realized that the most complex system I had to manage wasn't written in code. Throughout the journey from our initial concept to the final defense, I learned that leading a research team through the high-stakes environment of a senior IT year requires a delicate balance of technical oversight and human intuition. I remember the immense pressure leading up to our March deadline, where the responsibility of submitting our first three chapters rested on my ability to harmonize my vision for an AI-integrated portal with the practical realities of our development cycle. By pushing for early consultations with our adviser to review our flowcharts, I was able to identify logic flaws before they became permanent bugs in our database, teaching me that a leader must always stay two steps ahead of the current sprint.",
        "## The Editor’s Eye and the Precision of Documentation",
        "As the primary editor for Group 23, I discovered that documentation is essentially the user interface for our logic, as even the most brilliant system is invisible if the writing is unpolished. I spent countless hours refining our chapters and stripping away subjective language to ensure our analysis met the highest academic standards, realizing that the narrative flow I enjoy in creative writing had to be replaced by the rigid precision of technical documentation. This \"Editor’s Eye\" became a critical asset during our system checks, as it allowed me to ensure that the work being produced by the developers perfectly aligned with the theoretical framework we presented to our panel. Managing this transition from a group leader on paper to a hands-on system reviewer meant that I was often the final safety net, verifying that every Laravel module and MySQL schema functioned as intended before we moved toward our defense.",
        "## Maintaining the Pulse of a Development Team",
        "To keep the project on track, my screen was constantly occupied by Gantt charts that served as the heartbeat of our operation from January through March. I found that leadership isn't about micromanagement but about maintaining a pulse on the team’s progress and being the one to offer focus during intensive review sessions, often fueled by nothing but dark chocolate and a shared goal. I learned to navigate the friction of different working styles, realizing that most technical errors were actually just communication breakdowns that could be solved by clearer leadership. Reflecting on the process of leading Group 23, I’ve come to understand that while technical expertise is what builds the software, it is the soft skills of project management and the relentless pursuit of clarity that actually get a project across the finish line."
      ]
    },
    {
      title: 'Beyond the Buzzwords: Making Sense of AI in Our Everyday Lives',
      desc: 'Understanding AI not as a sci-fi villain, but as a powerful, slightly chaotic multi-tool woven into our daily routines.',
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      readTime: '4 min read',
      tags: ['AI', 'Technology', 'Society'],
      content: [
        "A few years ago, when people talked about Artificial Intelligence (AI), I used to picture robots from movies or complex code that only super-geniuses understood. As someone deeply embedded in the tech world now, I see AI differently—less like a sci-fi villain and more like a very powerful, slightly chaotic, multi-tool. It's woven so tightly into the fabric of our daily routines that we often don’t even notice it's there, but it’s fundamentally changing how we work, learn, and even create. For those outside the \"tech stack,\" understanding this isn't about learning to code; it’s about recognizing the invisible force that’s shaping our reality.",
        "## The Invisible Assistant: AI in the Background",
        "For most people, AI isn't something they use; it’s something that happens to them. When I pick up my phone and it unlocks instantly via facial recognition, that’s AI analyzing hundreds of data points on my face. When I scroll through my social media feed or open Netflix, AI algorithms are working behind the scenes, processing my past behavior to predict what will keep me engaged. It’s the driving force behind the autocompletion in our emails and the personalized recommendations on Amazon. It’s useful precisely because it makes our lives smoother and more tailored, often without us lifting a finger. It takes the noise of the digital world and filters it into something relevant to us.",
        "## The Cognitive Co-Pilot: AI as a Tool for Growth",
        "Beyond these passive optimizations, I’ve seen firsthand how AI can act as a powerful cognitive co-pilot. In my own work developing community portals, I’ve used tools like the Gemini API to analyze feedback and improve documentation. But this utility extends far beyond programming. For students, AI tools can act as on-demand tutors, breaking down complex subjects into digestible summaries. For small business owners in our community, AI can help draft marketing copy or manage scheduling, leveling the playing field against larger corporations. AI has the potential to act as an equalizer, providing access to information and efficiencies that were previously out of reach for many.",
        "## The Balancing Act: Acknowledging the Environmental Cost",
        "However, as much as I advocate for the benefits of AI, I cannot ignore the shadow it casts. We often talk about AI in the \"cloud,\" which sounds light and ephemeral, but the reality is much heavier. Those powerful algorithms require massive amounts of energy to train and run. The data centers housing the hardware consume astronomical amounts of electricity and need constant cooling, often stressing local power grids and water supplies. As a developer who is also passionate about our local environment here in Calamba, I have to reconcile the technological advancement I strive for with the physical footprint it leaves behind. Every efficient search or generated image has a real-world environmental cost.",
        "## Moving Forward with Awareness",
        "This contradiction is why awareness is so crucial, especially for the non-tech community. We shouldn't reject AI—the benefits are too significant—but we must approach it with our eyes open. We need to be critical users, understanding that AI can both empower us and mislead us, and that its convenience comes with an environmental price tag. The goal isn't for everyone to become a technical expert, but for everyone to become a conscious participant in this digital evolution, advocating for responsible and sustainable technological growth. AI is here to stay, and it’s up to us to ensure it serves our community and our planet, not just our convenience."
      ]
    },
  ]

  const [scrollProgress, setScrollProgress] = useState(0)
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [selectedTag, setSelectedTag] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 2
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    const handleScroll = () => {
      // Update Progress Bar
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const filteredPosts = blogPosts.filter((post) => {
    const matchesTag = selectedTag ? post.tags?.includes(selectedTag) : true
    const searchLower = searchQuery.toLowerCase()
    const matchesSearch = post.title.toLowerCase().includes(searchLower) || post.desc.toLowerCase().includes(searchLower) || (post.content && post.content.some(para => para.toLowerCase().includes(searchLower)))

    return matchesTag && matchesSearch
  }).sort((a, b) => {
    if (a.pinned === b.pinned) return 0
    return a.pinned ? -1 : 1
  })

  // Pagination Logic
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    document.getElementById('blogs')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedTag, searchQuery])

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 z-[60] h-1 bg-emerald-500 transition-all duration-100" style={{ width: `${scrollProgress}%` }} />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a
            href="#"
            className="text-sm font-bold tracking-widest transition-colors hover:text-emerald-600"
          >
            ENATECH
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pt-24 pb-16">
        {/* --- HERO --- */}
        <section id="hero" className="relative grid gap-8 md:grid-cols-2 md:items-center">
          {/* Background Grid Pattern */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <ParticleBackground />

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">Lorena Delejero</h1>
              <TypingEffect
                as="div"
                text="Frontend Developer"
                className="mt-2 text-xl uppercase tracking-widest text-emerald-600"
              />
              <div className="mt-1 flex items-center gap-2 text-sm text-zinc-600">
                <MapPin size={16} />
                Calamba City, Philippines
              </div>
              <div className="mt-1 flex items-center gap-2 text-sm text-zinc-600">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-600">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M4 12.9L7.14286 16.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M20 7.5625L11.4283 16.5625L11 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </g>
                </svg>
                <span className="animate-pulse">Open for Collaboration / Commissions</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#blogs"
                className="rounded bg-emerald-500 px-6 py-2 text-xs font-semibold uppercase text-white transition hover:bg-emerald-600"
              >
                Blogs
              </a>
              <a
                href="mailto:lorenadelejero14@gmail.com"
                className="rounded border border-zinc-300 px-6 py-2 text-xs font-semibold uppercase text-zinc-700 transition hover:border-emerald-600 hover:text-emerald-600"
              >
                Email Me
              </a>
              <a
                href="https://github.com/Lorena14-art"
                target="_blank"
                rel="noreferrer"
                className="rounded border border-zinc-300 px-6 py-2 text-xs font-semibold uppercase text-zinc-700 transition hover:border-emerald-600 hover:text-emerald-600"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="group relative h-80 w-80 md:h-96 md:w-96">
              <img
                src={activePhoto}
                alt="Lorena Delejero"
                className="h-full w-full rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] border-4 border-zinc-100 object-cover shadow-2xl transition-all duration-500 group-hover:scale-105"
              />
              {/* Glare */}
              <div className="absolute inset-0 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ mixBlendMode: 'overlay' }} />
            </div>
          </div>
        </section>

        {/* --- ABOUT --- */}
        <section id="about" className="mt-16 grid gap-8 md:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">About</h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              I am a Frontend Developer and Research Lead based in Laguna, Philippines, specializing in the intersection of polished user interfaces and intelligent backend logic. With a deep foundation in the few stack (Tailwind, Alpine, Laravel) and React, I focus on architecting systems that are not only visually precise but functionally robust.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              Much of my recent work involves bridging the gap between raw data and user experience, specifically through AI-integrated platforms and RAG-powered assistants. As a project lead, I prioritize clean documentation and scalable system architecture, ensuring that every line of code serves a clear purpose. I thrive in collaborative environments where the goal is to solve complex, real-world problems through innovative digital solutions.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight">Socials</h2>
            <div className="mt-4 flex flex-col gap-4">
              {[
                { href: "https://github.com/Lorena14-art", icon: <Github size={20} />, label: "GitHub" },
                { href: "https://www.facebook.com/itzenabels", icon: <Facebook size={20} />, label: "Facebook" },
                { href: "https://www.instagram.com/heyitsloren.xoxo", icon: <Instagram size={20} />, label: "Instagram" },
                { href: "mailto:lorenadelejero14@gmail.com", icon: <Mail size={20} />, label: "Email" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label === 'Email' ? undefined : "_blank"}
                  rel={social.label === 'Email' ? undefined : "noreferrer"}
                  className="group flex items-center gap-4 rounded-2xl border border-zinc-100 bg-zinc-50 p-4 transition-all hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-md hover:shadow-emerald-500/5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm text-zinc-500 transition-colors group-hover:text-emerald-600">
                    {social.icon}
                  </span>
                  <span className="text-sm font-semibold text-zinc-600 transition-colors group-hover:text-zinc-900">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* --- EXPERIENCE --- */}
        <section id="experience" className="mt-16">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Experience Column */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
              </div>
              <div className="relative border-l border-zinc-200 ml-3 space-y-8">
                {workTimeline.map((item) => (
                  <div key={item.title} className="relative pl-8">
                    {/* Timeline Node */}
                    <div className="absolute -left-[5px] top-8 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500 ring-4 ring-white" />
                    
                    <div className="group rounded-2xl border border-zinc-100 bg-zinc-50 p-8 shadow-sm transition-all hover:border-emerald-500/30 hover:shadow-md hover:shadow-emerald-500/5">
                      <div className="flex flex-col gap-1">
                        <div className="text-sm font-semibold text-zinc-900 transition-colors group-hover:text-emerald-600">{item.title}</div>
                        <div className="text-xs text-zinc-500">{item.range}</div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.commits.map((commit) => (
                            <span key={commit} className="rounded bg-zinc-100 px-3 py-1 text-[11px] text-zinc-600 transition-colors group-hover:bg-emerald-500/10 group-hover:text-emerald-600">
                              {commit.toLowerCase().replace(/_/g, ' ')}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Column */}
            <div id="education">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold tracking-tight">Education</h2>
              </div>
              <div className="relative border-l border-zinc-200 ml-3 space-y-8">
                {education.map((item) => (
                  <div key={item.school} className="relative pl-8">
                    {/* Timeline Node */}
                    <div className="absolute -left-[5px] top-8 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500 ring-4 ring-white" />
                    
                    <div className="group rounded-2xl border border-zinc-100 bg-zinc-50 p-8 shadow-sm transition-all hover:border-emerald-500/30 hover:shadow-md hover:shadow-emerald-500/5">
                      <div className="flex flex-col gap-1">
                        <div className="text-sm font-semibold text-zinc-900 transition-colors group-hover:text-emerald-600">{item.school}</div>
                        <div className="text-xs text-zinc-500">{item.degree}</div>
                        <div className="mt-2 text-xs text-zinc-500">{item.year}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- TECH STACK --- */}
        <section id="stack" className="mt-16">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Tech Stack</h2>
            <span className="text-xs uppercase tracking-widest text-emerald-600">Tools + Languages</span>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="group rounded-2xl border border-zinc-100 bg-zinc-50 p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-md hover:shadow-emerald-500/5">
              <div className="text-sm font-semibold text-zinc-900 transition-colors group-hover:text-emerald-600">Frontend</div>
              <div className="mt-4 flex flex-wrap gap-3 text-xs text-zinc-600">
                {[
                  { name: 'React', color: 'text-blue-500', bg: 'hover:bg-blue-50' },
                  { name: 'Tailwind CSS', color: 'text-cyan-500', bg: 'hover:bg-cyan-50' },
                  { name: 'JavaScript', color: 'text-yellow-600', bg: 'hover:bg-yellow-50' },
                  { name: 'TypeScript', color: 'text-blue-700', bg: 'hover:bg-blue-50' }
                ].map((tech) => (
                  <TechBadge key={tech.name} {...tech} />
                ))}
              </div>
            </div>

            <div className="group rounded-2xl border border-zinc-100 bg-zinc-50 p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-md hover:shadow-emerald-500/5">
              <div className="text-sm font-semibold text-zinc-900 transition-colors group-hover:text-emerald-600">Backend</div>
              <div className="mt-4 flex flex-wrap gap-3 text-xs text-zinc-600">
                {[
                  { name: 'Laravel', color: 'text-red-600', bg: 'hover:bg-red-50' },
                  { name: 'PHP', color: 'text-purple-600', bg: 'hover:bg-purple-50' },
                  { name: 'Node.js', color: 'text-green-600', bg: 'hover:bg-green-50' },
                  { name: 'MySQL', color: 'text-orange-600', bg: 'hover:bg-orange-50' }
                ].map((tech) => (
                  <TechBadge key={tech.name} {...tech} />
                ))}
              </div>
            </div>

            <div className="group rounded-2xl border border-zinc-100 bg-zinc-50 p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-md hover:shadow-emerald-500/5">
              <div className="text-sm font-semibold text-zinc-900 transition-colors group-hover:text-emerald-600">Tools</div>
              <div className="mt-4 flex flex-wrap gap-3 text-xs text-zinc-600">
                {[
                  { name: 'Git', color: 'text-orange-700', bg: 'hover:bg-orange-50' },
                  { name: 'VS Code', color: 'text-blue-600', bg: 'hover:bg-blue-50' },
                  { name: 'Figma', color: 'text-purple-600', bg: 'hover:bg-purple-50' },
                  { name: 'Canva', color: 'text-cyan-600', bg: 'hover:bg-cyan-50' },
                ].map((tech) => (
                  <TechBadge key={tech.name} {...tech} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- PROJECTS --- */}
        <section id="projects" className="mt-16">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Recent Projects</h2>
            <a
              href="#projects"
              className="text-xs uppercase tracking-widest text-emerald-600 hover:text-emerald-500"
            >
              View all
            </a>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projectLogs.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </section>

        {/* --- BLOGS --- */}
        <section id="blogs" className="mt-16">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Latest Writings</h2>
            {selectedTag && (
              <button
                onClick={() => setSelectedTag(null)}
                className="flex items-center gap-1 text-xs font-medium text-emerald-600 hover:text-emerald-500"
              >
                Clear filter: {selectedTag} <X size={12} />
              </button>
            )}
          </div>

          <div className="relative mt-6 mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-zinc-200 bg-zinc-50 py-2 pl-10 pr-4 text-xs text-zinc-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {currentPosts.map((post) => (
              <div key={post.title} className="group flex flex-col justify-between rounded-2xl border border-zinc-100 bg-zinc-50 p-6 transition-all hover:border-emerald-500/30 hover:shadow-md hover:shadow-emerald-500/5">
                <div>
                  <div className="text-xs text-zinc-500 mb-2">{post.date} • {post.readTime}</div>
                  <h3 className="text-lg font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors">{post.title}</h3>
                  <p className="mt-2 text-xs text-zinc-600 leading-relaxed">{post.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags && post.tags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                        className={`rounded-full border px-2 py-1 text-[10px] font-medium transition-colors ${selectedTag === tag ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-emerald-100 bg-emerald-50 text-emerald-600 hover:bg-emerald-100'}`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedBlog(post)}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 transition-colors hover:text-emerald-500"
                >
                  Read more <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-8 flex justify-center items-center gap-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="rounded-full p-2 text-zinc-600 hover:bg-zinc-100 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="text-xs font-semibold text-zinc-600">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="rounded-full p-2 text-zinc-600 hover:bg-zinc-100 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </section>

        {/* --- FOOTER --- */}
        <footer className="mt-16 flex items-center justify-center border-t border-zinc-200 pt-8 text-xs text-zinc-500">
            <span>© 2026 Enatech. All rights reserved.</span>
        </footer>

        {/* --- BACK TO TOP --- */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition-all duration-300 hover:bg-emerald-500 ${showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>

        {/* --- BLOG MODAL --- */}
        {selectedBlog && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedBlog(null)}>
            <div className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl" onClick={e => e.stopPropagation()}>
              <button 
                onClick={() => setSelectedBlog(null)}
                className="absolute right-4 top-4 rounded-full p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900"
              >
                <X size={20} />
              </button>
              <div className="text-xs text-emerald-600 font-semibold tracking-widest uppercase mb-2">
                {selectedBlog.date} • {selectedBlog.readTime}
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-6">{selectedBlog.title}</h2>
              <div className="space-y-4 text-sm text-zinc-600 leading-relaxed">
                {selectedBlog.content && selectedBlog.content.map((paragraph, index) => {
                  const isHeading = paragraph.startsWith('## ')
                  const text = isHeading ? paragraph.replace('## ', '') : paragraph
                  return (
                    <p 
                      key={index} 
                      className={isHeading ? "text-base font-bold text-zinc-900 pt-2" : ""}
                    >
                      {text}
                    </p>
                  )
                })}
                {!selectedBlog.content && <p>{selectedBlog.desc}</p>}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

function TypingEffect({ as: Component = 'div', text, speed = 100, className }) {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    setIsComplete(false)
    setDisplayedText('')
    let i = 0
    const intervalId = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1))
        i++
      } else {
        clearInterval(intervalId)
        setIsComplete(true)
      }
    }, speed)

    return () => clearInterval(intervalId)
  }, [text, speed])

  const cursorClass = !isComplete ? "after:content-['|'] after:ml-1 after:animate-blink" : ''

  return <Component className={`${className} ${cursorClass}`}>{displayedText}</Component>
}

function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []

    const resize = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.clientWidth
        canvas.height = parent.clientHeight
        initParticles()
      }
    }

    const initParticles = () => {
      particles = []
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000) // Density based on area
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
        })
      }
    }

    const animate = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(16, 185, 129, 0.2)' // emerald-500/20
        ctx.fill()

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.1 * (1 - dist / 100)})`
            ctx.lineWidth = 1
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 -z-10 h-full w-full" />
}


function TechBadge({ name, color, bg }) {
  // Simplified SVG paths for demonstration
  const icons = {
    React: <svg className="h-5 w-5" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="0" cy="0" r="2" fill="currentColor"/><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="10" ry="4.5"/><ellipse rx="10" ry="4.5" transform="rotate(60)"/><ellipse rx="10" ry="4.5" transform="rotate(120)"/></g></svg>,
    'Tailwind CSS': <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.http://www.w3.org/2000/svgw3.org/2000/svg"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>,
    Laravel: <svg className="h-5 w-5" viewBox="0 -5.5 35 35" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="m34.959 11.235h-.055q.438.384-.219.548l-4.766 1.259 4.326 5.862q.219.329.11.468c-.155.144-.337.262-.536.346l-.012.005-5.587 2.03q-5.314 1.863-5.807 2.028h-.055c-.276.138-.602.219-.946.219-.014 0-.028 0-.041 0h.002c-.353-.079-.644-.299-.815-.596l-.003-.006q-.548-.712-3.999-6.957-5.865 1.533-7.344 1.863c-.147.057-.317.09-.495.09-.597 0-1.107-.373-1.31-.899l-.003-.01-1.425-3.127q-5.533-11.888-5.807-12.6-.493-1.096.438-1.206l.712-.055q5.703-.437 6.355-.492c.033-.003.072-.004.111-.004.207 0 .404.042.584.118l-.01-.004c.168.115.305.262.407.432l.003.006 8.492 14.19 10.628-2.52-3.508-4.986q-.384-.548.493-.657l4.931-.819c.067-.015.144-.024.224-.024.116 0 .228.019.332.053l-.008-.002c.22.115.404.273.545.464l.003.004 2.136 2.63q1.753 2.185 1.918 2.35zm-19.339 3.944q.274-.055.055-.329l-7.949-13.751c-.039-.067-.11-.112-.192-.112-.009 0-.019.001-.028.002h.001l-5.807.493q-.055 0-.055.11c.001.08.021.155.056.221l-.001-.003 7.177 14.792q.055.11.11.11h.274l3.889-.935q2.41-.599 2.47-.599zm16.764 3.123-3.508-4.821c-.044-.082-.11-.147-.189-.191l-.002-.001c-.024-.005-.052-.008-.08-.008-.06 0-.118.013-.169.036l.003-.001-10.407 2.74 3.452 5.807q.165.274.274.302c.027.005.058.008.09.008.066 0 .129-.013.187-.036l-.003.001 10.244-3.508q.219-.055.219-.11c-.005-.052-.025-.099-.055-.137v.001zm.657-7.341q.438-.11.329-.274-2.689-3.342-3.013-3.78c-.064-.135-.199-.228-.356-.228-.029 0-.058.003-.085.009h.003l-3.944.712q-.219.055-.055.274l3.123 4.273q2.026-.493 3.999-.987z"/></svg>,
    'Node.js': <svg className="h-5 w-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M17.1725 2.29872C16.4627 1.89953 15.5373 1.90132 14.8269 2.29872C11.2689 4.26227 7.71082 6.22641 4.15216 8.18906C3.45969 8.55335 2.99264 9.29698 3.00009 10.0688V21.9328C2.99509 22.7197 3.48622 23.4705 4.19655 23.8298C5.21871 24.3736 6.2118 24.9726 7.25244 25.4802C8.45451 26.0709 9.95843 26.2015 11.1752 25.5855C12.1629 25.075 12.6016 23.9395 12.6003 22.896C12.6083 18.9806 12.6016 15.0651 12.6034 11.1496C12.6269 10.9756 12.4962 10.7896 12.3064 10.7938C11.8517 10.7866 11.3964 10.7896 10.9417 10.7926C10.7699 10.7764 10.6022 10.9191 10.6152 11.0918C10.6091 14.982 10.6164 18.8734 10.6115 22.7642C10.6214 23.3024 10.2578 23.8196 9.73913 24.0014C8.5412 24.4213 5.12198 22.2012 5.12198 22.2012C4.9965 22.1431 4.91682 22.007 4.92912 21.8718C4.92912 17.9576 4.92973 14.0433 4.92912 10.1297C4.91187 9.97191 5.00912 9.8298 5.15402 9.76538C8.70033 7.8134 12.2448 5.85654 15.7911 3.90336C15.9143 3.82115 16.086 3.8214 16.2089 3.90396C19.7552 5.85654 23.3003 7.81161 26.8472 9.76368C26.9926 9.828 27.0857 9.9725 27.0709 10.1297C27.0703 14.0433 27.0721 17.9576 27.0697 21.8713C27.0802 22.0098 27.0086 22.144 26.8793 22.2048C23.3661 24.1462 19.8129 26.025 16.3315 28.0228C16.1796 28.1099 16.0075 28.2086 15.8373 28.1126C14.9218 27.6062 14.0174 27.0801 13.1049 26.5688C13.0057 26.5069 12.8794 26.4803 12.7759 26.5496C12.3668 26.7652 11.982 26.9398 11.5122 27.1258C10.8524 27.387 10.9578 27.4938 11.5529 27.8405C12.62 28.4444 13.6889 29.0459 14.756 29.6504C15.4585 30.0888 16.4024 30.12 17.1275 29.7149C20.6861 27.7538 24.2436 25.7904 27.8029 23.8293C28.5113 23.468 29.0049 22.7202 28.9999 21.9327V10.0688C29.0068 9.31264 28.5576 8.58227 27.886 8.21259C24.3156 6.23947 20.7435 4.27064 17.1725 2.29872Z" fill="currentColor"/><path d="M22.5419 11.2062C21.1452 10.459 19.4836 10.4192 17.9315 10.5169C16.8102 10.6277 15.6309 10.9371 14.814 11.7409C13.9761 12.5489 13.7937 13.8537 14.1917 14.9085C14.4769 15.6539 15.1948 16.1386 15.9372 16.395C16.8935 16.7326 17.8979 16.837 18.9026 16.9414C19.819 17.0366 20.7357 17.1319 21.6165 17.4042C21.9763 17.5234 22.3953 17.7058 22.5055 18.0973C22.6073 18.5609 22.4957 19.0998 22.1193 19.4219C20.9237 20.3682 17.5979 20.2232 16.4166 19.4784C15.939 19.1611 15.7332 18.5994 15.6495 18.0641C15.6402 17.8973 15.5059 17.7443 15.3248 17.757C14.8713 17.7516 14.4178 17.7528 13.9643 17.7564C13.8061 17.7431 13.6416 17.8557 13.6329 18.0172C13.5397 20.4689 15.7914 21.5377 17.9039 21.773C19.1108 21.888 20.3442 21.8814 21.5327 21.6224C22.4261 21.419 23.3219 21.0444 23.9369 20.3563C24.6953 19.52 24.8444 18.2749 24.5043 17.2332C24.2443 16.4559 23.5012 15.9573 22.7416 15.7008C21.7086 15.3466 20.4844 15.1562 19.5488 15.0671C18.1889 14.9376 16.5729 14.9905 16.188 14.0969C16.0345 13.629 16.1651 13.048 16.5951 12.7602C17.7328 11.9885 20.0483 12.091 21.2265 12.6675C21.7675 12.9384 22.081 13.4948 22.2104 14.0565C22.2344 14.2215 22.3454 14.3937 22.5364 14.3865C22.9868 14.3955 23.4372 14.3889 23.8875 14.3895C24.0422 14.4003 24.2116 14.313 24.2418 14.1546C24.2227 12.9806 23.6232 11.7788 22.5419 11.2062Z" fill="currentColor"/></g></svg>,
    MySQL: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m24.129 23.412-.508-.484c-.251-.331-.518-.624-.809-.891l-.005-.004q-.448-.407-.931-.774-.387-.266-1.064-.641c-.371-.167-.661-.46-.818-.824l-.004-.01-.048-.024c.212-.021.406-.06.592-.115l-.023.006.57-.157c.236-.074.509-.122.792-.133h.006c.298-.012.579-.06.847-.139l-.025.006q.194-.048.399-.109t.351-.109v-.169q-.145-.217-.351-.496c-.131-.178-.278-.333-.443-.468l-.005-.004q-.629-.556-1.303-1.076c-.396-.309-.845-.624-1.311-.916l-.068-.04c-.246-.162-.528-.312-.825-.435l-.034-.012q-.448-.182-.883-.399c-.097-.048-.21-.09-.327-.119l-.011-.002c-.117-.024-.217-.084-.29-.169l-.001-.001c-.138-.182-.259-.389-.355-.609l-.008-.02q-.145-.339-.314-.651-.363-.702-.702-1.427t-.651-1.452q-.217-.484-.399-.967c-.134-.354-.285-.657-.461-.942l.013.023c-.432-.736-.863-1.364-1.331-1.961l.028.038c-.463-.584-.943-1.106-1.459-1.59l-.008-.007c-.509-.478-1.057-.934-1.632-1.356l-.049-.035q-.896-.651-1.96-1.282c-.285-.168-.616-.305-.965-.393l-.026-.006-1.113-.278-.629-.048q-.314-.024-.629-.024c-.148-.078-.275-.171-.387-.279-.11-.105-.229-.204-.353-.295l-.01-.007c-.605-.353-1.308-.676-2.043-.93l-.085-.026c-.193-.113-.425-.179-.672-.179-.176 0-.345.034-.499.095l.009-.003c-.38.151-.67.458-.795.84l-.003.01c-.073.172-.115.371-.115.581 0 .368.13.705.347.968l-.002-.003q.544.725.834 1.14.217.291.448.605c.141.188.266.403.367.63l.008.021c.056.119.105.261.141.407l.003.016q.048.206.121.448.217.556.411 1.14c.141.425.297.785.478 1.128l-.019-.04q.145.266.291.52t.314.496c.065.098.147.179.241.242l.003.002c.099.072.164.185.169.313v.001c-.114.168-.191.369-.217.586l-.001.006c-.035.253-.085.478-.153.695l.008-.03c-.223.666-.351 1.434-.351 2.231 0 .258.013.512.04.763l-.003-.031c.06.958.349 1.838.812 2.6l-.014-.025c.197.295.408.552.641.787.168.188.412.306.684.306.152 0 .296-.037.422-.103l-.005.002c.35-.126.599-.446.617-.827v-.002c.048-.474.12-.898.219-1.312l-.013.067c.024-.063.038-.135.038-.211 0-.015-.001-.03-.002-.045v.002q-.012-.109.133-.206v.048q.145.339.302.677t.326.677c.295.449.608.841.952 1.202l-.003-.003c.345.372.721.706 1.127 1.001l.022.015c.212.162.398.337.566.528l.004.004c.158.186.347.339.56.454l.01.005v-.024h.048c-.039-.087-.102-.157-.18-.205l-.002-.001c-.079-.044-.147-.088-.211-.136l.005.003q-.217-.217-.448-.484t-.423-.508q-.508-.702-.969-1.467t-.871-1.555q-.194-.387-.375-.798t-.351-.798c-.049-.099-.083-.213-.096-.334v-.005c-.006-.115-.072-.214-.168-.265l-.002-.001c-.121.206-.255.384-.408.545l.001-.001c-.159.167-.289.364-.382.58l-.005.013c-.141.342-.244.739-.289 1.154l-.002.019q-.072.641-.145 1.318l-.048.024-.024.024c-.26-.053-.474-.219-.59-.443l-.002-.005q-.182-.351-.326-.69c-.248-.637-.402-1.374-.423-2.144v-.009c-.009-.122-.013-.265-.013-.408 0-.666.105-1.308.299-1.91l-.012.044q.072-.266.314-.896t.097-.871c-.05-.165-.143-.304-.265-.41l-.001-.001c-.122-.106-.233-.217-.335-.335l-.003-.004q-.169-.244-.326-.52t-.278-.544c-.165-.382-.334-.861-.474-1.353l-.022-.089c-.159-.565-.336-1.043-.546-1.503l.026.064c-.111-.252-.24-.47-.39-.669l.006.008q-.244-.326-.436-.617-.244-.314-.484-.605c-.163-.197-.308-.419-.426-.657l-.009-.02c-.048-.097-.09-.21-.119-.327l-.002-.011c-.011-.035-.017-.076-.017-.117 0-.082.024-.159.066-.223l-.001.002c.011-.056.037-.105.073-.145.039-.035.089-.061.143-.072h.002c.085-.055.188-.088.3-.088.084 0 .165.019.236.053l-.003-.001c.219.062.396.124.569.195l-.036-.013q.459.194.847.375c.298.142.552.292.792.459l-.018-.012q.194.121.387.266t.411.291h.339q.387 0 .822.037c.293.023.564.078.822.164l-.024-.007c.481.143.894.312 1.286.515l-.041-.019q.593.302 1.125.641c.589.367 1.098.743 1.577 1.154l-.017-.014c.5.428.954.867 1.38 1.331l.01.012c.416.454.813.947 1.176 1.464l.031.047c.334.472.671 1.018.974 1.584l.042.085c.081.154.163.343.234.536l.011.033q.097.278.217.57.266.605.57 1.221t.57 1.198l.532 1.161c.187.406.396.756.639 1.079l-.011-.015c.203.217.474.369.778.422l.008.001c.368.092.678.196.978.319l-.047-.017c.143.065.327.134.516.195l.04.011c.212.065.396.151.565.259l-.009-.005c.327.183.604.363.868.559l-.021-.015q.411.302.822.57.194.145.651.423t.484.52c-.114-.004-.249-.007-.384-.007-.492 0-.976.032-1.45.094l.056-.006c-.536.072-1.022.203-1.479.39l.04-.014c-.113.049-.248.094-.388.129l-.019.004c-.142.021-.252.135-.266.277v.001c.061.076.11.164.143.26l.002.006c.034.102.075.19.125.272l-.003-.006c.119.211.247.393.391.561l-.004-.005c.141.174.3.325.476.454l.007.005q.244.194.508.399c.161.126.343.25.532.362l.024.013c.284.174.614.34.958.479l.046.016c.374.15.695.324.993.531l-.016-.011q.291.169.58.375t.556.399c.073.072.137.152.191.239l.003.005c.091.104.217.175.36.193h.003v-.048c-.088-.067-.153-.16-.184-.267l-.001-.004c-.025-.102-.062-.191-.112-.273l.002.004zm-18.576-19.205q-.194 0-.363.012c-.115.008-.222.029-.323.063l.009-.003v.024h.048q.097.145.244.326t.266.351l.387.798.048-.024c.113-.082.2-.192.252-.321l.002-.005c.052-.139.082-.301.082-.469 0-.018 0-.036-.001-.054v.003c-.045-.044-.082-.096-.108-.154l-.001-.003-.081-.182c-.053-.084-.127-.15-.214-.192l-.003-.001c-.094-.045-.174-.102-.244-.169z"></path></g></svg>,
    Git: <svg className="h-5 w-5" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.13984 4.72563C5.94742 4.3112 6.5 3.47013 6.5 2.5C6.5 1.11929 5.38071 0 4 0C2.61929 0 1.5 1.11929 1.5 2.5C1.5 3.52516 2.11705 4.4062 3 4.79198V11.208C2.11705 11.5938 1.5 12.4748 1.5 13.5C1.5 14.8807 2.61929 16 4 16C5.38071 16 6.5 14.8807 6.5 13.5C6.5 12.4748 5.88295 11.5938 5 11.208V7.41421L7.08579 9.5H9.70802C10.0938 10.383 10.9748 11 12 11C13.3807 11 14.5 9.88071 14.5 8.5C14.5 7.11929 13.3807 6 12 6C10.9748 6 10.0938 6.61705 9.70802 7.5H7.91421L5.13984 4.72563Z" /></svg>,
    'VS Code': <svg className="h-5 w-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.0016 3.11679C21.0016 2.23783 20.0175 2.23782 19.5801 2.34769C20.1924 1.86426 20.9105 1.98147 21.1656 2.12796L27.079 5.02747C27.6424 5.30375 27.9998 5.8786 27.9998 6.50857V25.5831C27.9998 26.2215 27.6329 26.8025 27.058 27.0743L21.4937 29.7054C21.1109 29.8701 20.2799 30.2767 19.5801 29.7053C20.4549 29.8702 20.9287 29.2476 21.0016 28.8264V3.11679Z" fill="url(#paint0_linear_87_8101)" /><path d="M19.6512 2.3319C20.1154 2.24017 21.0018 2.28271 21.0018 3.11685V9.68254L3.07359 23.2453C2.76022 23.4824 2.3192 23.443 2.05229 23.1542L0.204532 21.1548C-0.0849358 20.8416 -0.0646824 20.3513 0.249624 20.0633L19.5802 2.34775L19.6512 2.3319Z" fill="url(#paint1_linear_87_8101)" /><path d="M21.0018 22.3708L3.07359 8.80801C2.76022 8.57094 2.3192 8.61028 2.05229 8.8991L0.204532 10.8985C-0.0849358 11.2117 -0.0646824 11.702 0.249624 11.9901L19.5802 29.7056C20.455 29.8704 20.9289 29.2478 21.0018 28.8266V22.3708Z" fill="url(#paint2_linear_87_8101)" /><defs><linearGradient id="paint0_linear_87_8101" x1="23.79" y1="2" x2="23.79" y2="30" gradientUnits="userSpaceOnUse"><stop stopColor="#32B5F1" /><stop offset="1" stopColor="#2B9FED" /></linearGradient><linearGradient id="paint1_linear_87_8101" x1="21.0018" y1="5.53398" x2="1.0217" y2="22.3051" gradientUnits="userSpaceOnUse"><stop stopColor="#0F6FB3" /><stop offset="0.270551" stopColor="#1279B7" /><stop offset="0.421376" stopColor="#1176B5" /><stop offset="0.618197" stopColor="#0E69AC" /><stop offset="0.855344" stopColor="#0F70AF" /><stop offset="1" stopColor="#0F6DAD" /></linearGradient><linearGradient id="paint2_linear_87_8101" x1="1.15522" y1="9.98389" x2="21.0791" y2="26.4808" gradientUnits="userSpaceOnUse"><stop stopColor="#1791D2" /><stop offset="1" stopColor="#1173C5" /></linearGradient></defs></g></svg>,
     Figma: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M8.66699 9.41667C7.24021 9.41667 6.08366 10.5731 6.08366 11.9998C6.08366 13.4266 7.24026 14.5832 8.66699 14.5832H11.2503V12.0519C11.2501 12.0346 11.25 12.0172 11.25 11.9998C11.25 11.9825 11.2501 11.9651 11.2503 11.9478V9.41667H8.66699ZM11.2503 7.91667H8.66699C7.24026 7.91667 6.08366 6.76007 6.08366 5.33333C6.08366 3.9066 7.24026 2.75 8.66699 2.75H11.2503V7.91667ZM12.7503 2.75V7.91663L15.333 7.9165C16.7597 7.9165 17.9167 6.76002 17.9167 5.33333C17.9167 3.9066 16.7601 2.75 15.3333 2.75H12.7503ZM15.3331 9.4165C13.9203 9.41664 12.7724 10.5509 12.7503 11.9584V12.0412C12.7724 13.4489 13.9204 14.5832 15.3333 14.5832C16.7601 14.5832 17.9167 13.4266 17.9167 11.9998C17.9167 10.5731 16.7598 9.41652 15.3331 9.4165ZM8.66699 16.0832C7.2403 16.0832 6.0835 17.24 6.0835 18.6668C6.0835 20.0936 7.24009 21.2502 8.66683 21.2502C10.0936 21.2502 11.2502 20.0936 11.2502 18.6668L11.2503 16.0832H8.66699Z" fill="currentColor"></path> </g></svg>,
      Canva: <svg className="h-5 w-5" viewBox="0 0 192 192" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M95.2 170c-11.6 0-22-3.1-30.9-9.1-8.8-6-15.4-14.6-19.7-25.6-2.5-6.4-4-13.4-4.7-21.4-.8-9.5-.2-19.2 1.9-28.7 3.3-15.3 10-28.5 19.8-39.5 9.7-10.8 21.2-18.1 34.3-21.5 5.6-1.5 11.2-2.2 16.5-2.2 6.4 0 12.7 1.1 18.7 3.3 8.9 3.3 15 9 17.9 17 1.4 3.7 1.8 7.6 1.4 12-.6 6.2-2.6 11.7-6 16.4-3.9 5.4-8.6 8.7-14.3 10.1-1 .3-2.1.4-3.3.4-.5 0-.9 0-1.4-.1-1.7-.2-3.2-.9-4.2-2.2-1-1.3-1.4-3-1.2-4.7.3-2 1.1-3.7 1.9-5.1l.3-.6c1.6-3.2 3.1-6.2 3.9-9.4 1.3-5.4 1.3-9.5-.1-13.3-1.5-4-4.3-6.5-8.5-7.5-1.6-.4-3.2-.6-4.8-.6-3.6 0-7.4.9-11.4 2.7C93.4 44 86.7 50 81 58.7c-3.9 6-6.9 12.7-9.1 20.5-1.6 5.6-2.6 11.5-3.2 17.6-.3 2.9-.5 6.3-.5 9.6.1 9.7 1.5 17.4 4.5 24.2 3.3 7.6 7.8 12.9 13.9 16.3 4.1 2.3 8.7 3.5 13.6 3.5.8 0 1.7 0 2.6-.1 10.4-.8 19.6-5.5 28-14.3 4.3-4.5 7.9-9.7 11-15.9.5-.9 1-1.9 1.8-2.7 1-1.1 2.3-1.7 3.7-1.7 1.7 0 3.2.9 4.2 2.5 1.2 2 1.1 4.2.9 5.6-.6 4.1-2.1 8.1-4.6 12.8-7.2 12.9-17.1 22.4-29.4 28.3-6.3 3-13.1 4.7-20.1 5-1.1.1-2.1.1-3.1.1z" stroke="currentColor" strokeWidth="12" strokeLinejoin="round" strokeMiterlimit="10" /></g></svg>,
     TypeScript: <svg className="h-5 w-5" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#3178c6"></rect><path fill="#ffffff" d="m233 284h64v-41H118v41h64v183h51zm84 173c8.1 4.2 18 7.3 29 9.4s23 3.1 35 3.1c12 0 23-1.1 34-3.4c11-2.3 20-6.1 28-11c8.1-5.3 15-12 19-21s7.1-19 7.1-32c0-9.1-1.4-17-4.1-24s-6.6-13-12-18c-5.1-5.3-11-10-18-14s-15-8.2-24-12c-6.6-2.7-12-5.3-18-7.9c-5.2-2.6-9.7-5.2-13-7.8c-3.7-2.7-6.5-5.5-8.5-8.4c-2-3-3-6.3-3-10c0-3.4.89-6.5 2.7-9.3s4.3-5.1 7.5-7.1c3.2-2 7.2-3.5 12-4.6c4.7-1.1 9.9-1.6 16-1.6c4.2 0 8.6.31 13 .94c4.6.63 9.3 1.6 14 2.9c4.7 1.3 9.3 2.9 14 4.9c4.4 2 8.5 4.3 12 6.9v-47c-7.6-2.9-16-5.1-25-6.5s-19-2.1-31-2.1c-12 0-23 1.3-34 3.8s-20 6.5-28 12c-8.1 5.4-14 12-19 21c-4.7 8.4-7 18-7 30c0 15 4.3 28 13 38c8.6 11 22 19 39 27c6.9 2.8 13 5.6 19 8.3s11 5.5 15 8.4c4.3 2.9 7.7 6.1 10 9.5c2.5 3.4 3.8 7.4 3.8 12c0 3.2-.78 6.2-2.3 9s-3.9 5.2-7.1 7.2s-7.1 3.6-12 4.8c-4.7 1.1-10 1.7-17 1.7c-11 0-22-1.9-32-5.7c-11-3.8-21-9.5-28.1-15.44z"/></g></svg>,
    JavaScript: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.427-.414l-1.286 1.551c.239.321.352.48.554.75 1.207 1.501 4.455 1.8 4.987.315.531-1.47.564-3.136.573-5.02.001-1.775-.01-3.555-.01-5.322z"/></svg>
  }

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium transition-colors ${color} bg-zinc-100 ${bg}`}>
      {icons[name] && <span className="shrink-0">{icons[name]}</span>}
      {name}
    </span>
  )
}

function ProjectCard({ id, arch, title, role, year, status, version, highlights, snippet }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition-all hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10">
      <div className="flex items-start justify-between gap-4">
        <span className="text-[10px] font-bold text-emerald-600">{id} //</span>
        <div className="flex gap-2 text-[10px] uppercase tracking-widest text-zinc-500">
          <span className="rounded border border-zinc-200 bg-zinc-100 px-2 py-1">{status}</span>
          <span className="rounded border border-zinc-200 bg-zinc-100 px-2 py-1">v{version}</span>
          <div className="group/info relative">
            <Info size={14} className="cursor-help text-zinc-400 hover:text-emerald-600" />
            <div className="absolute right-0 top-6 z-10 hidden w-max rounded bg-zinc-800 px-2 py-1 text-[10px] text-white shadow-lg group-hover/info:block">
              Architecture: {arch}
            </div>
          </div>
        </div>
      </div>

      <h3 className="mb-2 mt-3 text-lg font-bold text-zinc-900">{title}</h3>
      <div className="mb-6 text-xs text-zinc-500">
        {role} • {year}
      </div>

      <div className="mb-6 space-y-2 text-xs text-zinc-600">
        {highlights.map((item) => (
          <div key={item.text} className="flex items-start gap-2">
            <span className="mt-0.5">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded border border-zinc-200 bg-zinc-100 px-4 py-2 text-xs uppercase tracking-widest text-emerald-600 transition-all hover:bg-emerald-500/10 hover:border-emerald-500/30"
      >
        <span>View Logic</span>
        <ChevronDown className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} size={14} />
      </button>

      <div className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr] mt-4 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <pre className="rounded-lg border border-zinc-200 bg-zinc-100 p-4 font-mono text-[10px] leading-relaxed text-zinc-600">
            <code>{snippet}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}
