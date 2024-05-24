const normalizedOrders = [
  {
    id: 'a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2',
    code: Math.floor(Math.random() * (1000 - 100) * 100),
    status: 'В работе',
    date: Date.now(),
    number: Math.floor(Math.random() * 99 + 1),

    content: '5909796d-5030-4e36-adec-68b8f9ec2d96',
  },
  {
    id: 'bb8afbec-2fec-491f-93e9-7f13950dd80b',
    code: Math.floor(Math.random() * (1000 - 100) * 100),
    status: 'В работе',
    date: Date.now(),
    number: Math.floor(Math.random() * 99 + 1),

    content: '429dea85-11dd-4054-a31e-c60c92e17255',
  },
  {
    id: '982bfbce-c5e0-41a0-9f99-d5c20ecee49d',
    number: Math.floor(Math.random() * 99 + 1),
    status: 'В работе',
    date: Date.now(),
    code: Math.floor(Math.random() * (1000 - 100) * 100),

    content: 'dfb982e9-b432-4b7d-aec6-7f6ff2e6af54',
  },
  {
    id: 'd9241927-09e1-44f3-8986-a76346869037',
    number: Math.floor(Math.random() * 99 + 1),
    status: 'В работе',
    date: Date.now(),
    code: Math.floor(Math.random() * (1000 - 100) * 100),

    content: '53b642d7-5e86-4717-a466-0640a1dee076',
  },
];

const normalizedComments = [
  {
    id: 'd75f762a-eadd-49be-8918-ed0daa8dd024',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut hendrerit odio. Aliquam quam turpis, mattis pellen primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
  {
    id: 'd75f762a-eadd-49be-8918-ed0daa8dd024',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut hendrerit odio. Aliquam quam turpis, stique senectus et netus et malesuada fames ac turpis egestas.',
  },
  {
    id: 'c3cb8f92-a2ed-4716-92a1-b6ea813e9049',
    comment:
      'Donec ut pharetra sapien. Nunc egestas pulvinar ante, at vehicula turpis dictum quis. Praesent ullamcorper justo sit amet urna placerat, quis pulvinar odio lacinia. Integ',
  },
  {
    id: 'bd129641-c0eb-432b-84b6-8b81d2930358',
    comment:
      'nisi quis tincidunt consectetur, purus ex elementum lorem, sed rhoncus tortor ante sed nisi. Donec ac tortor quis mi facilisis ullamcorper. Duis porta nisi vel tellus condimentum elementum. Curabitur ipsum turpis, congue laoreet ante sit amet, rhoncus dapibus turpis. Pellentesque at lacinia',
  },
  {
    id: '25402233-0095-49ea-9939-1e67ed89ffb9',
    comment: 'Maecenas id lorem faucibus, dignissim leo eu, porta augue. Du',
  },
  {
    id: '90902233-0095-49ea-9939-1e67ed89ffb9',
    comment:
      ' nulla sodales, ac sagittis erat dapibus. Maecenas a vulputate purus, sed elementum ligula. Donec ut elit eu nunc suscipit dapibus. Nulla eu porta lacus, at ',
  },
  {
    id: '08c9ffa0-d003-4310-9e15-20978743296e',
    comment:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla',
  },
  {
    id: '64a4967c-2080-4a99-9074-4655a4569a95',
    comment:
      'purus. Proin nec eleifend orci, a consequat est. Mauris eleifend orci non hendrerit cursus. Nullam tempor arcu id erat euismod, vel varius enim malesuada. Sed suscipit, nisl et auctor egestas, mauris quam dapibus nisi, tincidunt porttitor velit quam id augue.',
  },
  {
    id: '4bc8528e-26d1-46c3-a522-8e18d10c8c84',
    comment: 'amsof madpm plmas pam amsdpmaspldm lasmp',
  },
  {
    id: '6c02c2ce-b868-4191-b4a7-8686429f4bac',
    comment: 'af,papmfmpadpa a sds d sds ',
  },
  {
    id: '99bb6fbb-e53b-4b7e-b9c2-23b63b77385d',
    comment: 'adas asd aasdaeqew qwecawrwg ',
  },
];

const normalizedOrderContents = [
  {
    id: '5909796d-5030-4e36-adec-68b8f9ec2d96',
    clientName: 'Вкусно и точка',
    driver: 'Matt',
    phone: '123456789',
    comments: [
      'd75f762a-eadd-49be-8918-ed0daa8dd024',
      'c3cb8f92-a2ed-4716-92a1-b6ea813e9049',
      'bd129641-c0eb-432b-84b6-8b81d2930358',
    ],
  },
  {
    id: '429dea85-11dd-4054-a31e-c60c92e17255',
    driver: 'Kole',
    phone: '123456789',
    clientName: 'Fabrique',
    comments: [
      '08c9ffa0-d003-4310-9e15-20978743296e',
      '64a4967c-2080-4a99-9074-4655a4569a95',
      '4bc8528e-26d1-46c3-a522-8e18d10c8c84',
    ],
  },
  {
    id: 'dfb982e9-b432-4b7d-aec6-7f6ff2e6af54',
    driver: 'Khan',
    phone: '123456789',
    clientName: 'Flat Iron',
    comments: [
      '6c02c2ce-b868-4191-b4a7-8686429f4bac',
      '99bb6fbb-e53b-4b7e-b9c2-23b63b77385d',
    ],
  },
  {
    id: '53b642d7-5e86-4717-a466-0640a1dee076',
    driver: 'Andrew',
    phone: '123456789',
    clientName: 'Homeslice',
    comments: [
      '25402233-0095-49ea-9939-1e67ed89ffb9',
      '90902233-0095-49ea-9939-1e67ed89ffb9',
    ],
  },
];

module.exports = {
  comments: normalizedComments,
  orders: normalizedOrders,
  contents: normalizedOrderContents,
};
