import React from "react";
const projects = [
  {
    id: 1,
    title: "Key Systems",
    description:
      "A pixel-perfect, fully responsive landing page built with ReactJS, TailwindCSS, and Framer Motion, faithfully implemented from KeySystems figma design. This project showcases modern web development practices with smooth animations, responsive design patterns, and optimized performance. The landing page features interactive elements, scroll-triggered animations, and a mobile-first approach that ensures seamless user experience across all devices. The implementation demonstrates advanced CSS techniques, component architecture, and state management principles.",
    techStack: ["React.js", "TailwindCSS", "Framer Motion"],
    link: "https://keysystems.netlify.app/",
    github: "https://github.com/Kijeosowo/key-system",
  },
  {
    id: 2,
    title: "Positivus",
    description:
      "A comprehensive digital marketing agency website that helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation. This full-featured website includes service pages, portfolio showcases, client testimonials, and contact forms. Built with modern React patterns, the site features dynamic content loading, interactive service calculators, and integrated analytics. The project demonstrates expertise in creating business-focused web applications with emphasis on conversion optimization and user engagement.",
    techStack: ["React.js", "TailwindCSS", "Framer Motion"],
    link: "https://positivusco.netlify.app/",
    github: "https://github.com/Kijeosowo/Positivus-Website",
  },
  {
    id: 3,
    title: "Travelsy",
    description:
      "A comprehensive travel agency website designed to inspire wanderlust and facilitate trip planning. This project features destination galleries, booking interfaces, travel package comparisons, and interactive maps. The website includes advanced filtering systems for destinations, price calculators, and user review sections. Built with responsive design principles, it offers seamless navigation across desktop and mobile devices, incorporating modern UI/UX patterns that enhance the travel planning experience.",
    techStack: ["React.js", "TailwindCSS"],
    link: "https://travelsyicedt.netlify.app/",
    github: "https://github.com/Kijeosowo/icedt-test",
  },
  {
    id: 4,
    title: "Unsplash Clone",
    description:
      "A sophisticated image gallery web application designed to replicate the popular Unsplash platform. This project integrates with the Unsplash API to fetch high-quality images, implements infinite scrolling, advanced search functionality, and image categorization. Features include user collections, download capabilities, photographer profiles, and responsive masonry layouts. The application demonstrates proficiency in API integration, state management, performance optimization, and creating engaging user interfaces for content discovery.",
    techStack: ["React.js", "TailwindCSS", "Unsplash API"],
    link: "https://kijeunsplash.netlify.app/",
    github: "https://github.com/Kijeosowo/Unsplash",
  },
  {
    id: 5,
    title: "Apple Galaxy",
    description:
      "An innovative concept website that combines the best design elements from Apple and Samsung, creating a unique digital experience. This project features product showcases, interactive comparisons, animated product reveals, and immersive storytelling. The website includes advanced CSS animations, scroll-triggered effects, and responsive design patterns. It demonstrates creative problem-solving in web design, brand fusion concepts, and the ability to create compelling digital narratives that engage users through visual storytelling.",
    techStack: ["React.js", "TailwindCSS"],
    link: "https://bejewelled-marigold-8aea56.netlify.app/",
    github: "https://github.com/Kijeosowo/Apple-Galaxy",
  },
  {
    id: 6,
    title: "Dara Williams Portfolio",
    description:
      "A stunning portfolio website crafted for a professional product videographer, showcasing creative work through immersive visual experiences. The site features video galleries, project case studies, client testimonials, and booking systems. Built with performance optimization in mind, it includes lazy loading for media content, smooth video playback, and responsive design that adapts to various screen sizes. The project demonstrates expertise in multimedia web development and creating platforms that effectively showcase creative work.",
    techStack: ["HTML", "TailwindCSS", "JavaScript"],
    link: "https://darawiliams.netlify.app/",
    github: "https://github.com/Kijeosowo/KEN-WILLIAMS",
  },
  {
    id: 7,
    title: "Netflix Clone",
    description:
      "A comprehensive replica of the Netflix streaming platform, featuring user authentication, content browsing, search functionality, and responsive design. This project includes movie/TV show catalogs, trailer integration, user profiles, watchlists, and recommendation systems. The application demonstrates advanced frontend development skills including component architecture, state management, API integration, and creating engaging user interfaces for media consumption. Built with modern web technologies and optimized for performance across all devices.",
    techStack: ["HTML", "TailwindCSS", "JavaScript"],
    link: "https://roaring-pie-2681cc.netlify.app/",
    github: "https://github.com/Kijeosowo/NETFLIX",
  },
  {
    id: 8,
    title: "Shotr - Link Shortener",
    description:
      "A professional link shortening web application that helps users create clean, trackable URLs for marketing and sharing purposes. The app integrates with the Bitly API to provide reliable link shortening services, includes analytics tracking, custom alias creation, and bulk URL processing. Features include click tracking, geographic analytics, and QR code generation. This project showcases API integration skills, data visualization, and creating practical tools that solve real-world problems for businesses and individuals.",
    techStack: ["JavaScript", "Bitly API"],
    link: "https://adorable-marshmallow-d5a5f6.netlify.app/",
    github: "https://github.com/Kijeosowo/Shotr",
  },
  {
    id: 9,
    title: "Taskify - Todo Application",
    description:
      "A feature-rich todo application that implements full CRUD (Create, Read, Update, Delete) functionality with modern user interface design. The app includes task categorization, priority levels, due date management, progress tracking, and data persistence. Built with React hooks and context API, it demonstrates state management, local storage integration, and creating intuitive user experiences. The application features drag-and-drop functionality, filtering options, and responsive design that works seamlessly across all devices.",
    techStack: ["React.js", "TailwindCSS"],
    link: "https://super-crisp-62761d.netlify.app/",
    github: "https://github.com/Kijeosowo/Todo-App-Second-semester-Exam",
  },
  {
    id: 10,
    title: "Trackers Shipping",
    description:
      "A comprehensive shipping and logistics website designed for a company that delivers products worldwide. The platform includes package tracking systems, shipping calculators, service area maps, and customer portals. Features include real-time tracking updates, delivery scheduling, cost estimation tools, and customer support integration. The website demonstrates expertise in creating business-focused web applications with emphasis on user experience, data management, and creating trust through professional design and functionality.",
    techStack: ["HTML", "TailwindCSS"],
    link: "https://timely-jalebi-1414d3.netlify.app/",
    github: "https://github.com/Kijeosowo/Trackers.ng",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#111] to-black text-white">
      {/* Main Content */}
      <main className="py-12 lg:py-32 lg:pt-10 lg:px-20">
        <div className="px-6">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <h1 className="lg:text-5xl text-2xl md:text-3xl font-light text-white mb-6">
              Projects
            </h1>
            <p className="text-lg text-stone-600">
              A curation of my works across web and mobile development, <br />{" "}
              showcasing modern design and cutting-edge technologies.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group border border-[#1A1A1A] cursor-pointer rounded-lg hover:bg-gradient-to-br hover:from-[#111] hover:via-[#111] hover:to-[#111] hover:transition-all hover:duration-500 transition-all duration-800 hover:-translate-y-3 hover:shadow-2xl hover:shadow-black/50 overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-white text-3xl font-light mb-3 group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-stone-600 text-justify text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-stone-900 text-stone-500 text-xs rounded-md hover:bg-black/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-8 h-8 text-gray-300 hover:bg-stone-800 rounded transition-colors"
                        title="Github"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-8 h-8 text-gray-300 hover:bg-stone-800 rounded transition-colors"
                        title="View website"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-stone-900 text-stone-400 hover:bg-stone-800 text-sm rounded transition-colors"
                    >
                      View Website
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
