// TODO: Add Athletic Skills, Office Skills

const skills = [
  {
    title: 'Product Lifecycle Management',
    competency: 5,
    category: ['Product Skills'],
  },
  {
    title: 'Stakeholder Management',
    competency: 5,
    category: ['Product Skills'],
  },
  {
    title: 'Feature Prioritization',
    competency: 5,
    category: ['Product Skills'],
  },
  {
    title: 'Leadership Skills',
    competency: 5,
    category: ['Product Skills'],
  },
  {
    title: 'Product Backlog Management',
    competency: 5,
    category: ['Product Skills'],
  },
  {
    title: 'Product/ Technical Documentation',
    competency: 5,
    category: ['Product Skills'],
  },
  {
    title: 'Agile Methodologies',
    competency: 5,
    category: ['Product Skills'],
  },
  {
    title: 'Jira',
    competency: 5,
    category: ['Product Skills', 'Programming/ Applications'],
  },
  {
    title: 'Rally',
    competency: 5,
    category: ['Product Skills', 'Programming/ Applications'],
  },
  {
    title: 'Visio',
    competency: 5,
    category: ['Product Skills', 'Programming/ Applications'],
  },
  {
    title: 'Confluence',
    competency: 5,
    category: ['Product Skills', 'Programming/ Applications'],
  },
  {
    title: 'User Acceptance Testing (UAT)',
    competency: 5,
    category: ['Product Skills', 'Programming/ Applications'],
  },

  {
    title: 'API Development and Integration',
    competency: 5,
    category: ['Misc'],
  },
  {
    title: 'Microservices',
    competency: 5,
    category: ['Misc'],
  },
  {
    title: 'Java',
    competency: 5,
    category: ['Programming/ Applications'],
  },
  {
    title: 'Spring',
    competency: 5,
    category: ['Programming/ Applications'],
  },
  {
    title: 'Hibernate',
    competency: 4,
    category: ['Programming/ Applications'],
  },
  {
    title: 'SQL',
    competency: 5,
    category: ['Programming/ Applications'],
  },
  {
    title: 'Oracle',
    competency: 5,
    category: ['Programming/ Applications'],
  },
  {
    title: 'SQL Developer',
    competency: 5,
    category: ['Programming/ Applications'],
  },
  {
    title: 'Denodo',
    competency: 3,
    category: ['Programming/ Applications'],
  },
  {
    title: 'Postman Client',
    competency: 5,
    category: ['Programming/ Applications'],
  },
  {
    title: 'SOAP UI',
    competency: 3,
    category: ['Programming/ Applications'],
  },
  {
    title: 'Cucumber',
    competency: 4,
    category: ['Programming/ Applications'],
  },
  {
    title: 'Test Driven Development (TDD)',
    competency: 4,
    category: ['Programming/ Applications'],
  },
  {
    title: 'Behavioral Driven Development (BDD)',
    competency: 4,
    category: ['Programming/ Applications'],
  },
  {
    title: 'HTML',
    competency: 4,
    category: ['Programming/ Applications'],
  },
  {
    title: 'CSS',
    competency: 4,
    category: ['Programming/ Applications'],
  },
  {
    title: 'JavaScript',
    competency: 4,
    category: ['Programming/ Applications'],
  },
  {
    title: 'JSON',
    competency: 5,
    category: ['Programming/ Applications'],
  },
  {
    title: 'XML',
    competency: 4,
    category: ['Programming/ Applications'],
  },
  {
    title: 'YAML',
    competency: 4,
    category: ['Programming/ Applications'],
  },
  {
    title: 'Jenkins',
    competency: 4,
    category: ['Programming/ Applications'],
  },
  {
    title: 'Gradle',
    competency: 4,
    category: ['Programming/ Applications'],
  },
  {
    title: 'Maven',
    competency: 3,
    category: ['Programming/ Applications'],
  },
  {
    title: 'GIT',
    competency: 5,
    category: ['Programming/ Applications'],
  },
  {
    title: 'SVN',
    competency: 5,
    category: ['Programming/ Applications'],
  },
  {
    title: 'CI/CD',
    competency: 4,
    category: ['Programming/ Applications'],
  },
  {
    title: 'Kibana',
    competency: 4,
    category: ['Programming/ Applications'],
  },
  {
    title: 'Grafana',
    competency: 4,
    category: ['Programming/ Applications'],
  },
  {
    title: 'Microsoft Office Suite',
    competency: 5,
    category: ['Programming/ Applications'],
  },

  {
    title: 'Windows',
    competency: 5,
    category: ['Operating System'],
  },
  {
    title: 'OS X',
    competency: 5,
    category: ['Operating System'],
  },
  {
    title: 'Linux',
    competency: 3,
    category: ['Operating System'],
  },

  {
    title: 'Englsih',
    competency: 5,
    category: ['Languages'],
  },

  {
    title: 'Hindi',
    competency: 5,
    category: ['Languages'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  // .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
