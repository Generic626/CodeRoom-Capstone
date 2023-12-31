const notebookList = [
  {
    id: "1",
    code: 'console.log("hello world")',
    title: "Quiz 1",
    type: "javascript",
    createdDate: "12/12/2023",
    author: { email: "matttfung@gmail.com", avatar: "/assets/avatar1.png" },
    sharedWith: { email: "bob123@gmail.com", avatar: "/assets/avatar2.png" },
    lastOpenAt: "12/12/2023",
  },
  {
    id: "2",
    code: 'print("hello world")',
    title: "Python 101",
    type: "python",
    createdDate: "12/12/2023",
    author: { email: "matttfung@gmail.com", avatar: "/assets/avatar1.png" },
    sharedWith: { email: "bob123@gmail.com", avatar: "/assets/avatar2.png" },
    lastOpenAt: "12/12/2023",
  },
  {
    id: "3",
    code: 'console.log("hello world")',
    title: "Welcome to JavaScript",
    type: "javascript",
    createdDate: "11/12/2023",
    author: { email: "bob123@gmail.com", avatar: "/assets/avatar2.png" },
    sharedWith: {
      email: "matttfung@gmail.com",
      avatar: "/assets/avatar1.png",
    },
    lastOpenAt: "11/12/2023",
  },
  {
    id: "4",
    code: 'console.log("hello world")',
    title: "Intermediate Course of JavaScript",
    type: "javascript",
    createdDate: "11/12/2023",
    author: { email: "bob123@gmail.com", avatar: "/assets/avatar2.png" },
    sharedWith: {
      email: "matttfung@gmail.com",
      avatar: "/assets/avatar1.png",
    },
    lastOpenAt: "11/12/2023",
  },
];

export default notebookList;
