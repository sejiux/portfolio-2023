import ImmoTouch from "../public/images/immotouch.png";
import ImmoTouch1 from "../public/images/immoTouch1.png";
import ImmoTouch2 from "../public/images/immoTouch2.png";
import ImmoTouch3 from "../public/images/immoTouch3.png";
import ImmoTouch4 from "../public/images/immoTouch4.png";
import Kabriol from "../public/images/kabriol.png";
import Kabriol1 from "../public/images/kabriol1.png";
import Kabriol2 from "../public/images/kabriol2.png";
import Kabriol3 from "../public/images/kabriol3.png";
import Kabriol4 from "../public/images/kabriol4.png";
import Themify1 from "../public/images/themify1.png";
import Themify2 from "../public/images/themify2.png";
import Societech from "../public/images/societech1.png";
import Societech2 from "../public/images/societech2.png";
import Metawaste1 from "../public/images/metawaste1.png";
import Metawaste2 from "../public/images/metawaste2.png";
import { Case } from "@/types/types";

export const worksData = [
  {
    title: "Themify", 
    category: "Product", 
    date: "2023", 
    image: Themify1, 
    slug: "themify",
  },
  {
    title: "ImmoTouch", 
    category: "Web application", 
    date: "2023", 
    image: ImmoTouch, 
    slug: "immotouch",
  },
  {
    title: "Societech", 
    category: "Landing page", 
    date: "2022", 
    image: Societech, 
    slug: "societech"
  },
  {
    title: "Kabriol", 
    category: "Web application", 
    date: "2022", 
    image: Kabriol, 
    slug: "kabriol"
  },
  {
    title: "Metawaste", 
    category: "Back office", 
    date: "2022", 
    image: Metawaste1, 
    slug: "metawaste"
  },
];

export const worksBySlugData: Case[] = [
  {
    title: "Themify", 
    category: "Product", 
    date: "2023", 
    images: [
      Themify1,
      Themify2,
    ], 
    slug: "themify",
    company: "Sejiux",
    role: "UX/UI Designer & FullStack Developer",
    construction: "Figma, NextJs, ReactJs, Tailwindcss, Typescript, Snipcart",
    content: "Themify is an library of high-conversion, attractive and trendy themes developed with Next.js on the front-end and Strapi on the back-end. I'm using Snipcart for a secure shopping basket system.",
    siteUrl: 'https://github.com/sejiux/Themify',
  },
  {
    title: "ImmoTouch", 
    category: "Web application", 
    date: "2023", 
    images: [
      ImmoTouch1,
      ImmoTouch2,
      ImmoTouch3,
      ImmoTouch4,
    ], 
    slug: "immotouch",
    company: "Dev-id",
    role: "FrontEnd Developer",
    construction: "ReactJs, Typescript, MaterialUi, Yup, Git, BitBucket",
    content: "Creation of the web application from scratch Immo Touch in teams with the Dev-id agency for real estate agencies with 3 roles, Admin, Agency with an authentication system and client (mobile part).",
    siteUrl: 'https://immotouch.fr/',
  },
  {
    title: "Societech", 
    category: "Landing page", 
    date: "2022", 
    images: [
      Societech,
      Societech2,
    ], 
    slug: "societech",
    company: "Dev-id",
    role: "FrontEnd Developer",
    construction: "AstroJs, Typescript, Tailwindcss, Git, Github",
    content: "Redesign from scratch with the Dev-id agency of a presentation website of Societech - media of positive innovation and techforgood",
    siteUrl: 'http://www.societech.fr/',
  },
  {
    title: "Kabriol", 
    category: "Web application", 
    date: "2022", 
    images: [
      Kabriol1,
      Kabriol2,
      Kabriol3,
      Kabriol4,
    ], 
    slug: "kabriol",
    company: "Dev-id",
    role: "FrontEnd Developer",
    construction: "ReactJs, Typescript, MaterialUi, Parse Server, Yup, Git, Github, Hostinger, PayPal API, Stripe Api",
    content: "Creation from scratch with the Dev-id agency of a web application with an authentication system for the customer, the purchase of box (1 month, 3 months and 1 year), the addition of code purchased in stores such as the Fnac or others for the use of the Kabriol application.",
    siteUrl: 'https://www.webkabriol.fr/',
  },
  {
    title: "Metawaste", 
    category: "Back office", 
    date: "2022", 
    images: [
      Metawaste1,
      Metawaste2,
    ], 
    slug: "metawaste",
    company: "Dev-id",
    role: "FrontEnd Developer",
    construction: "ReactJs, Typescript, MaterialUi, StyledComponents, Yup, Git, Github",
    content: "Creation from scratch of a web application in team with Dev-Id agency that reinvents waste management.",
    siteUrl: 'https://metawaste.com/fr/',
  },
];