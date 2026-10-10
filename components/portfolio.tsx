'use client'

import { FormEvent, useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  GitBranch,
  Globe2,
  Layers3,
  CircleUserRound,
  Mail,
  Menu,
  MoveUpRight,
  Palette,
  ServerCog,
  Smartphone,
  Sparkles,
  X,
} from 'lucide-react'

const skills = [
  { name: 'React.js', level: 'Advanced', icon: Braces, color: 'lime' },
  { name: '.NET', level: 'Advanced', icon: ServerCog, color: 'blue' },
  { name: 'HTML5', level: 'Advanced', icon: Code2, color: 'orange' },
  { name: 'CSS3', level: 'Advanced', icon: Palette, color: 'pink' },
  { name: 'WordPress', level: 'Proficient', icon: Globe2, color: 'cyan' },
]

const projects = [
  { number: '01', title: 'Nexa Commerce', type: 'E-COMMERCE PLATFORM', description: 'A conversion-focused storefront with a modular product system and seamless checkout experience.', tags: ['React', '.NET', 'Stripe'], accent: 'lime' },
  { number: '02', title: 'Atlas Analytics', type: 'DATA DASHBOARD', description: 'A clear, real-time dashboard that turns complex business data into confident decisions.', tags: ['React', 'Charts', 'API'], accent: 'blue' },
  { number: '03', title: 'Northstar Studio', type: 'BRAND WEBSITE', description: 'A bold digital home for an independent studio, designed to make every interaction feel considered.', tags: ['WordPress', 'CSS', 'UX'], accent: 'pink' },
]

const experience = [
  { date: '2023 — Present', role: 'Frontend / Full Stack Developer', company: 'Independent · Remote', text: 'Building robust, polished digital products for ambitious businesses and teams.' },
  { date: '2021 — 2023', role: 'Web Developer', company: 'Digital Product Studio', text: 'Shipped responsive web experiences across e-commerce, SaaS, and content platforms.' },
  { date: '2019 — 2021', role: 'WordPress Developer', company: 'Creative Agency', text: 'Translated brand systems into fast, flexible websites that clients could own.' },
]

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="section-label"><span>{number}</span><span>{children}</span></div>
}

function Brand() {
  return <a href="#home" className="brand" aria-label="Muhammad Hussain home"><span className="brand-mark">MH</span><span>Muhammad<br /><b>Hussain</b></span></a>
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = ['About', 'Skills', 'Projects', 'Experience', 'Services', 'Contact']
  return <header className="site-header"><div className="nav-shell"><Brand /><nav id="primary-navigation" className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">{links.map((link, i) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} tabIndex={open ? 0 : undefined}><span>0{i + 1}</span>{link}</a>)}</nav><a href="#contact" className="nav-cta">Let&apos;s talk <ArrowUpRight size={15} /></a><button className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button></div></header>
}

function Hero() {
  return <section id="home" className="hero"><div className="hero-grid" /><div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> Available for select projects</p><h1>Ideas into<br /><em>impact.</em></h1><p className="hero-intro">I&apos;m Muhammad Hussain, a frontend and full stack developer crafting fast, expressive web experiences for people and brands that care about the details.</p><div className="hero-actions"><a className="button button-primary" href="#projects">View my work <ArrowDownRight size={17} /></a><a className="button button-ghost" href="#contact">Contact me <ArrowUpRight size={17} /></a></div></div><div className="hero-meta"><span>Scroll to explore</span><span className="hero-line" /><span>01 / 06</span></div><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><div className="hero-code"><span>{'{'} </span><span>build</span><br />beautiful<br />things<span> {'}'}</span></div></section>
}

function About() {
  return <section id="about" className="section about"><SectionLabel number="01">A little about me</SectionLabel><div className="about-layout"><h2>Good work lives<br />between <span>logic</span><br />and feeling.</h2><div className="about-copy"><p>I&apos;m a passionate web developer who enjoys turning thoughtful ideas into modern, responsive, and user-friendly digital products.</p><p>From frontend interfaces to full stack systems, I care about the invisible details: the performance, the accessibility, and the moments that make a product feel effortless.</p><a className="text-link" href="#contact">More about me <ArrowUpRight size={16} /></a></div></div><div className="about-stats"><div><strong>05+</strong><span>Years building<br />for the web</span></div><div><strong>30+</strong><span>Projects shipped<br />with care</span></div><div><strong>∞</strong><span>Curiosity for<br />what&apos;s next</span></div></div></section>
}

function Skills() {
  return <section id="skills" className="section skills"><SectionLabel number="02">What I bring</SectionLabel><div className="section-heading"><h2>Tools of<br /><span>the trade.</span></h2><p>A focused toolkit for building digital experiences that are as reliable under the hood as they are enjoyable to use.</p></div><div className="skills-grid">{skills.map(({ name, level, icon: Icon, color }, i) => <div className={`skill-card ${color}`} key={name}><div className="skill-top"><span className="skill-index">0{i + 1}</span><Icon size={23} strokeWidth={1.5} /></div><h3>{name}</h3><div className="skill-bottom"><span>{level}</span><span className="skill-arrow">↗</span></div></div>)}</div></section>
}

function Projects() {
  return <section id="projects" className="section projects"><SectionLabel number="03">Selected work</SectionLabel><div className="section-heading projects-heading"><h2>Things I&apos;ve<br /><span>made.</span></h2><a className="text-link" href="#contact">Start a project <ArrowUpRight size={16} /></a></div><div className="projects-list">{projects.map((project) => <article className={`project-card ${project.accent}`} key={project.number}><div className="project-visual"><div className="visual-window"><div className="window-bar"><i /><i /><i /></div><div className="visual-content"><span>{project.number}</span><div className="visual-chart"><b /><b /><b /><b /><b /></div><div className="visual-block" /></div></div></div><div className="project-info"><span className="project-number">{project.number}</span><div><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><a href="#contact" aria-label={`View ${project.title} project`} className="project-link"><ArrowUpRight size={18} /></a></div></article>)}</div></section>
}

function Experience() {
  return <section id="experience" className="section experience"><SectionLabel number="04">The path so far</SectionLabel><div className="experience-layout"><div><h2>Experience<br /><span>in motion.</span></h2><p className="experience-lead">A timeline of learning, shipping, and getting a little better at the craft every day.</p></div><div className="timeline">{experience.map((item, i) => <div className="timeline-item" key={item.role}><div className="timeline-marker">0{i + 1}</div><div><span className="timeline-date">{item.date}</span><h3>{item.role}</h3><p className="timeline-company">{item.company}</p><p>{item.text}</p></div></div>)}</div></div></section>
}

function Services() {
  const items = [{ icon: Braces, title: 'React.js Development', text: 'Scalable interfaces with thoughtful component systems.' }, { icon: ServerCog, title: '.NET Development', text: 'Reliable backend architecture built for real growth.' }, { icon: Smartphone, title: 'Responsive Web Design', text: 'Fluid experiences that feel right on every screen.' }, { icon: Globe2, title: 'WordPress Development', text: 'Flexible sites that teams can confidently manage.' }]
  return <section id="services" className="section services"><SectionLabel number="05">How I can help</SectionLabel><div className="section-heading"><h2>Built for<br /><span>momentum.</span></h2></div><div className="services-grid">{items.map(({ icon: Icon, title, text }, i) => <div className="service-item" key={title}><span className="service-number">0{i + 1}</span><Icon size={25} strokeWidth={1.5} /><h3>{title}</h3><p>{text}</p><ArrowUpRight className="service-arrow" size={18} /></div>)}</div></section>
}

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const subject = String(data.get('subject') || 'Portfolio enquiry')
    const body = [`Name: ${data.get('name')}`, `Email: ${data.get('email')}`, '', String(data.get('message') || '')].join('\\n')
    window.location.href = `mailto:hello@muhammadhussain.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
    form.reset()
  }

  return <section id="contact" className="contact"><div className="contact-glow" /><SectionLabel number="06">Have a project in mind?</SectionLabel><div className="contact-layout"><div><h2>Let&apos;s make<br /><em>something</em><br />meaningful.</h2><p>Tell me a little about what you&apos;re working on. I&apos;ll get back to you within a couple of days.</p><div className="socials"><a href="https://github.com" aria-label="GitHub"><GitBranch size={18} /></a><a href="https://linkedin.com" aria-label="LinkedIn"><CircleUserRound size={18} /></a><a href="mailto:hello@muhammadhussain.dev" aria-label="Email"><Mail size={18} /></a></div></div><form className="contact-form" onSubmit={handleSubmit} aria-describedby={submitted ? 'contact-success' : undefined}><label htmlFor="name">Name<input id="name" name="name" required placeholder="Your name" /></label><label htmlFor="email">Email<input id="email" name="email" required type="email" placeholder="you@company.com" /></label><label htmlFor="subject">Subject<input id="subject" name="subject" placeholder="What can I help with?" /></label><label htmlFor="message">Message<textarea id="message" name="message" required rows={4} placeholder="Tell me about your project..." /></label><button className="button button-primary" type="submit">Send message <MoveUpRight size={17} /></button>{submitted && <p id="contact-success" className="form-success" role="status">Thanks — the form is validated. Please email me directly to send your brief.</p>}</form></div></section>
}

function Footer() {
  return <footer className="footer"><Brand /><p>Designed & built with care.<br />© {new Date().getFullYear()} Muhammad Hussain</p><a href="#home" className="back-top">Back to top <ChevronDown size={15} /></a></footer>
}

export default function Portfolio() {
  return <div className="portfolio"><Navbar /><main><Hero /><About /><Skills /><Projects /><Experience /><Services /><Contact /></main><Footer /></div>
}
