const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - Math.random() * y)
    .toString(36)
    .slice(1);
};

const pages = [
  {
    route: "/",
    title: "Dhruvil Gajjar",
    heading: "ABOUT THIS SITE",
  },
  {
    route: "/about",
    title: "About | Dhruvil Gajjar",
    heading: "ABOUT ME",
  },
  {
    route: "/projects",
    title: "Projectss | Dhruvil Gajjar",
    heading: "PROJECTS",
  },
  {
    route: "/stats",
    title: "Stats | Dhruvil Gajjar",
    heading: "STATS",
  },
  {
    route: "/contact",
    title: "Contact | Dhruvil Gajjar",
    heading: "CONTACT",
  },
];

export { pages, randomString };
