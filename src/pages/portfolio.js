import React from 'react';
import Slider from 'react-slick';
import { Link, Element } from 'react-scroll';
import pic from '../assets/pic.jpg';
import ParadiseImage from '../assets/paradise.png';
import MhoreImage from '../assets/content.jpg';
import WishImage from '../assets/case.jpg';
import BeijingImage from '../assets/beij.jpg';
import IndemnityImage from '../assets/ai.jpg';
import resume from "../assets/Resume (2).pdf";
import { FaDownload, FaBriefcase, FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// Experience data
const experiences = [
  {
    company: "Kenya Institute for Public Policy Research and Analysis (KIPPRA)",
    role: "ICT Attachee",
    duration: "May 2024 – August 2024",
    responsibilities: [
      "Diagnosed program malfunctions and implemented corrective measures.",
      "Optimized IT infrastructure for enhanced efficiency.",
      "Provided technical support for network, device, and software troubleshooting.",
    ],
  },
  {
    company: "Ministry of Water, Irrigation, and Sanitation",
    role: "ICT Attachee",
    duration: "January 2022 – April 2022",
    responsibilities: [
      "Resolved hardware, software, and network issues.",
      "Recommended IT solutions to optimize system performance.",
      "Managed system configurations and provided team support.",
    ],
  },
];

// Updated slider settings for vertical scrolling
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  vertical: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

// Projects data
const projects = [
  {
    title: "Paradise - AI-powered E-waste Management",
    description: "AI-powered system to track and manage e-waste.",
    image: ParadiseImage,
    link: "https://github.com/vutagwa/Paradise",
    technologies: ["React", "Firebase", "AI/ML"],
  },
  {
    title: "MHORE Hack - Content Monetization Platform",
    description: "Decentralized platform for content creators.",
    image: MhoreImage,
    link: "https://github.com/vutagwa/hackathon",
    technologies: ["Motoko", "React", "Blockchain"],
  },
  {
    title: "WiSh Hackathon - Case Reporting DApp",
    description: "Blockchain-based case reporting system.",
    image: WishImage,
    link: "https://github.com/vutagwa/wiSh",
    technologies: ["React", "Motoko", "Smart Contracts"],
  },
  {
    title: "Beijing - Fashion Closet for Boutique",
    description: "A fashion closet project for a boutique with slide-through selections.",
    image: BeijingImage,
    link: "https://github.com/vutagwa/beijing",
    technologies: ["React", "CSS", "JavaScript"],
  },
  {
    title: "AI-Powered Indemnity Quotation",
    description: "AI-driven insurance premium calculator.",
    image: IndemnityImage,
    link: "https://github.com/vutagwa/kenya-Re-hackathon",
    technologies: ["Python", "AI/ML", "Flask"],
  },
];

// About Section
const About = () => (
  <Element name="about" className="bg-gray-50 py-16 px-16">
    <div className="flex justify-center mb-12">
      <img
        src={pic}
        alt="User Profile"
        className="rounded-full w-40 h-40 object-cover border-4 border-gray-300 shadow-md"
      />
    </div>

    <div className="text-center mb-8">
      <p className="text-lg text-gray-700 mb-4">
        I am a passionate developer with a focus on delivering practical, user-centric solutions that address real-world challenges. My expertise lies in full-stack development, where I work to build systems that are not only secure and scalable but also intuitive and accessible. I’ve had the opportunity to contribute to projects that prioritize sustainability, social impact, and system performance.
        <br /><br />
        In addition to my development work, I bring solid experience in IT support, where I’ve developed a strong understanding of system maintenance, troubleshooting, and optimizing performance. This hands-on experience has helped me become more effective in building solutions that are reliable and user-friendly.
        <br /><br />
        I’m committed to delivering high-quality applications that meet both client needs and industry best practices. I enjoy working on projects that require thoughtful problem-solving and the ability to adapt to new challenges, always with a focus on creating practical, impactful solutions.
      </p>
    </div>
  </Element>
);

// Projects Section
const Projects = () => (
  <Element name="projects" className="container mx-auto p-5 bg-gray-100">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-5">My Projects</h2>
    <Slider {...sliderSettings}>
      {projects.map((project, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col border border-gray-300">
          <div className="flex items-start">
            <div className="w-32 h-32 mr-4">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-lg border-2 border-gray-300" />
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-gray-700">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="bg-blue-200 text-xs text-blue-700 px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-2">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Project</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </Element>
);

// Experience Section
const Experience = () => (
  <Element name="experience" className="bg-gray-200 min-h-screen py-12 px-6 md:px-12">
    <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8">Experience</h1>

    <div className="max-w-4xl mx-auto">
      {experiences.map((exp, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-6 transition transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
            <FaBriefcase className="mr-2" /> {exp.company}
          </h2>
          <p className="text-gray-600 text-sm font-medium mb-2">{exp.role} • {exp.duration}</p>
          <ul className="list-disc list-inside text-gray-700">
            {exp.responsibilities.map((task, i) => <li key={i}>{task}</li>)}
          </ul>
        </div>
      ))}
    </div>

    <div className="text-center mt-8">
      <a href={resume} download="My_Resume.pdf" className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold flex items-center justify-center mx-auto w-48 hover:bg-blue-500 transition">
        <FaDownload className="mr-2" /> Download Resume
      </a>
    </div>
  </Element>
);

// Sidebar Section
const Sidebar = () => (
  <div className="w-1/4 bg-gray-800 text-white py-8 px-4 fixed h-full top-0 left-0">
    <div className="text-center mb-8">
      <h1 className="text-2xl font-extrabold mb-4">Vutagwa Marion</h1>
      <p className="text-pink-600 text-sm px-4 py-2" style={{ fontFamily: 'Dancing Script, cursive' }}>
        Sustainable Green Tech Enthusiast
      </p>
      <p className="bg-white text-gray-800 text-sm px-4 py-2 rounded-full mx-auto inline-block">
        Developer
      </p>
      <p className="bg-white text-gray-800 text-sm px-4 py-2 rounded-full mx-auto inline-block">
        IT Support
      </p>
      <p className="bg-white text-gray-800 text-sm px-4 py-2 rounded-full mx-auto inline-block">
        AI/ML
      </p>
    </div>

    <div className="flex flex-col items-center">
      <Link to="about" smooth className="mb-4 text-white hover:text-blue-300 text-xl">About</Link>
      <Link to="projects" smooth className="mb-4 text-white hover:text-blue-300 text-xl">Projects</Link>
      <Link to="experience" smooth className="mb-4 text-white hover:text-blue-300 text-xl">Experience</Link>
    </div>
    
    {/* Social Icons Section */}
    <div className="mt-8 flex justify-center space-x-4">
      <a href="https://www.instagram.com/mer.1el" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-600 text-2xl">
        <FaInstagram />
      </a>
      <a href="https://www.github.com/vutagwa" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black text-2xl">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/vutagwa-marion-43a782260/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 text-2xl">
        <FaLinkedin />
      </a>
      <a href="mailto:vutagwamia@gmail.com" className="text-white hover:text-yellow-400 text-2xl">
        <FaEnvelope />
      </a>
    </div>
  </div>
);

// Main PortfolioPage
const PortfolioPage = () => (
  <div className="flex">
    <Sidebar />
    <div className="ml-1/4 w-3/4 p-4" style={{ marginLeft: '20em' }}>
      <About />
      <Projects />
      <Experience />
    </div>
  </div>
);

export default PortfolioPage;
