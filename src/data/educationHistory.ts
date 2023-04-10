export type Education = {
  course: string;
  courseHref: string;
  currentlyStudying: boolean;
  description: string;
  endYear: number | undefined;
  logoFile: string;
  school: string;
  startYear: number;
};

const educationHistory: Education[] = [
  {
    course: 'COMP 268: Introduction to Programming (Java)',
    courseHref: 'https://www.athabascau.ca/syllabi/comp/comp268.html',
    currentlyStudying: false,
    description:
      'This course is designed to teach the basics of Java language principles, as well as advanced topics in object-oriented programming using Java.',
    endYear: 2021,
    logoFile: '',
    school: 'Athabasca University',
    startYear: 2020,
  },
  {
    course: 'COMP 1630: Relational Database Design and SQL',
    courseHref: 'https://www.bcit.ca/courses/relational-database-design-and-sql-comp-1630/',
    currentlyStudying: false,
    description:
      'This course is designed to teach the basics of Java language principles, as well as advanced topics in object-oriented programming using Java.',
    endYear: 2018,
    logoFile: '',
    school: 'British Columbia Institute of Technology',
    startYear: 2018,
  },
  {
    course: 'Web Development Bootcamp',
    courseHref: 'https://www.lighthouselabs.ca/en/web-development',
    currentlyStudying: false,
    description:
      'A full-time immersive boot camp focused on full-stack web application development.',
    endYear: 2017,
    logoFile: '',
    school: 'Lighthouse Labs',
    startYear: 2017,
  },
  {
    course: 'CITX 1160: Cisco CCNA Level 1',
    courseHref: 'https://www.bcit.ca/courses/cisco-ccna-level-1-citx-1160/',
    currentlyStudying: false,
    description:
      'A course that covered the fundamentals of LANs, WANs, routers, router programming, networking, network standards, and terminology.',
    endYear: 2016,
    logoFile: '',
    school: 'British Columbia Institute of Technology',
    startYear: 2016,
  },
  {
    course: 'Administrative Assistant',
    courseHref:
      'https://www.sbccollege.ca/diploma/administrative-programs/administrative-assistant/',
    currentlyStudying: false,
    description:
      'Included a wide range of courses, including grammar, typing (graduated with 90 WPM), HTML, records management, email and phone etiquette, hardware troubleshooting, Microsoft Word, Microsoft PowerPoint, Microsoft Excel, Adobe Creative Suite, and software troubleshooting.',
    endYear: 2006,
    logoFile: '',
    school: 'Saskatoon Business College',
    startYear: 2005,
  },
];

export default educationHistory;
