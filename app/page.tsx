"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

// Define icon components as simple SVGs
const MenuIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const XIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const CodeIcon = () => (
  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)

const GlobeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m-9 9a9 9 0 019-9"
    />
  </svg>
)

const BrainIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
)

const CloudIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
    />
  </svg>
)

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
)

const SmartphoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"
    />
  </svg>
)

const ZapIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const MailIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
)

const UsersIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

const MessageSquareIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
)
// EMAIL JS CODE TO BE ADDED
function emailjs(){
  alert("hiii")
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      try {
        const sections = ["home", "about", "experience", "skills", "services", "portfolio", "contact"]
        const scrollPosition = window.scrollY + 100

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const offsetTop = element.offsetTop
            const offsetHeight = element.offsetHeight

            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section)
              break
            }
          }
        }
      } catch (error) {
        console.error("Error in scroll handler:", error)
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Call once to set initial state
    handleScroll()

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    try {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
      setIsMenuOpen(false)
    } catch (error) {
      console.error("Error scrolling to section:", error)
    }
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ]

  const softSkills = [
    "Effective Communication",
    "Leadership",
    "Critical Thinking",
    "Problem Solving",
    "Team Collaboration",
    "Adaptability",
    "Time Management",
    "Analytical Thinking",
  ]

  const technicalSkills = [
    { name: "Web Development", icon: GlobeIcon },
    { name: "Machine Learning", icon: BrainIcon },
    { name: "Cloud Computing (AWS & Azure)", icon: CloudIcon },
    { name: "Cybersecurity", icon: ShieldIcon },
    { name: "IoT Development", icon: ZapIcon },
    { name: "Android Development", icon: SmartphoneIcon },
    { name: "DSA", icon: CodeIcon },
  ]

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-slate-800 hover:text-teal-600 transition-colors duration-300 cursor-pointer">
                Onkar Zende
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                      activeSection === item.id
                        ? "text-teal-600 bg-teal-50 shadow-sm"
                        : "text-gray-700 hover:text-teal-600 hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
              >
                <div className="transition-transform duration-300">{isMenuOpen ? <XIcon /> : <MenuIcon />}</div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 transform hover:translate-x-2 ${
                  activeSection === item.id
                    ? "text-teal-600 bg-teal-50"
                    : "text-gray-700 hover:text-teal-600 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Hi, I&apos;m{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                    Onkar Zende
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300 font-medium">
                  Turning Ideas into Seamless Digital Experiences
                </p>
              </div>

              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                A passionate INFORMATION TECHNOLOGY student at JSPM University, Pune, dedicated to creating impactful
                digital solutions through web development, AI, and cloud computing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("portfolio")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">View Portfolio</span>
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Let&apos;s Connect
                  </span>
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-teal-400 to-blue-400 p-1 transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">
                  <div className="w-full h-full rounded-full bg-slate-900 p-4 transition-all duration-500">
                    <Image
                      src="/images/onkar-profile.jpg"
                      alt="Onkar Zende"
                      width={300}
                      height={300}
                      className="w-full h-full rounded-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-teal-400 rounded-full p-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 animate-bounce">
                  <CodeIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto transition-all duration-500 hover:w-32"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300">
                I&apos;m Onkar Zende, a third-year INFORMATION TECHNOLOGY at JSPM University, Pune, driven by a passion
                for creating impactful digital solutions. My interests span web development, artificial intelligence,
                cloud computing, and cybersecurity.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300">
                I&apos;ve gained hands-on experience through internships in Machine Learning and earned certifications
                from AWS Academy, Azure (Simplilearn), and Infosys Springboard. I&apos;m currently working on innovative
                projects including a women&apos;s safety app, a temple crowd tracking system, and an IoT-based smoke
                detector.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300">
                By 2025, my goal is to build a well-rounded portfolio showcasing expertise in DSA, Android development,
                dropshipping, and content creation.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 group">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mt-2 transition-all duration-300 group-hover:scale-150"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                      B.Tech in INFORMATION TECHNOLOGY Engineering
                    </h4>
                    <p className="text-gray-600">JSPM University, Pune</p>
                    <p className="text-sm text-gray-500">Ongoing, 3rd Year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto transition-all duration-500 hover:w-32"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 group">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <CloudIcon className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-teal-600 transition-colors duration-300">
                      AWS Virtual Internship
                    </CardTitle>
                    <CardDescription>12 weeks</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  Gained comprehensive knowledge of AWS cloud services, architecture, and best practices through
                  hands-on projects and real-world scenarios.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 group">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <ZapIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-teal-600 transition-colors duration-300">
                      UiPath Virtual Internship
                    </CardTitle>
                    <CardDescription>12 weeks</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  Developed expertise in robotic process automation (RPA) and workflow automation using UiPath platform
                  and tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto transition-all duration-500 hover:w-32"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Technical Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {technicalSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-teal-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md group cursor-pointer"
                  >
                    <skill.icon className="h-6 w-6 text-teal-600 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
                    <span className="text-gray-800 font-medium group-hover:text-teal-700 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200 transition-all duration-300 transform hover:scale-110 hover:shadow-md cursor-pointer"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Delivering Digital Solutions that Inspire</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto transition-all duration-500 hover:w-32"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 hover:rotate-2 group">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                  <GlobeIcon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl group-hover:text-teal-600 transition-colors duration-300">
                  Web Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  I specialize in building modern, responsive, and user-friendly websites that combine creativity with
                  functionality. My approach focuses on clean interfaces, scalable back-end systems, and cloud
                  integration with strong security practices.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 hover:rotate-2 group">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                  <BrainIcon className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl group-hover:text-teal-600 transition-colors duration-300">
                  Machine Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  Developing intelligent solutions using machine learning algorithms and AI technologies to solve
                  real-world problems and create innovative applications.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 hover:rotate-2 group">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                  <CloudIcon className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="text-xl group-hover:text-teal-600 transition-colors duration-300">
                  Cloud Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  Leveraging AWS and Azure cloud platforms to build scalable, secure, and cost-effective solutions for
                  modern applications and infrastructure needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto transition-all duration-500 hover:w-32"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Featured Project */}
            <Card className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group">
              <div className="relative h-48 bg-gradient-to-r from-blue-500 to-teal-500 rounded-t-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                  <GlobeIcon className="h-16 w-16 text-white transition-all duration-500 group-hover:rotate-12" />
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-teal-600 transition-colors duration-300">
                  E-Commerce Platform
                </CardTitle>
                <CardDescription>Full-Stack Web Application</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  Designed and developed a dynamic e-commerce platform with product browsing, user authentication, cart
                  functionality, and secure transactions. Features include a responsive design, optimized loading
                  speeds, product categorization, and a simplified checkout process.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Node.js", "MongoDB", "Stripe"].map((tech, index) => (
                    <Badge key={index} variant="secondary" className="transition-all duration-300 hover:scale-110">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 group">
                  <ExternalLinkIcon className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">View Project</span>
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Projects */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Upcoming Projects</h3>

              <div className="space-y-4">
                <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:translate-x-2 group">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <ShieldIcon className="h-6 w-6 text-pink-600 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
                      <CardTitle className="text-lg group-hover:text-teal-600 transition-colors duration-300">
                        Women&apos;s Safety App
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">
                      Mobile application focused on women&apos;s safety with emergency features and location tracking.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:translate-x-2 group">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <UsersIcon className="h-6 w-6 text-orange-600 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
                      <CardTitle className="text-lg group-hover:text-teal-600 transition-colors duration-300">
                        Temple Crowd Tracking System
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">
                      IoT-based system to monitor and manage crowd density in religious places.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:translate-x-2 group">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <ZapIcon className="h-6 w-6 text-red-600 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
                      <CardTitle className="text-lg group-hover:text-teal-600 transition-colors duration-300">
                        IoT Smoke Detector
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">
                      Smart smoke detection system with real-time alerts and monitoring capabilities.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-10 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Let&apos;s Connect</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto transition-all duration-500 hover:w-32"></div>
            <p className="text-gray-300 mt-4 text-lg">
              Ready to collaborate on your next project? Let&apos;s discuss how we can work together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="group">
                  <Input
                    placeholder="Your Name"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 group-hover:shadow-md"
                  />
                </div>
                <div className="group">
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 group-hover:shadow-md"
                  />
                </div>
                <div className="group">
                  <Input
                    placeholder="Subject"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 group-hover:shadow-md"
                  />
                </div>
                <div className="group">
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none transition-all duration-300 group-hover:shadow-md"
                  />
                </div>
                <Button onClick={emailjs} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
                  <MessageSquareIcon className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Send Message</span>
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I&apos;m always open to discussing new opportunities, innovative projects, and ways to create
                  impactful digital solutions together.
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white">Connect with me</h4>
                <div className="flex space-x-4">
                  <Link
                    href="https://www.linkedin.com/in/onkar-zende-b4a703329/"
            
                    className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:shadow-lg"
                  >
                    <LinkedinIcon className="h-6 w-6 text-white" />
                  </Link>
                  <Link
                    href="https://github.com/Omkar3090"
                    className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:shadow-lg"
                  >
                    <GithubIcon  className="h-6 w-6 text-white" />
                  </Link>
                  <Link
                    href="#"
                    className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center hover:bg-teal-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:shadow-lg"
                  >
                    <MailIcon className="h-6 w-6 text-white" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p className="hover:text-white transition-colors duration-300">
              &copy; {new Date().getFullYear()} Onkar Zende. All rights reserved.
            </p>
            <p className="mt-2 hover:text-white transition-colors duration-300">
              Built with passion and modern web technologies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
