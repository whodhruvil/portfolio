// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: "JavaScript",
    svgFile: "js.svg",
    category: ["Web Development", "Languages", "Javascript"],
  },
  {
    title: "Node.js",
    svgFile: "nodejs.svg",
    category: ["Web Development", "Backend", "Javascript"],
  },
  {
    title: "PHP",
    svgFile: "php.svg",
    category: ["Web Development", "Backend", "Languages"],
  },
  {
    title: "React Native",
    svgFile: "reactts-native.svg",
    category: ["Mobile Application", "Javascript"],
  },
  {
    title: "React",
    svgFile: "react-svgrepo-com.svg",
    category: ["Web Development", "Frontend", "Javascript"],
  },
  {
    title: "Next.js",
    svgFile: "next-js.svg",
    category: ["Web Development", "Frontend", "Javascript"],
  },
  {
    title: "GraphQL",
    svgFile: "graphql.svg",
    category: ["Web Development", "Frontend"],
  },
  {
    title: "AWS",
    svgFile: "aws.svg",
    category: ["Web Development", "Tools"],
  },
  {
    title: "Magento",
    svgFile: "magento.svg",
    category: ["Web Development", "Tools"],
  },
  {
    title: "MongoDB",
    svgFile: "mongo.svg",
    category: ["Web Development", "Databases"],
  },
  {
    title: "PostgreSQL",
    svgFile: "postgresql.svg",
    category: ["Web Development", "Databases"],
  },
  {
    title: "Git",
    svgFile: "git.svg",
    category: ["Tools"],
  },
  {
    title: "TypeScript",
    svgFile: "typescript.svg",
    category: ["Web Development", "Languages", "Javascript"],
  },
  {
    title: "HTML",
    svgFile: "html.svg",
    category: ["Web Development", "Frontend"],
  },
  {
    title: "CSS",
    svgFile: "css.svg",
    category: ["Web Development", "Frontend"],
  },
  {
    title: "Tailwind CSS",
    svgFile: "tailwindcss.svg",
    category: ["Web Development", "Frontend"],
  },
  {
    title: "SASS",
    svgFile: "sass.svg",
    category: ["Web Development", "Frontend"],
  },
  {
    title: "Redux",
    svgFile: "redux.svg",
    category: ["Web Development", "Frontend"],
  },
  {
    title: "Webpack",
    svgFile: "webpack.svg",
    category: ["Web Development", "Frontend"],
  },
  {
    title: "Storybook",
    svgFile: "storybook.svg",
    category: ["Web Development", "Frontend"],
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
