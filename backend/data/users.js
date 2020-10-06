import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Nikita KC',
    email: 'nik@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Nikesh Ghimire',
    email: 'nik77@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Ram Khadka',
    email: 'ram@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
