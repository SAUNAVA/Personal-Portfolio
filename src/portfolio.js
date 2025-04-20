const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'pp',
  title: 'Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Saunava Saraswati',
  role: 'Full Stack Developer',
  description:
    'A aspiring full stack developer with a passion for learning and building. I am a quick learner and a team player. I love to work on challenging problems and find solutions.I am always looking for new opportunities to learn and grow.',
  resume: 'https://drive.google.com/file/d/1aQo2uXnimhp1PLv4LutUrSVowh6EmuC4/view?usp=drive_link',
  videoCv: 'https://drive.google.com/file/d/1WZb3sGTEeG1Z8VFPs6gf0Z65QoUT3GcB/view?usp=sharing',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/SAUNAVA',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Skill_Share',
    description:
      'A platform where you can be learner or a mentor and learn or teach various skills.',
    stack: ['Node', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/SAUNAVA/SKILL_SHARE',
    livePreview: 'https://github.com',
  },
  {
    name: 'Task Manager',
    description:
      'A one stop solution for all your task management needs. Create, update and delete tasks.',
    stack: ['Node', 'JavaScript', 'React' , 'TailWind CSS'],
    sourceCode: 'https://github.com/SAUNAVA/Task_Management_App',
    livePreview: 'https://github.com',
  },
  {
    name: 'CRM App',
    description:
      'A customer relationship management application to manage your customers.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/SAUNAVA/CRM_APP',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'saunava1768@gmail.com',
  number : '8617376628',
  instagram : 'https://instagram.com/saunava_saraswati?igshid=MzRlODBiNWFlZA==',
  Twitter : 'https://twitter.com/saunava_saraswati',

}

export { header, about, projects, skills, contact }
