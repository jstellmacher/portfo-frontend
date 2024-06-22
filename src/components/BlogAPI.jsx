// BlogAPI.jsx
const dummyData = [
  {
    id: 1,
    title: "First Blog Post",
    date: "June 1, 2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://picsum.photos/200/310",
    featured: true,
    tags: ['coding', 'web development', 'javascript'],
  },
  {
    id: 2,
    title: "Second Blog Post",
    date: "June 5, 2024",
    description: "Nulla quis lorem ut libero malesuada feugiat.",
    imageUrl: "https://picsum.photos/200/307",
    featured: false,
    tags: ['project management', 'ux/ui'],
  },
  {
    id: 3,
    title: "Third Blog Post",
    date: "June 10, 2024",
    description: "Vestibulum ac diam sit amet quam vehicula elementum.",
    imageUrl: "https://picsum.photos/200/306",
    featured: false,
    tags: ['marketing', 'python'],
  },
  {
    id: 4,
    title: "4th Blog Post",
    date: "June 11, 2024",
    description: "Vestibulum ac diam sit amet quam vehicula elementum.",
    imageUrl: "https://picsum.photos/seed/picsum/200",
    featured: false,
    tags: ['coding', 'java'],
  },
  {
    id: 5,
    title: "5th Blog Post",
    date: "June 130, 2024",
    description: "Vestibulum ac diam sit amet quam vehicula elementum.",
    imageUrl: "https://picsum.photos/200/300",
    featured: false,
    tags: ['web development', 'javascript'],
  },
];

export const fetchBlogPosts = async () => {
  try {
    // Simulate delay to mimic async fetch
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return dummyData;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error; // Propagate error to caller
  }
};
