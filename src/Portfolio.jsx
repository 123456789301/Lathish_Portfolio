import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

const PROFILE_IMAGE = '/profile.svg'; // replace with your image path or URL (put file in /public)
const RESUME_URL = '#'; // replace with link to resume PDF in /public (e.g. /resume.pdf)
const GITHUB_URL = 'https://github.com/username'; // replace with your GitHub
const LINKEDIN_URL = 'https://www.linkedin.com/in/lathish-r-852582282/';
const EMAIL = 'lathishrajinikanth@gmail.com';

const tech = [
  'ASP.NET MVC',
  '.NET Core',
  'C#',
  'SQL Server',
  'Web API',
  'HTML',
  'CSS',
  'JavaScript',
  'Azure Fundamentals',
  'Git & GitHub',
  'Prompt Engineering / AI Agents'
];

const projects = [
  {
    title: 'Task Reminder App (with AI)',
    summary:
      'A .NET application that uses AI-assisted natural language parsing to convert free-text tasks into structured schedules and sends email reminders.',
    tech: ['.NET', 'AI Integration', 'Email Reminders']
  },
  {
    title: 'Employee Management System',
    summary:
      'CRUD application with authentication, role-based access and reporting built using .NET Core, SQL Server and Bootstrap.',
    tech: ['.NET Core', 'SQL Server', 'Bootstrap']
  }
];

export default function Portfolio() {
  const [contact, setContact] = useState({ name: '', message: '' });

  function handleContactSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${contact.name || 'Website Visitor'}`);
    const body = encodeURIComponent(contact.message || 'Hi Lathish, I would like to get in touch...');
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      <header className="sticky top-0 backdrop-blur bg-white/60 border-b border-slate-200 z-40">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-lg font-semibold">LR</div>
            <div>
              <div className="text-sm font-semibold">Lathish R</div>
              <div className="text-xs text-slate-500">.NET Developer</div>
            </div>
          </div>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href={RESUME_URL} className="ml-2 inline-block rounded-md px-3 py-1 border border-slate-300 text-sm shadow-sm hover:bg-slate-50">Resume</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* HERO */}
        <section id="home" className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Hi, I'm Lathish <span className="inline-block">👋</span></h1>
            <p className="mt-4 text-lg text-slate-700">I'm a passionate <strong>.NET Developer</strong> experienced in ASP.NET, .NET Core, SQL, HTML/CSS, JavaScript and exploring AI &amp; Prompt Engineering. I love solving problems and building impactful solutions.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border hover:shadow-sm">
                <Github size={16} /> GitHub
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border hover:shadow-sm">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-md border hover:shadow-sm">
                <Mail size={16} /> Email
              </a>
            </div>

            <div className="mt-8">
              <h3 className="text-sm text-slate-500">Technologies I Work With</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 border border-slate-200">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <aside className="flex items-center justify-center">
            <div className="w-48 h-48 rounded-2xl bg-gradient-to-tr from-slate-200 to-slate-100 flex items-center justify-center overflow-hidden shadow-lg">
              {/* Replace with your actual profile image */}
              <img src={PROFILE_IMAGE} alt="Lathish R" className="object-cover w-full h-full" />
            </div>
          </aside>
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-16 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="mt-3 text-slate-700">I'm currently working as a Software Engineer, specialized in backend development using Microsoft technologies. I’m exploring AI integration into modern web apps and I believe in writing clean, maintainable code while continuously learning.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium">Primary Focus</h4>
              <ul className="mt-2 text-slate-700 list-disc list-inside">
                <li>Backend systems using ASP.NET &amp; .NET Core</li>
                <li>REST APIs and integrations</li>
                <li>Database design with SQL Server</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Also Learning</h4>
              <ul className="mt-2 text-slate-700 list-disc list-inside">
                <li>AI-driven features and prompt engineering</li>
                <li>Cloud fundamentals (Azure)</li>
                <li>Modern frontend techniques and React</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-12">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <article key={p.title} className="p-5 bg-white rounded-xl border shadow-sm">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-slate-700">{p.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 border">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-sm inline-flex items-center gap-2 px-3 py-1 rounded-md border">View Code</a>
                  <a href={RESUME_URL} className="text-sm inline-flex items-center gap-2 px-3 py-1 rounded-md border">Case Study / Demo</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-12 bg-white p-6 rounded-2xl border shadow-sm">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-slate-700">Want to work together or ask about a project? Send a message and I'll get back to you.</p>

          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <div>
                  <div className="text-sm font-medium">Email</div>
                  <a href={`mailto:${EMAIL}`} className="text-sky-600 text-sm">{EMAIL}</a>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <MapPin size={18} />
                <div>
                  <div className="text-sm font-medium">Location</div>
                  <div className="text-sm text-slate-600">Chennai, Tamil Nadu</div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <Linkedin size={18} />
                <div>
                  <div className="text-sm font-medium">LinkedIn</div>
                  <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="text-sky-600 text-sm">{LINKEDIN_URL}</a>
                </div>
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-3">
              <label className="block">
                <span className="text-sm text-slate-700">Name</span>
                <input value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} className="mt-1 block w-full rounded-md border px-3 py-2" placeholder="Your name" />
              </label>

              <label className="block">
                <span className="text-sm text-slate-700">Message</span>
                <textarea value={contact.message} onChange={(e) => setContact({ ...contact, message: e.target.value })} className="mt-1 block w-full rounded-md border px-3 py-2 h-28" placeholder="Tell me about your project or question"></textarea>
              </label>

              <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 text-white rounded-md">Send Message</button>
            </form>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Lathish R — Built with .NET &amp; React • Designed for recruiters &amp; teams
        </footer>
      </main>
    </div>
  );
}
