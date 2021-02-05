import pyramid from "./images/projects/amazon-clones.png";
import nota from "./images/projects/calculator-project.png";
import portfolio from "./images/projects/portfolio.png";
import flixer from "./images/projects/netflix.png";

export const projectData = [
  {
    title: "Netflix Clone",
    description: `Flixer is a clone of Netflix's front-end web interface. This app was created using React 
    functional components, axios for async/await requests, and deployed on Google Firebase. It features 
    movie data pulls from The Movie Database (TMDB) for current trends and movie posters. The trailer feature will be updated soon.`,
    technologies: "React, Axios, JavaScript, HTML, CSS, GitHub, Firebase, Firebase Authentication, Stripe Payments",
    image: flixer,
    date_created: "November 2020",
    link: "https://netflix-clone-c1f35.web.app/",
    github: "https://github.com/zourdycodes/netflix-clone",
  },
  {
    title: "React-Portfolio",
    description: `This portfolio was created using React. The inspiration for the theme 
        was based on Tim Baker Portfolio. The site is mobile and desktop responsive, with 
        additional functionality that people can change with their own personal infos. `,
    technologies: "React, JavaScript, HTML, CSS, GitHub, Netlify, AOS.js, Flexwider.js",
    image: portfolio,
    date_created: "October 2020",
    link: "https://zourdy.netlify.app",
    github: "https://github.com/zourdycodes/portfolio-web",
  },
  {
    title: "Amazon Clone",
    description: `Amazon was designed and built for an educational purposes as well as my Hobby actually.
    this is my way to learn more deeply about certain of programming language and also to rewind my knowledge about programming including
    front-end and back-end process`,
    technologies:
      "React, Redux, Styled-components, JavaScript, HTML, CSS, GitHub, Netlify, Firebase, Cloud Firestore, Firebase Authentication, Cart Functionality",
    image: pyramid,
    date_created: "January 2021",
    link: "https://clone-74fb5.web.app/",
    github: "https://github.com/zourdycodes/amazon-clone",
  },
  {
    title: "Neurmophism Calculator",
    description: `This calculator was built for rewind my knowledge about Mathematics and Logical Thinking
    I have a plan to update this calculator to become scientific calculator with a few additional features such as sin0 cos0, etc.`,
    technologies:
      "Animate.css, JavaScript, HTML, CSS, GitHub, Netlify",
    image: nota,
    date_created: "August 2020",
    link: "https://calculator-neurmophism-zourdythedev.netlify.app/",
    github: "https://github.com/zourdycodes/neurmophism-calculator",
  },
];