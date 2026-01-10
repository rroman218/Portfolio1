/* File with constants */

import { BarChart, Lightbulb, Monitor, Palette, Rocket, Search, Smartphone } from "lucide-react";

// About section
export const skills = [
  'Figma', 'Adobe XD', 'Photoshop', 'Illustrator',
  'Sketch', 'Prototyping', 'Design Systems', 'User Research',
  'Wireframing', 'UI/UX', 'InVision', 'Principle'
];

export const stats = [
  { number: '5+', label: 'years of experience' },
  { number: '30+', label: 'completed projects' },
  { number: '10+', label: 'satisfied clients' }
]

// Portfolio section
export const categories = ['All', 'UI/UX', 'Web', 'Branding'];

export const projects = [
  {
    title: 'Mobile Banking',
    category: 'UI/UX',
    description: 'Mobile App Redesign for Banking Focus on Ease of Use',
    image: 'https://images.unsplash.com/photo-1629697776809-f37ceac39e77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3 Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXB8ZW58MXx8fHwxNzY1NjE3OTI2fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Online Electronics Store',
    category: "Internet",
    description: 'E-commerce platform design with intuitive navigation and fast design',
    image: 'https://images.unsplash.com/photo-1637502877428-27e6553a8817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nz g4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwbGFwdG9wfGVufDF8fHx8MTc2NTU3NTc2MHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Startup branding',
    category: "Branding",
    description: 'Creating an identity and style for a technology startup',
    image: 'https://images.unsplash.com/photo-1640975972263-1f73398e943b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3 Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGxvZ28lMjBkZXNpZ258ZW58MXx8fHwxNzY1NjI1OTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Fitness App',
    category: 'UI/UX',
    description: 'UI/UX design of a workout and nutrition tracking add-on',
    image: 'https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w 3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMHNjcmVlbnxlbnwxfHx8fDE3NjU1MTc0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Corporate website',
    category: "Internet",
    description: 'Consulting company website redesign',
    image: 'https://images.unsplash.com/photo-1740128041074-7fc1593e7851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8 MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NTYyNTk0M3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Dashboard for SaaS',
    category: 'UI/UX',
    description: 'Dashboard design for analytics platform',
    image: 'https://images.unsplash.com/photo-1764601841480-d3c8b8ee9918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w 3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1aSUyMGRlc2lnbnxlbnwxfHx8fDE3NjU1MTg1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

// Process section
export const steps = [
  {
    icon: Search,
    title: 'Research & Briefing',
    description: 'I study your business, target audience, competitors, and create technical specifications'
  },
  {
    icon: Lightbulb,
    title: 'Concept & Prototype',
    description: 'I create wireframes and interactive prototypes to test ideas'
  },
  {
    icon: Palette,
    title: 'Visual Design',
    description: 'I develop the final design with attention to details, colors, and typography'
  },
  {
    icon: Rocket,
    title: 'Handoff & Support',
    description: 'I prepare all necessary files and provide support during development'
  }
];

// Testimonials section

export const testimonials = [
  {
    name: 'Maria Peterson',
    role: 'CEO, TechStart',
    text: 'Alex created an incredible design for us. Attention to detail, professionalism, and understanding of business goals – everything at the highest level. Highly recommend!'
  },
  {
    name: 'David Kovalenko',
    role: 'Product Manager, FinApp',
    text: 'Working with Alex was easy and pleasant. He quickly understood our needs and offered creative solutions that significantly improved our product UX.'
  },
  {
    name: 'Sophie Anderson',
    role: 'Marketing Director, E-Shop',
    text: 'The design of our online store exceeded all expectations. Conversion increased by 40% after the redesign. Thank you for the great work!'
  }
];

// Services section

export const services = [
  {
    icon: Monitor,
    title: 'Website Design',
    description: 'Creating responsive, modern websites that convert visitors into customers',
    price: 'from $500'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Design',
    description: 'UI/UX design for iOS and Android with a focus on usability',
    price: 'from $700'
  },
  {
    icon: Palette,
    title: 'Branding & Identity',
    description: 'Logo development, corporate style, and all necessary brand carriers',
    price: 'from $400'
  },
  {
    icon: BarChart,
    title: 'UI/UX Audit',
    description: 'Analysis of existing product and recommendations for improving user experience',
    price: 'from $300'
  }
];
