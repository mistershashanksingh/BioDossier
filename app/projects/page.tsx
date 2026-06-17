'use client';

import React from 'react';
import {
  FaUpRightFromSquare as ExternalLink,
  FaGithub as Github,
  FaCalendarDays as Calendar,
  FaStar as Star,
  FaCodeFork as GitFork,
  FaGears,
  FaBrain,
  FaAtom,
  FaServer,
  FaMagnifyingGlassChart,
  FaShieldHalved
} from 'react-icons/fa6';
import type { IconType } from 'react-icons';
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'DevOps Automation Suite',
      description: 'Comprehensive CI/CD pipeline automation tool with monitoring and alerting capabilities. Built to streamline deployment processes and reduce manual intervention.',
      longDescription: 'A complete DevOps automation platform that integrates with popular CI/CD tools, provides real-time monitoring, and includes automated rollback capabilities. The suite supports multiple deployment strategies including blue-green and canary deployments.',
      icon: FaGears,
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'Prometheus', 'Grafana', 'Python', 'Go'],
      category: 'DevOps',
      status: 'Active',
      github: '#',
      demo: '#',
      date: '2024',
      features: [
        'Automated CI/CD pipelines',
        'Real-time monitoring dashboard',
        'Slack/Discord notifications',
        'Multi-environment support',
        'Automated rollback on failure'
      ],
      stats: {
        stars: 45,
        forks: 12,
        commits: 89
      }
    },
    {
      id: 2,
      title: 'MLOps Model Registry',
      description: 'Cloud-native ML model registry with versioning, deployment, and monitoring capabilities for machine learning operations.',
      longDescription: 'A sophisticated MLOps platform that handles the complete ML model lifecycle from experimentation to production deployment. Features include A/B testing, model performance monitoring, and automated retraining pipelines.',
      icon: FaBrain,
      technologies: ['MLflow', 'FastAPI', 'Docker', 'PostgreSQL', 'React', 'AWS', 'TensorFlow'],
      category: 'MLOps',
      status: 'Active',
      github: '#',
      demo: '#',
      date: '2024',
      features: [
        'Model versioning and registry',
        'Automated deployment pipelines',
        'Performance monitoring',
        'A/B testing framework',
        'Data drift detection'
      ],
      stats: {
        stars: 78,
        forks: 23,
        commits: 156
      }
    },
    {
      id: 3,
      title: 'Quantum ML Algorithms',
      description: 'Implementation of quantum machine learning algorithms using Qiskit, exploring quantum advantage in specific ML tasks.',
      longDescription: 'Research-focused project implementing various quantum machine learning algorithms including QAOA, VQE, and quantum neural networks. Includes performance comparisons with classical counterparts and visualization tools.',
      icon: FaAtom,
      technologies: ['Qiskit', 'Python', 'NumPy', 'Matplotlib', 'Jupyter', 'Scipy'],
      category: 'Quantum',
      status: 'Research',
      github: '#',
      demo: '#',
      date: '2023-2024',
      features: [
        'Quantum classification algorithms',
        'Variational quantum circuits',
        'Quantum feature maps',
        'Performance benchmarking',
        'Interactive visualizations'
      ],
      stats: {
        stars: 34,
        forks: 8,
        commits: 67
      }
    },
    {
      id: 4,
      title: 'Infrastructure as Code Templates',
      description: 'Collection of Terraform and Ansible templates for common cloud infrastructure patterns and best practices.',
      longDescription: 'Comprehensive collection of Infrastructure as Code templates covering AWS, GCP, and Azure. Includes security best practices, cost optimization strategies, and multi-environment configurations.',
      icon: FaServer,
      technologies: ['Terraform', 'Ansible', 'AWS', 'GCP', 'Azure', 'Bash', 'YAML'],
      category: 'Infrastructure',
      status: 'Active',
      github: '#',
      demo: '#',
      date: '2024',
      features: [
        'Multi-cloud support',
        'Security-first templates',
        'Cost optimization',
        'Automated testing',
        'Documentation generator'
      ],
      stats: {
        stars: 67,
        forks: 19,
        commits: 134
      }
    },
    {
      id: 5,
      title: 'AI-Powered Log Analysis',
      description: 'Machine learning system for automated log analysis, anomaly detection, and intelligent alerting in distributed systems.',
      longDescription: 'Advanced log analysis platform using natural language processing and anomaly detection algorithms to automatically identify issues in distributed systems. Features predictive alerting and root cause analysis.',
      icon: FaMagnifyingGlassChart,
      technologies: ['Python', 'Elasticsearch', 'Logstash', 'Kibana', 'Scikit-learn', 'Docker'],
      category: 'AI/ML',
      status: 'Active',
      github: '#',
      demo: '#',
      date: '2024',
      features: [
        'Anomaly detection',
        'Pattern recognition',
        'Predictive alerting',
        'Root cause analysis',
        'Custom dashboards'
      ],
      stats: {
        stars: 52,
        forks: 15,
        commits: 98
      }
    },
    {
      id: 6,
      title: 'Container Security Scanner',
      description: 'Automated security scanning tool for container images with vulnerability assessment and compliance checking.',
      longDescription: 'Security-focused tool that performs comprehensive vulnerability scanning of container images, checks for compliance with security best practices, and integrates with CI/CD pipelines for automated security testing.',
      icon: FaShieldHalved,
      technologies: ['Go', 'Docker', 'Kubernetes', 'PostgreSQL', 'React', 'REST API'],
      category: 'Security',
      status: 'Active',
      github: '#',
      demo: '#',
      date: '2024',
      features: [
        'Vulnerability scanning',
        'Compliance checking',
        'CI/CD integration',
        'Risk assessment',
        'Detailed reporting'
      ],
      stats: {
        stars: 41,
        forks: 11,
        commits: 76
      }
    }
  ];

  const categories = ['All', 'DevOps', 'MLOps', 'AI/ML', 'Quantum', 'Infrastructure', 'Security'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300';
      case 'Research':
        return 'bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300';
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300';
    }
  };

  const getCategoryGradient = (category: string) => {
    switch (category) {
      case 'DevOps':
        return 'from-blue-500 via-sky-500 to-indigo-600';
      case 'MLOps':
        return 'from-teal-500 via-emerald-500 to-cyan-600';
      case 'AI/ML':
        return 'from-green-500 via-emerald-500 to-teal-600';
      case 'Quantum':
        return 'from-cyan-500 via-sky-500 to-blue-600';
      case 'Infrastructure':
        return 'from-orange-500 via-amber-500 to-rose-500';
      case 'Security':
        return 'from-rose-500 via-red-500 to-orange-600';
      default:
        return 'from-cyan-500 via-sky-500 to-blue-600';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'DevOps':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300';
      case 'MLOps':
        return 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300';
      case 'AI/ML':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300';
      case 'Quantum':
        return 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300';
      case 'Infrastructure':
        return 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300';
      case 'Security':
        return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300';
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <ScrollAnimatedSection animation="fade-in" duration={800}>
          <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my work in DevOps, MLOps, AI/ML, and quantum computing. 
            Each project represents a learning journey and contribution to the tech community.
          </p>
          </div>
        </ScrollAnimatedSection>

        {/* Category Filter */}
        <ScrollAnimatedSection animation="scale-in" delay={200} threshold={0.3}>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-sky-400 text-white shadow-lg'
                  : 'glass-card text-gray-700 dark:text-gray-300 hover:glass-card border border-gray-200/50 dark:border-gray-700/50'
              }`}
            >
              {category}
            </button>
          ))}
          </div>
        </ScrollAnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const Icon: IconType = project.icon;
            return (
            <ScrollAnimatedSection
              key={project.id}
              animation="slide-up"
              delay={index * 150}
              threshold={0.1}
            >
              <div className="group group p-8 glass-card rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500">
              {/* Project Icon Header */}
              <div className={`relative h-48 overflow-hidden rounded-xl flex items-center justify-center bg-gradient-to-br ${getCategoryGradient(project.category)}`}>
                {/* Decorative glow + faint pattern */}
                <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_30%_25%,white,transparent_55%)]"></div>
                <div className="absolute -bottom-8 -right-6 opacity-10">
                  <Icon className="w-44 h-44 text-white" />
                </div>

                {/* Main vector icon */}
                <Icon className="relative z-10 w-24 h-24 text-white/95 drop-shadow-lg group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Project Status */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{project.date}</span>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(project.category)}`}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Stats and Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Star size={14} />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork size={14} />
                      <span>{project.stats.forks}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                      title="View Code"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors duration-200"
                      title="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </ScrollAnimatedSection>
            );
          })}
        </div>

        {/* Call to Action */}
        <ScrollAnimatedSection animation="slide-up" delay={400} threshold={0.2}>
          <div className="text-center mt-20">
          <div className="group p-8 glass-card rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in Collaboration?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on innovative projects and explore new technologies. 
              Let's build something amazing together!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-400 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <span>Get In Touch</span>
              <ExternalLink size={18} />
            </a>
          </div>
          </div>
        </ScrollAnimatedSection>
      </div>
    </div>
  );
};

export default Projects;