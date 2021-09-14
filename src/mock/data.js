import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Mobola | Developer', // e.g: 'Name | Developer'
  lang: 'en, fr', // e.g: en, es, fr, jp
  description: 'Welcome', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'I am',
  name: 'Mobola Moronto',
  subtitle: 'Software Engineer',
  cta: 'know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://docs.google.com/document/d/1U5V4hgE2VYTVNusCUeSbDYt1q88Jm5VggpOdISnx3zE/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'robodex.jpg',
    title: 'Robo-Dex',
    info: 'Robo-Dex is a rolodex for organizing your robot contacts. A simple React app that implements basic sort and search functionality, pulls data from a simple backend API with responsive CSS styling.',
    info2: '',
    url: 'https://mmoronto.github.io/Robo-dex/',
    repo: 'https://github.com/MMoronto/Robo-dex', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'covidDash.jpg',
    title: 'Covid-19 Dashboard',
    info: 'A dashboard for tracking global covid 19 cases. A simple React-Leaflet application.',
    info2: '',
    url: 'https://covid-19-dashboard-ce10d.web.app/',
    repo: 'https://github.com/MMoronto/covid-19-dashboard', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'escapevelocity.jpg',
    title: 'Escape Velocity',
    info: 'Commercial Space carrier (capsule/launch vehicles) review application. Ruby on Rails and React.js.',
    info2: '',
    url: 'https://github.com/MMoronto/escape-velocity',
    repo: 'https://github.com/MMoronto/escape-velocity', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/MMoronto',
    },
    {
      id: nanoid(),
      name: 'hashnode',
      url: 'https://hashnode.com/@Morakinyo',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mobola-moronto-02548742/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/MMoronto?tab=overview&from=2021-07-01&to=2021-07-22',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
