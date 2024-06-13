export function sidebarData(url) {
  return [
    {
      id: 1,
      link: 'about_the_course',
      path: `${url}`,
    },
    {
      id: 2,
      link: 'structure',
      path: `${url}/structure`,
    },
    {
      id: 3,
      link: 'evaluation',
      path: `${url}/evaluation`,
    },
    {
      id: 4,
      link: 'resources',
      path: `${url}/resources/lecture`,
      children: [
        {
          id: 1,
          link: 'lecture',
          path: `${url}/resources/lecture`,
        },
        {
          id: 2,
          link: 'video',
          path: `${url}/resources/video`,
        },
        {
          id: 3,
          link: 'books',
          path: `${url}/resources/books`,
        },
        {
          id: 4,
          link: 'internet_resources',
          path: `${url}/resources/internet-resources`,
        },
      ],
    },
    {
      id: 5,
      link: 'course_assignments',
      path: `${url}/course-assignments/evaluation`,
      children: [
        {
          id: 1,
          link: 'evaluation',
          path: `${url}/course-assignments/evaluation`,
        },
        {
          id: 2,
          link: 'tests',
          path: `${url}/course-assignments/tests`,
        },
      ],
    },
  ]
}
