// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: "Javascript",
    competency: 4,
    category: ["Web Development", "Languages", "Javascript"],
  },
  {
    title: "php",
    competency: 3,
    category: ["Web Development", "Languages"],
  },
  {
    title: "React Native",
    competency: 4,
    category: ["Mobile Application", "Javascript"],
  },
  {
    title: "Node.JS",
    competency: 2,
    category: ["Web Development", "Javascript"],
  },
  {
    title: "React",
    competency: 3,
    category: ["Web Development", "Javascript"],
  },

  {
    title: "Amazon Web Services",
    competency: 2,
    category: ["Web Development", "Tools"],
  },
  {
    title: "Heroku",
    competency: 2,
    category: ["Web Development", "Tools"],
  },
  {
    title: "Magento",
    competency: 2,
    category: ["Web Development", "Tools"],
  },
  {
    title: "MongoDB",
    competency: 3,
    category: ["Web Development", "Databases"],
  },

  {
    title: "PostgreSQL/SQLite3/SQL",
    competency: 4,
    category: ["Web Development", "Databases", "Languages"],
  },
  {
    title: "Flask",
    competency: 2,
    category: ["Web Development", "Python"],
  },
  {
    title: "Django",
    competency: 3,
    category: ["Web Development", "Python"],
  },
  {
    title: "Git/Mercurial",
    competency: 3,
    category: ["Tools"],
  },
  {
    title: "Numpy",
    competency: 1,
    category: ["Data Science", "Data Engineering", "Python"],
  },

  {
    title: "Jupyter",
    competency: 2,
    category: ["Data Science", "Python"],
  },
  {
    title: "Typescript",
    competency: 1,
    category: ["Web Development", "Languages", "Javascript"],
  },
  {
    title: "HTML + CSS",
    competency: 3,
    category: ["Web Development", "Languages"],
  },
  {
    title: "Python",
    competency: 3,
    category: ["Languages", "Python"],
  },
  {
    title: "C++",
    competency: 2,
    category: ["Languages"],
  },
  {
    title: "C",
    competency: 2,
    category: ["Languages"],
  },
  {
    title: "C#",
    competency: 2,
    category: ["Languages"],
  },
  {
    title: "Data Visualization",
    competency: 2,
    category: ["Data Science", "Javascript"],
  },

  {
    title: "Pandas",
    competency: 2,
    category: ["Data Engineering", "Data Science", "Python"],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  "#6968b3",
  "#37b1f5",
  "#40494e",
  "#515dd4",
  "#e47272",
  "#cc7b94",
  "#3896e2",
  "#c3423f",
  "#d75858",
  "#747fff",
  "#64cb7b",
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
