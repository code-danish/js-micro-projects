const library = [
  {
    title: 'Think Like A Monk',
    author: 'Jay Shetty',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'The Subtle Art Of Not Giving a Fuck',
    author: 'No Idea',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'The One Thing',
    author: 'Jhon Murray',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
let x = library;
let [{ title: firstBook }] = library;
x = firstBook;

x = JSON.stringify(library);

console.log(x);
console.dir(library);
console.log(library);
