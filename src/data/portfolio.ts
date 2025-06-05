export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  description: string;
  logo: string;
  links?: { label: string; url: string }[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  logo: string;
  highlights: {
    title: string;
    description: string;
  }[];
  gpa?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  links: {
    github?: string;
    live?: string;
  };
}

export const portfolioData = {
  personal: {
    name: "Noah Riley Perez-Tsujimoto",
    title: "Developer, Researcher",
    specialties: ["CS & Business", "AI", "Robotics"],
    socials: {
      github: "https://github.com/nrileyperez",
      linkedin: "http://linkedin.com/in/noahperez510/",
    },
    resumePath: "resume/resumeX.pdf"
  },
  workExperience: [
    {
      company: "Autra Solutions", 
      role: "Developer, IT Coordinator",
      period: "Feb 2025 - Present",
      description: "Autra Solutions is a consulting services branch of Autra Inc. , currently supporting Torc Robotics (Torc.ai) with critical autonomous vehicle software and data pipeline integrations.",
      logo: "logos/autra2.png",
      links: [{ label: "View Site", url: "https://torc.ai/" }]
    },
    {
        company: "Autra.ai",
        role: "Web Developer",
        period: "Aug 2024 - Mar 2025",
        description: "AI-driven education startup building scalable STEM and robotics programs across San Diego county.",
        logo: "logos/autra1.png",
        links: [{ label: "View Site", url: "https://autra.ai/" }]
      },
    {
      company: "United States Engineering League (USEL)",
      role: "Web Developer, Lead Robotics Instructor",
      period: "Feb 2024 - Aug 2024",
      description: "USEL partners with K-12 districts to run district and state-wide robotics competitions and AI enrichment programs.",
      logo: "logos/USEL.PNG",
      links: [
        { label: "Derrick Kreimann, CEO", url: "https://www.linkedin.com/posts/derrick-kreimann-bb312a1ab_the-calm-before-the-storm-world-robot-activity-7319121281554042881-jiiO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC2vciwBlRllurTaLXNxGrcevis11DB5BeA" },
        { label: "View Site", url: "https://www.uselyouthrobotics.com/" }
      ]
    }
  ],
  education: [
    {
      school: "University of California, Riverside",
      degree: "B.S. in Computer Science with Business Applications, Bourns College of Engineering",
      period: "2019 - 2024",
      logo: "logos/ucr.png",
      highlights: [
        {
          title: "Research Focus",
          description: "Emphasis on data analytics, AI/ML, and business applications of software."
        }
      ]
    }
  ],
  projects: [
    {
      title: "Autra Solutions Website",
      description: "A modern, responsive technical marketing and knowledge platform for external stakeholders and partners.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      image: "projects/port3.png",
      links: {
        github: "https://github.com/yourusername/portfolio",
        live: "https://yourportfolio.com"
      }
    },
    {
        title: "www.autra.ai",
        description: "Led the end-to-end development of the autra.ai website, including the integration of third-party services and enhanced UI/UX.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Cursor"],
        image: "projects/port8.png",
        links: {
          github: "https://github.com/yourusername/portfolio",
          live: "https://autra.ai/"
        }
      },
      {
        title: "CrowdedCV",
        description: "Computer vision application aimed to enhance facial tracking in crowded urban environments.",
        technologies: ["Python", "OpenCV", "Flask", "sci-kit-learn"],
        image: "projects/port6.png",
        links: {
          github: "https://github.com/nrileyperez/face_tracking_openCV",
          live: "https://github.com/nrileyperez/face_tracking_openCV"
        }
      },
      {
        title: "SegmentUI",
        description: "A Flask-powered web tool for UI/UX designers that cleanly extracts and exports individual layers (or objects) from an image, with real-time progress tracking.",
        technologies: ["Python", "Flask", "OpenCV", "Pillow"],
        image: "projects/port5.png",
        links: {
          github: "https://github.com/nrileyperez/imageLayers",
          live: "https://github.com/nrileyperez/imageLayers"
        }
      },
      {
        title: "USEL Tournaments",
        description: "Full-stack Django web application for World Robot Olympiad regional and state competitions.",
        technologies: ["Python", "Django", "HTML/CSS", "SQLite", "Bootstrap"],
        image: "projects/port10.png",
        links: {
          github: "https://github.com/nigel-otieno/USEL-Tournament",
          live: "https://useladmin.pythonanywhere.com/"
        }
      },
      {
        title: "4kUpscaleAI",
        description: "Co-Developed web tool to upscale 4K video files and other media conversion",
        technologies: ["Python", "RealESRGAN", "Flask", "batch processing pipelines"],
        image: "projects/port9.png",
        links: {
          github: "https://github.com/yourusername/portfolio",
          live: "https://yourportfolio.com"
        }
      },
      {
        title: "Runs: Community Fitness App",
        description: "Collaborative startup team developing full-stack social fitness app for organizing and promoting community running events. Features route mapping, user geolocation, and real-time activity updates",
        technologies: ["Python", "Flask", "OpenLeaf", "PostgreSQL"],
        image: "projects/port7.png",
        links: {
          github: "https://github.com/yourusername/portfolio",
          live: "https://yourportfolio.com"
        }
      },
      {
        title: "NetThreatPredictML",
        description: "Personal project aimed at strengthening skills in network security, dataset preprocessing, model familiarity, and basic model evaluation",
        technologies: ["Python", "CICIDS Dataset", "sci-kit-learn"],
        image: "projects/port4.png",
        links: {
          github: "https://github.com/nrileyperez/NetworkThreatDetectionML",
          live: "https://github.com/nrileyperez/NetworkThreatDetectionML"
        }
      },
  ]
}; 