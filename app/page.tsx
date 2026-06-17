'use client';

import React from 'react';
import {
  FaArrowRight as ArrowRight,
  FaDownload as Download,
  FaLaptopCode as Code,
  FaBrain as Brain,
  FaMicrochip as Cpu,
  FaDatabase as Database,
  FaCloud as Cloud,
  FaCodeBranch as GitBranch,
  FaHexagonNodes as Hexagon,
} from 'react-icons/fa6';
import { 
  VscAzureDevops as Devops,
  VscVr as Robot,
  VscChip as Technology,
  VscTasklist as Tasks
 } from 'react-icons/vsc';
import { 
  LiaAtomSolid as Atom,
  LiaLinode as Training,
  LiaInfinitySolid as Infinity,
  LiaDocker as Docker,
 } from 'react-icons/lia';
import { 
  LuBrainCircuit as Neural,
  LuTimer as Time,
} from 'react-icons/lu';
import { FaGithub, FaLinkedinIn, FaXTwitter, FaEnvelope } from 'react-icons/fa6';
import Link from 'next/link';
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection';
import { useParallaxEffect } from '@/hooks/useScrollAnimation';
import TechSVGAnimations from '@/components/TechSVGAnimations';

const Home: React.FC = () => {
  const parallaxOffset = useParallaxEffect(0.3);

  const techIcons = [
    { icon: Devops, label: 'DevOps', delay: '0s' },
    { icon: Training, label: 'MLOps', delay: '0.2s' },
    { icon: Neural, label: 'AI/ML', delay: '0.4s' },
    { icon: Atom, label: 'QML', delay: '0.6s' },
  ];

  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
    { icon: FaEnvelope, href: '#', label: 'Email' },
  ];

  const features = [
    {
      icon: Infinity,
      title: 'DevOps Excellence',
      description: 'Automated CI/CD pipelines, infrastructure as code, and cloud-native solutions.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Hexagon,
      title: 'MLOps Innovation',
      description: 'End-to-end ML pipelines, model deployment, and monitoring at scale.',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Robot,
      title: 'AI/ML Solutions',
      description: 'Advanced machine learning models and artificial intelligence applications.',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: Cpu,
      title: 'Quantum ML',
      description: 'Exploring quantum computing applications in machine learning.',
      gradient: 'from-blue-600 to-sky-400',
    }
  ];

  const techStack = [
    { icon: Devops, name: 'DevOps', color: 'text-blue-500' },
    { icon: Database, name: 'Databases', color: 'text-green-500' },
    { icon: Cloud, name: 'Cloud', color: 'text-teal-500' },
    { icon: GitBranch, name: 'Version Control', color: 'text-sky-500' },
    { icon: Brain, name: 'AI/ML', color: 'text-sky-500' },
    { icon: Docker, name: 'Docker', color: 'text-cyan-500' },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative pt-16 pb-8">
        {/* Floating Tech Icons with Parallax */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <TechSVGAnimations />
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className={`absolute animate-float opacity-20 ${tech.color}`}
                style={{
                  left: `${10 + (index * 15)}%`,
                  top: `${20 + (index * 10)}%`,
                  transform: `translateY(${parallaxOffset * (index + 1) * 0.1}px)`,
                  animationDelay: `${index * 0.5}s`,
                  animationDuration: `${3 + (index * 0.5)}s`
                }}
              >
                <Icon size={32} />
              </div>
            );
          })}

          {/* Floating glow blob (background decoration) */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <ScrollAnimatedSection animation="fade-in" duration={800} triggerOnce={false}>
            <div className="mb-8">
              <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-100/80 to-sky-100/80 dark:from-blue-900/30 dark:to-sky-900/30 backdrop-blur-sm rounded-full border border-primary-200/50 dark:border-primary-700/50 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-primary-700 dark:text-primary-300">Available for opportunities</span>
              </div>
            </div>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="slide-up" delay={200} duration={1000} triggerOnce={false}>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-400 via-orange-400 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
                  Shashank Singh
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-sky-500/20 to-blue-600/20 blur-2xl animate-pulse"></div>
              </span>
            </h1>
          </ScrollAnimatedSection>
          
          <ScrollAnimatedSection animation="slide-up" delay={400} duration={1000} triggerOnce={false}>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Passionate about building scalable infrastructure, pipelines, and exploring the intersection of{' '}
              <span className="font-semibold text-orange-600 dark:text-orange-400 relative">
                DevOps
                <div className="absolute inset-0 bg-primary-600/10 blur-lg rounded"></div>
              </span>,{' '}
              <span className="font-semibold text-teal-600 dark:text-teal-400 relative">
                MLOps
                <div className="absolute inset-0 bg-teal-600/10 blur-lg rounded"></div>
              </span>, and{' '}
              <span className="font-semibold text-primary-400 dark:text-primary-300 relative">
                Quantum ML
                <div className="absolute inset-0 bg-neural-600/10 blur-lg rounded"></div>
              </span>
            </p>
          </ScrollAnimatedSection>

          {/* Tech Icons Section */}
          <ScrollAnimatedSection animation="scale-in" delay={600} duration={800} triggerOnce={false}>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-6 mb-8 max-w-xs sm:max-w-none mx-auto">
              {techIcons.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className="group flex flex-col items-center justify-center space-y-2 p-4 glass-card rounded-2xl hover:scale-110 transition-all duration-500"
                    style={{ animationDelay: tech.delay }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                      {tech.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </ScrollAnimatedSection>
          
          <ScrollAnimatedSection animation="scale-in" delay={800} duration={800} triggerOnce={false}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link
                href="/projects"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-400 text-white rounded-xl font-medium hover:shadow-neon hover:scale-105 transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm"
              >
                <span>View My Work</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-400 text-white rounded-xl font-medium hover:shadow-neon hover:scale-105 transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm">
                <Download size={18} className="group-hover:animate-bounce" />
                <span>Download CV</span>
              </button>
            </div>
          </ScrollAnimatedSection>

            {/* Social Links */}
            <ScrollAnimatedSection animation="fade-in" delay={1000} triggerOnce={false}>
              <div className="flex justify-center space-x-6 mb-16">
                {[
                  {
                    icon: FaGithub,
                    href: '#',
                    label: 'GitHub',
                    hoverClasses: 'hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                  },
                  {
                    icon: FaLinkedinIn,
                    href: '#',
                    label: 'LinkedIn',
                    hoverClasses: 'hover:bg-blue-600/20 hover:text-blue-600 dark:hover:bg-blue-400/20 dark:hover:text-blue-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] dark:hover:shadow-[0_0_20px_rgba(96,165,250,0.6)]'
                  },
                  {
                    icon: FaEnvelope,
                    href: '#',
                    label: 'Email',
                    hoverClasses: 'hover:bg-red-600/20 hover:text-red-600 dark:hover:bg-red-400/20 dark:hover:text-red-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] dark:hover:shadow-[0_0_20px_rgba(248,113,113,0.6)]'
                  },
                  {
                    icon: FaXTwitter,
                    href: '#',
                    label: 'X',
                    hoverClasses: 'hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                  }
                ].map(({ icon: Icon, href, label, hoverClasses }, index) => (
                  <a
                    key={index}
                    href={href}
                    className={`group p-4 glass-card rounded-xl text-gray-600 dark:text-gray-400 ${hoverClasses} hover:scale-110 transition-all duration-300`}
                    title={label}
                  >
                    <Icon size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </ScrollAnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-4 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimatedSection animation="slide-up" threshold={0.2} triggerOnce={false}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                My Expertise
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Combining cutting-edge technologies to deliver innovative solutions
              </p>
            </div>
          </ScrollAnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <ScrollAnimatedSection
                  key={index}
                  animation="slide-up"
                  delay={index * 150}
                  threshold={0.1}
                  triggerOnce={false}
                >
                  <div className="group p-8 glass-card rounded-2xl hover:scale-105 transition-all duration-500">
                    <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-full h-full text-white" />
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </ScrollAnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section with Enhanced Glassmorphism */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 group p-8 glass-card backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Projects Completed', icon: Code },
              { number: '3+', label: 'Years Experience', icon: Tasks},
              { number: '10+', label: 'Technologies', icon: Technology},
              { number: '24/7', label: 'Learning Mode', icon: Time }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <ScrollAnimatedSection
                  key={index}
                  animation="scale-in"
                  delay={index * 100}
                  threshold={0.3}
                  triggerOnce={false}
                >
                  <div className="group p-6 glass-card rounded-2xl hover:scale-105 transition-all duration-300">
                    <div className="mb-4">
                      <Icon className="w-8 h-8 mx-auto text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-slate-700 dark:text-slate-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </ScrollAnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;