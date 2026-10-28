'use client'

import { FormEvent, useEffect, useState } from 'react'
import { ArrowUpRight, Check, ChevronDown, CircleUserRound, GitBranch, Mail, Menu, Moon, Sun, X } from 'lucide-react'

const skillGroups = [
  { name: 'Core stack', subtitle: 'Foundation of my daily work', skills: ['HTML', 'CSS', 'JavaScript ES6', 'Bootstrap / Tailwind'] },
  { name: 'Frontend', subtitle: 'Interface work and component structure', skills: ['React', 'Next.js', 'Angular', 'TypeScript'] },
  { name: 'Backend & APIs', subtitle: 'Server logic, data flow, and application structure', skills: ['Laravel', 'PHP', 'ASP.NET', 'REST APIs', 'OOPS'] },
  { name: 'Databases & tooling', subtitle: 'Storage, queries, and practical delivery', skills: ['MySQL / SQL', 'MongoDB', 'Node.js / Express', 'Git / Deployment'] },
]

const projects = [
  { title: 'Nexa Commerce', type: 'E-COMMERCE PLATFORM', description: 'A conversion-focused storefront with a modular product system and seamless checkout experience.', tags: ['React', '.NET', 'Stripe'], tone: 'sage' },
  { title: 'Atlas Analytics', type: 'DATA DASHBOARD', description: 'A clear, real-time dashboard that turns complex business data into confident decisions.', tags: ['React', 'Charts', 'API'], tone: 'blue' },
  { title: 'Northstar Studio', type: 'BRAND WEBSITE', description: 'A bold digital home for an independent studio, designed to make every interaction feel considered.', tags: ['WordPress', 'CSS', 'UX'], tone: 'peach' },
]

function Navbar({ dark, setDark }: { dark: boolean; setDark: (value: boolean) => void }) {
  const [open, setOpen] = useState(false)
  const links = ['About', 'Projects', 'Skills', 'Experience', 'Contact']
  return <header className="site-header"><a className="brand" href="#home">MUHAMMAD HUSSAIN</a><nav className={open ? 'nav-links open' : 'nav-links'}>{links.map(link => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}</nav><div className="nav-actions"><button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? <Sun size={17} /> : <Moon size={17} />}</button><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button></div></header>
}

function Hero() {
  return <section id="home" className="hero container"><div className="hero-copy"><span className="pill">AVAILABLE FOR WORK</span><h1>I build web products that feel clear, useful, and built with intent.</h1><p>I&apos;m Muhammad Hussain, a frontend and full-stack developer crafting fast, expressive web experiences for people and brands that care about the details.</p><div className="hero-actions"><a className="button button-primary" href="#projects">View projects <ArrowUpRight size={16} /></a><a className="button" href="#contact">Contact</a></div><div className="hero-facts"><span>Frontend and backend experience</span><span>Comfortable in modern and legacy stacks</span></div></div><div className="hero-visual"><img src="/assets/hussain.jfif" alt="Muhammad Hussain" /><div className="social-buttons"><a href="https://github.com/mh5805163" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitBranch size={18} /></a><a href="https://linkedin.com" aria-label="LinkedIn"><CircleUserRound size={18} /></a></div><span className="role-label">Software Engineer / Full-Stack Developer</span></div></section>
}

function About() {
  return <section id="about" className="section container"><span className="section-kicker">ABOUT</span><h2>I started out curious about how websites worked and kept following that thread until it became a craft.</h2><div className="about-grid"><div><p>Over the last few years, that curiosity has turned into building full-stack systems and thoughtful digital experiences.</p><p>I care about the parts that usually get glossed over: clear structure, sensible interactions, and code that other people can actually follow.</p></div><ul><li>Frontend systems</li><li>Backend architecture</li><li>Product-minded implementation</li><li>Readable code</li><li>API integration</li></ul></div><div className="stats"><div><strong>05+</strong><span>Years of building products</span></div><div><strong>30+</strong><span>Projects shipped or refined</span></div><div><strong>100%</strong><span>Attention to detail</span></div></div></section>
}

function Projects() {
  return <section id="projects" className="section container"><span className="section-kicker">PROJECTS</span><h2>Each one started with a problem that felt concrete, then grew into a full product decision.</h2><div className="project-grid">{projects.map(project => <article className={`project-card ${project.tone}`} key={project.title}><div className="project-preview"><div className="preview-bar"><i /><i /><i /></div><div className="preview-lines"><b /><b /><b /><b /></div></div><div className="project-body"><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="project-link" href="#contact">View project <ArrowUpRight size={15} /></a></div></article>)}</div></section>
}

function Skills() {
  return <>
    <section id="skills" className="section skills-section container"><span className="section-kicker">SKILLS</span><h2>I move comfortably between interface details, data structures, and server-side logic.</h2><div className="skills-grid">{skillGroups.map(group => <article className="skill-card" key={group.name}><div className="skill-card-heading"><h3>{group.name}</h3><p>{group.subtitle}</p></div><div className="skill-list">{group.skills.map(name => <div className="skill-row" key={name}><div className="skill-label"><span>{name}</span></div></div>)}</div></article>)}</div></section>
  </>
}

function Experience() { return <section id="experience" className="section container compact"><span className="section-kicker">EXPERIENCE</span><h2>Learning, shipping, and getting a little better at the craft every day.</h2><div className="experience-list"><div><span>2023 — PRESENT</span><h3>Frontend / Full Stack Developer</h3><p>Building robust, polished digital products for ambitious businesses and teams.</p></div><div><span>2021 — 2023</span><h3>Web Developer</h3><p>Shipped responsive web experiences across e-commerce, SaaS, and content platforms.</p></div></div></section> }

function Contact() { const [sent, setSent] = useState(false); function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSent(true); e.currentTarget.reset() } return <section id="contact" className="contact-section"><div className="container contact-grid"><div><span className="section-kicker">CONTACT</span><h2>Let&apos;s make something meaningful.</h2><p>Tell me a little about what you&apos;re working on. I&apos;ll get back to you within a couple of days.</p><div className="contact-socials"><a href="mailto:hello@muhammadhussain.dev"><Mail size={18} /></a><a href="https://github.com"><GitBranch size={18} /></a><a href="https://linkedin.com"><CircleUserRound size={18} /></a></div></div><form onSubmit={submit}><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@company.com" /></label><label>Message<textarea name="message" rows={4} required placeholder="Tell me about your project..." /></label><button className="button button-primary" type="submit">Send message <ArrowUpRight size={16} /></button>{sent && <p className="success"><Check size={15} /> Thanks — your message is ready.</p>}</form></div></section> }

export default function Portfolio() { const [dark, setDark] = useState(false); useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light' }, [dark]); return <div className="portfolio"><Navbar dark={dark} setDark={setDark} /><main><Hero /><About /><Projects /><Skills /><Experience /><Contact /></main><footer className="footer container"><span>MUHAMMAD HUSSAIN</span><span>© {new Date().getFullYear()} Built with care</span><a href="#home">Back to top <ChevronDown size={14} /></a></footer></div> }
