"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ExternalLink,
  Shield,
  Code,
  Database,
  Server,
  Terminal,
  Award,
  Briefcase,
  GraduationCap,
  User,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const id = target.getAttribute("href")?.substring(1)
      if (id) {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
          setIsMobileMenuOpen(false) // Close mobile menu after navigation
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => link.addEventListener("click", handleSmoothScroll))

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleSmoothScroll))
    }
  }, [])

  const skills = {
    languages: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Python", "PHP", "SQL"],
    frameworks: ["Node.js", "FastAPI", "Playwright", "Docker"],
    databases: ["MySQL", "PostgreSQL", "MongoDB"],
    security: ["Metasploit", "Burp Suite", "Aircrack-ng", "Kali Linux", "Nmap", "Wifite"],
    tools: ["GitHub", "GitLab", "Vercel", "Trello", "Notion", "SonarQube"],
  }

  const experience = [
    {
      title: "Project Manager",
      company: "Quadracode",
      location: "Corrientes, Argentina",
      period: "03/2025 – Actualidad",
      description:
        "Lidero proyectos de desarrollo de software a medida, coordinando equipos multidisciplinarios y aplicando metodologías ágiles (Scrum/Kanban).",
    },
    {
      title: "Técnico en Hardware y Software",
      company: "Trabajo Independiente",
      location: "Autónomo / Freelance",
      period: "2020 - 2023",
      description:
        "Diagnóstico y reparación de hardware. Instalación, configuración y mantenimiento de sistemas operativos y software.",
    },
  ]

  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = "/cv-santiago-suarez.pdf"
    link.download = "CV-Santiago-Suarez.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-black text-green-400 overflow-x-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 0, 0.1) 0%, transparent 50%)`,
          }}
        />
        {/* Matrix-like falling characters */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-400 text-sm font-mono"
              style={{ left: `${i * 5}%` }}
              animate={{
                y: ["-100vh", "100vh"],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: Math.random() * 5,
              }}
            >
              {Array.from({ length: 20 }).map((_, j) => (
                <div key={j} className="mb-2">
                  {Math.random() > 0.5 ? "1" : "0"}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-green-400/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.a
              href="#hero"
              className="text-lg md:text-xl font-bold text-green-400 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
            >
              {"<Santiago />"}
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {["Acerca de", "Habilidades", "Experiencia"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-").replace("ó", "o").replace("í", "i")}`}
                  className="hover:text-green-300 transition-colors cursor-pointer text-sm lg:text-base"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-green-400" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4 border-t border-green-400/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="flex flex-col space-y-4 pt-4">
                {["Acerca de", "Habilidades", "Experiencia"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-").replace("ó", "o").replace("í", "i")}`}
                    className="text-green-400 hover:text-green-300 transition-colors cursor-pointer text-center py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center z-10 px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-bold mb-6"
              animate={{
                textShadow: ["0 0 10px #00ff00", "0 0 20px #00ff00", "0 0 10px #00ff00"],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              Hola, soy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 block sm:inline">
                Santiago
              </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                _
              </motion.span>
            </motion.h1>

            <motion.div
              className="text-base sm:text-lg lg:text-xl mb-8 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="mb-2">{">"} Pentester</div>
              <div className="mb-2">{">"} Analista en Sistemas de Información</div>
              <div className="mb-2">{">"} Project manager</div>
              <div className="text-green-300">{">"} Ciberseguridad</div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Button
                asChild
                className="bg-green-400 text-black hover:bg-green-300 transition-all duration-300 w-full sm:w-auto"
              >
                <a href="#contacto">
                  <Terminal className="mr-2 h-4 w-4" />
                  Contactar
                </a>
              </Button>
              <Button
                variant="outline"
                onClick={handleDownloadCV}
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black w-full sm:w-auto"
              >
                <Download className="mr-2 h-4 w-4" />
                Descargar CV
              </Button>
            </motion.div>

            <motion.div
              className="flex justify-center sm:justify-start space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              {[
                { icon: Github, href: "https://github.com/Santiago-sz", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/jorge-santiago-suarez-ctes", label: "LinkedIn" },
                {
                  icon: Award,
                  href: "https://www.credly.com/badges/f44e2ed2-57f0-45df-8e94-340210e5411a/public_url",
                  label: "Credly",
                },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-green-400/30 rounded-lg hover:border-green-400 hover:bg-green-400/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <Image
                src="/hero-bg.png"
                alt="Santiago working on cybersecurity"
                width={600}
                height={400}
                className="rounded-lg border border-green-400/30 w-full h-auto"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
              <motion.div
                className="absolute inset-0 border-2 border-green-400/50 rounded-lg"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(0, 255, 0, 0.3)",
                    "0 0 40px rgba(0, 255, 0, 0.5)",
                    "0 0 20px rgba(0, 255, 0, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="acerca-de" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {"<Acerca de Mí />"}
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-gray-900/50 border-green-400/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-green-400 flex items-center text-lg sm:text-xl">
                    <User className="mr-2 h-5 w-5" />
                    Acerca de Mí
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="mb-4 text-sm sm:text-base">
                    Soy Analista en Sistemas y estudiante en proceso de finalizar la carrera de Ingeniería en Sistemas
                    de Información. Me considero una persona responsable y organizada, con un enfoque proactivo hacia la
                    resolución de problemas y la mejora continua.
                  </p>
                  <p className="mb-4 text-sm sm:text-base">
                    Mi especialización en pentesting y ciberseguridad me permite identificar vulnerabilidades y
                    fortalecer la seguridad de sistemas y aplicaciones.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-green-400 text-green-400 text-xs sm:text-sm">
                      Pentesting
                    </Badge>
                    <Badge variant="outline" className="border-green-400 text-green-400 text-xs sm:text-sm">
                      Cybersecurity
                    </Badge>
                    <Badge variant="outline" className="border-green-400 text-green-400 text-xs sm:text-sm">
                      Project Management
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-gray-900/50 border-green-400/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-green-400 flex items-center text-lg sm:text-xl">
                    <Award className="mr-2 h-5 w-5" />
                    Certificación
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Image
                      src="/cisco-cert.png"
                      alt="Cisco Introduction to Cybersecurity Certificate"
                      width={80}
                      height={80}
                      className="rounded-lg sm:w-[100px] sm:h-[100px]"
                    />
                    <div className="text-center sm:text-left">
                      <h3 className="text-base sm:text-lg font-semibold text-green-400">
                        Introduction to Cybersecurity
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base">Cisco Networking Academy</p>
                      <a
                        href="https://www.credly.com/badges/f44e2ed2-57f0-45df-8e94-340210e5411a/public_url"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 flex items-center justify-center sm:justify-start mt-2 text-sm sm:text-base"
                      >
                        Ver Certificado <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {"<Habilidades />"}
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900/50 border-green-400/30 backdrop-blur-sm h-full">
                  <CardHeader>
                    <CardTitle className="text-green-400 flex items-center capitalize text-lg sm:text-xl">
                      {category === "languages" && <Code className="mr-2 h-5 w-5" />}
                      {category === "frameworks" && <Server className="mr-2 h-5 w-5" />}
                      {category === "databases" && <Database className="mr-2 h-5 w-5" />}
                      {category === "security" && <Shield className="mr-2 h-5 w-5" />}
                      {category === "tools" && <Terminal className="mr-2 h-5 w-5" />}
                      {category.replace(/([A-Z])/g, " $1").trim()}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1 + skillIndex * 0.05,
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge
                            variant="outline"
                            className="border-green-400/50 text-green-400 hover:bg-green-400/10 text-xs sm:text-sm"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {"<Experiencia />"}
          </motion.h2>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="bg-gray-900/50 border-green-400/30 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-green-400 flex items-center text-lg sm:text-xl">
                          <Briefcase className="mr-2 h-5 w-5" />
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-gray-300 mt-1 text-sm sm:text-base">
                          {exp.company} • {exp.location}
                        </CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-green-400 text-green-400 text-xs sm:text-sm self-start"
                      >
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm sm:text-base">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gray-900/50 border-green-400/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center text-lg sm:text-xl">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Educación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-green-400">
                      Ingeniería en Sistemas de Información
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base">Universidad de la Cuenca del Plata (UCP)</p>
                    <p className="text-gray-400 text-sm">2022 - Actualidad</p>
                    <p className="text-xs sm:text-sm text-gray-400 mt-2">
                      Recibido como Analista Universitario en Sistemas de Información en 2024
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {"<Contacto />"}
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg sm:text-xl text-gray-300 mb-8">
                ¿Interesado en colaborar o necesitas servicios de pentesting? ¡Hablemos!
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "Santi39940@gmail.com",
                  href: "mailto:Santi39940@gmail.com",
                },
                {
                  icon: Phone,
                  label: "WhatsApp",
                  value: "Enviar mensaje",
                  href: "https://wa.me/543795066042?text=Hola%20Santiago,%20me%20interesa%20contactarte%20para%20servicios%20de%20pentesting",
                },
                {
                  icon: Github,
                  label: "GitHub",
                  value: "Santiago-sz",
                  href: "https://github.com/Santiago-sz",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "jorge-santiago-suarez-ctes",
                  href: "https://www.linkedin.com/in/jorge-santiago-suarez-ctes",
                },
              ].map(({ icon: Icon, label, value, href }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="bg-gray-900/50 border-green-400/30 backdrop-blur-sm hover:border-green-400 transition-all duration-300 h-full">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 mx-auto mb-4" />
                      <h3 className="text-base sm:text-lg font-semibold text-green-400 mb-2">{label}</h3>
                      <p className="text-gray-300 text-xs sm:text-sm break-all">{value}</p>
                    </CardContent>
                  </Card>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-green-400/20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            className="text-gray-400 text-sm sm:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            © 2025 Santiago Suarez.
          </motion.p>
        </div>
      </footer>
    </div>
  )
}
