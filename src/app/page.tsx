"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, Github, Linkedin, Mail, ExternalLink, 
  ChevronDown, Sparkles, Layers, Code2, Music4, 
  Globe, Smartphone, Monitor,
  Lightbulb
} from "lucide-react";

const projects = [
  {
    id: "shamayim",
    title: "Crônicas de Shamayim (CSI)",
    subtitle: "RPG de Alta Fidelidade",
    description: "Desenvolvimento de um RPG de alta fidelidade usando Unity 6 e C#. Arquitetura distribuída com .NET 9, Next.js 16 para o site, PostgreSQL para dados persistentes e Redis para cache. Foco em performance, escalabilidade e experiência imersiva.",
    tags: ["Unity 6", "C#", ".NET 9", "Next.js 16", "PostgreSQL", "Redis"],
    year: "2025",
    role: "Engenheiro de Software Principal",
    icon: Layers,
    featured: true,
    stats: [
      { label: "Sistemas", value: "12+" },
      { label: "Arquitetura", value: "Distribuída" },
      { label: "Stack", value: "Full-Stack" }
    ],
    image: "/cronicas-de-shamayim.png"
  },
  {
    id: "bot",
    title: "Crônicas de Shamayim Bot (CSI)",
    subtitle: "Bot da comunidade do servidor de Shamayim",
    description: "Bot de comunidade para o servidor de Shamayim, desenvolvido em Node.js. Responde a perguntas sobre o jogo, fornece atualizações e interage com os jogadores para melhorar a experiência da comunidade.",
    tags: ["Node.js", "Discord.js", "Comunidade", "Bot de Resposta", "Servidor de Jogo"],
    year: "2023",
    role: "Criador",
    icon: Smartphone,
    featured: false,
    stats: [
      { label: "Bot", value: "JS Server" },
      { label: "Comunidade", value: "Discord" },
      { label: "Objetivo", value: "Melhorar a experiência da comunidade" }
    ],
    image: "/bot.png"
  },
  {
    id: "izano",
    title: "IZANO",
    subtitle: "App de Japonês",
    description: "Aplicativo nativo macOS para aprendizado de japonês com Sistema de Repetição Espaçada (SRS). Gamificação XP, múltiplos perfis com proteção PIN, sessões Pomodoro e interface multilíngue.",
    tags: ["SwiftUI", "SwiftData", "macOS 14+", "SRS Algorithm", "Xcode"],
    year: "2026",
    role: "Criador",
    icon: Globe,
    featured: false,
    stats: [
      { label: "Plataforma", value: "macOS" },
      { label: "Recursos", value: "SRS + Gamificação" },
      { label: "UI", value: "SwiftUI" }
    ],
    image: "/metodo-izano.png"
  },
  {
    id: "cromiun",
    title: "Cromiun Sound",
    subtitle: "Estação de Voz IA",
    description: "Estação de trabalho musical macOS profissional para treinar modelos de voz personalizados. Integração RVC, ferramentas de preparação de datasets e interface SwiftUI nativa.",
    tags: ["SwiftUI", "Python/RVC", "ffmpeg", "Audio Processing", "macOS"],
    year: "2026",
    role: "Criador",
    icon: Music4,
    featured: false,
    stats: [
      { label: "Integração", value: "RVC" },
      { label: "Áudio", value: "Processamento 40kHz" },
      { label: "Objetivo", value: "Clone de Voz" }
    ],
    image: "/cromiun-sound.png"
  }
];

const skills = [
  { category: "Desenvolvimento de Jogos", items: ["Unity 6", "C#", ".NET", "3D Graphics", "Physics"] },
  { category: "Web & Frontend", items: ["Next.js", "React", "TypeScript", "Framer Motion", "GLSL"] },
  { category: "Discord Bots & Comunidade", items: ["Discord.js", "Bots de Resposta", "Engajamento Comunitário"] },
  { category: "Backend & Sistemas", items: ["Node.js", "Rust", "PostgreSQL", "Redis", "Sistemas Distribuídos"] },
  { category: "Apps Nativos", items: ["SwiftUI", "SwiftData", "macOS", "iOS", "Xcode"] },
  { category: "Áudio & IA", items: ["RVC", "ffmpeg", "Clone de Voz", "Processamento de Áudio"] },
  { category: "Ferramentas & DevOps", items: ["Git", "Docker", "CI/CD", "AWS", "Linux"] },
  { category: "Design & Criatividade", items: ["Figma", "Blender", "Adobe Suite", "Design de Interação"] },
];

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/izanomikoto" },
  { name: "LinkedIn", icon: Linkedin, href: "https://br.linkedin.com/in/vinicius-silva-rodrigues-56a02b1a0" },
  { name: "Email", icon: Mail, href: "mailto:izanomikoto@yahoo.com" },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre", href: "#about" },
    { name: "Projetos", href: "#work" },
    { name: "Tecnologias", href: "#stack" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-apple-bg">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-apple-surface/80 backdrop-blur-xl border-b border-apple-border" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.a
            href="#"
            className="text-xl font-semibold tracking-tight"
            whileHover={{ scale: 1.02 }}
          >
            Vinicius
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-sm text-apple-text-secondary hover:text-apple-text transition-colors"
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-apple-surface/95 backdrop-blur-xl border-b border-apple-border"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-apple-surface border border-apple-border text-sm text-apple-text-secondary mb-8"
          >
            <Lightbulb size={14} className="text-apple-accent" />
            <span>Engenheiro de Software & Game Developer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-semibold tracking-tight mb-6"
          >
            Criando experiências{" "}
            <span className="text-apple-accent">imersivas</span>{" "}
            digitais
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-apple-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            De sistemas de jogos a aplicativos macOS nativos. 
            Desenvolvo soluções elegantes que combinam excelência técnica 
            com design intuitivo e leve.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#work"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-apple-accent hover:bg-apple-accent-hover rounded-full text-sm font-medium transition-colors"
            >
              Ver Projetos
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 border border-apple-border rounded-full text-sm font-medium hover:bg-apple-surface transition-colors"
            >
              Entre em Contato
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={24} className="text-apple-text-tertiary" />
          </motion.div>
        </motion.div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Projetos Selecionados</h2>
            <p className="text-apple-text-secondary max-w-xl">
              Uma coleção de projetos incluindo desenvolvimento de jogos, 
              aplicativos nativos e ferramentas inovadoras.
            </p>
          </motion.div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`group relative ${
                  project.featured ? "md:grid md:grid-cols-2 md:gap-12" : ""
                }`}
              >
                {/* Project Info */}
                <div className={project.featured ? "" : "mb-8"}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-apple-surface flex items-center justify-center">
                      <project.icon size={24} className="text-apple-accent" />
                    </div>
                    <div>
                      <span className="text-xs text-apple-text-tertiary uppercase tracking-wider">
                        {project.year} • {project.role}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-semibold mb-2 group-hover:text-apple-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-apple-accent text-sm mb-4">{project.subtitle}</p>
                  <p className="text-apple-text-secondary leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-apple-surface border border-apple-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.stats && (
                    <div className="flex gap-8">
                      {project.stats.map((stat) => (
                        <div key={stat.label}>
                          <div className="text-xl font-semibold">{stat.value}</div>
                          <div className="text-xs text-apple-text-tertiary">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Project Visual */}
                <div className={`
                  relative rounded-3xl overflow-hidden bg-apple-surface border border-apple-border
                  ${project.featured ? "min-h-[300px] md:min-h-[400px]" : "min-h-[200px]"}
                `}>
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <project.icon size={64} className="text-apple-text-tertiary opacity-20" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-apple-bg/80 to-transparent" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section id="stack" className="py-32 px-6 bg-apple-surface/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Tecnologias</h2>
            <p className="text-apple-text-secondary max-w-xl">
              Tecnologias que utilizo para dar vida às ideias.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-apple-surface border border-apple-border hover:border-apple-accent/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Code2 size={20} className="text-apple-accent" />
                  <h3 className="font-semibold">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-apple-text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="flex-shrink-0">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden border-2 border-apple-border">
                <img 
                  src="/foto.jpeg" 
                  alt="Vinicius" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Sobre Mim</h2>
              <p className="text-lg text-apple-text-secondary leading-relaxed mb-4">
                Sou um engenheiro de software apaixonado por criar experiências digitais
                que encantam e envolvem. Com uma sólida experiência em desenvolvimento de jogos,
                aplicativos nativos e ferramentas inovadoras, busco constantemente novas formas de
                combinar tecnologia e criatividade para resolver problemas complexos.
              </p>
              <p className="text-lg text-apple-text-secondary leading-relaxed">
                De arquitetura de sistemas de jogos distribuídos em Unity à criação de 
                elegantes aplicativos macOS com SwiftUI, acredito no poder de combinar 
                excelência técnica com design bonito, leve e escalável.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-apple-surface/30">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Vamos Nos Conectar</h2>
            <p className="text-apple-text-secondary mb-10">
              Interessado em trabalhar junto? 
              Me encontre nas plataformas abaixo.
            </p>

            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 rounded-2xl bg-apple-surface border border-apple-border flex items-center justify-center hover:border-apple-accent transition-colors group"
                >
                  <social.icon 
                    size={22} 
                    className="text-apple-text-secondary group-hover:text-apple-accent transition-colors" 
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-apple-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-apple-text-tertiary">
            © 2026 Vinicius. Desenvolvimento e eficiência.
          </p>
        </div>
      </footer>
    </div>
  );
}
