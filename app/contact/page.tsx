'use client';

import React, { useState } from 'react';
import {
  FaEnvelope as Mail,
  FaPhone as Phone,
  FaLocationDot as MapPin,
  FaPaperPlane as Send,
  FaCommentDots as MessageCircle
} from 'react-icons/fa6';
import { FaGithub, FaLinkedinIn, FaXTwitter, FaEnvelope } from 'react-icons/fa6';
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: result.message || 'Message sent successfully! You should receive a confirmation email shortly.'
        });
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please make sure the backend server is running on port 3001.'
      });
    }
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'mistershashanksingh@gmail.com',
      link: 'mailto:mistershashanksingh@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 81789-78402',
      link: 'tel:+918178978402',
      description: 'Available Mon-Fri, 9AM-6PM'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Remote / Global',
      link: '#',
      description: 'Open to remote opportunities'
    },
    {
      icon: MessageCircle,
      title: 'Response Time',
      content: '< 24 hours',
      link: '#',
      description: 'I respond quickly to all inquiries'
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/mistershashanksingh',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: FaLinkedinIn,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/mistershashanksingh',
      color: 'hover:text-blue-600'
    },
    {
      icon: FaXTwitter,
      name: 'X',
      url: 'https://x.com/mistershashanks',
      color: 'hover:text-black dark:hover:text-white'
    },
    {
      icon: FaEnvelope,
      name: 'Email',
      url: 'mailto:mistershashanksingh@gmail.com',
      color: 'hover:text-red-600'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <ScrollAnimatedSection animation="fade-in" duration={800}>
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your next project or explore collaboration opportunities? 
              I'd love to hear from you and learn about your ideas.
            </p>
          </div>
        </ScrollAnimatedSection>

        {/* Dono columns ko stretch hone ke liye grid ka use */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* ================= LEFT SECTION ================= */}
          <div className="lg:col-span-1 h-full">
            <ScrollAnimatedSection animation="slide-right" delay={200} threshold={0.2} className="h-full flex flex-col">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Let's Connect
              </h2>

              {/* MAINE YAHAN CHANGES KIYE HAIN: gap-6 ko gap-3 kar diya, padding p-5 ki hai */}
              <div className="flex flex-col gap-3">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="group p-5 glass-card rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-11 h-11 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="text-white w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-0.5">
                            {info.title}
                          </h3>
                          <a
                            href={info.link}
                            className="text-primary-600 dark:text-primary-400 font-medium hover:underline transition-colors duration-200 block truncate"
                          >
                            {info.content}
                          </a>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5 truncate">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* MAGIC TRICK: mt-auto ensures ye section column ke bilkul bottom mein chipak jayega */}
              <div className="mt-auto pt-6 border-t border-gray-200/20 dark:border-gray-700/50">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 glass-card rounded-lg border border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-400 ${social.color} hover:scale-110 transition-all duration-300`}
                        title={social.name}
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </ScrollAnimatedSection>
          </div>

          {/* ================= RIGHT SECTION ================= */}
          <div className="lg:col-span-2 h-full">
            <ScrollAnimatedSection animation="slide-left" delay={200} threshold={0.2} className="h-full flex flex-col">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Send Me a Message
              </h2>

              <div className="group p-8 glass-card rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 glass-card border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 glass-card border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 glass-card border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Project Discussion / Collaboration Opportunity"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    {/* Textarea rows ko fix kar diya taaki form zyad bada na ho */}
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 glass-card border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                      placeholder="Tell me about your project, ideas, or how we can collaborate..."
                    />
                  </div>
                  
                  {submitStatus.type && (
                    <ScrollAnimatedSection animation="slide-down" duration={300}>
                      <div className={`p-4 rounded-lg border ${
                        submitStatus.type === 'success'
                          ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700 text-green-800 dark:text-green-300'
                          : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700 text-red-800 dark:text-red-300'
                      }`}>
                        <div className="flex items-center space-x-2">
                          {submitStatus.type === 'success' ? (
                            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                          <p className="font-medium">{submitStatus.message}</p>
                        </div>
                      </div>
                    </ScrollAnimatedSection>
                  )}
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-400 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* MAGIC TRICK: mt-auto forces it to the exact same bottom line as the left column */}
              <div className="mt-auto pt-6 border-t border-gray-200/20 dark:border-gray-700/50">
                <div className="p-5 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl border border-green-200/50 dark:border-green-700/50">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-700 dark:text-green-300 font-semibold">
                      Available for Work
                    </span>
                  </div>
                  <p className="text-green-600 dark:text-green-400 text-sm">
                    I'm currently open to new opportunities and interesting projects.
                    Let's discuss how we can work together!
                  </p>
                </div>
              </div>
            </ScrollAnimatedSection>
          </div>
        </div>

        {/* FAQ Section */}
        <ScrollAnimatedSection animation="slide-up" delay={400} threshold={0.2}>
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
              Frequently Asked Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "What services do you offer?",
                  answer: "I specialize in DevOps automation, MLOps pipeline development, cloud infrastructure design, and quantum ML research. I also offer consulting on best practices and technology selection."
                },
                {
                  question: "How do you approach new projects?",
                  answer: "I start with understanding your specific needs and challenges, then propose solutions that align with your goals and budget. Every project begins with a detailed consultation and planning phase."
                },
                {
                  question: "What's your typical response time?",
                  answer: "I aim to respond to all inquiries within 24 hours. For urgent matters, I'm often available for same-day responses during business hours."
                },
                {
                  question: "Do you work with remote teams?",
                  answer: "Absolutely! I have extensive experience working with distributed teams and am comfortable with various collaboration tools and methodologies."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="p-6 glass-card rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>
      </div>
    </div>
  );
};

export default Contact;