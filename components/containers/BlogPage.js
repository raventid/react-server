import React from 'react';
import BlogItem from '../ui/BlogItem.js';


const items = [
  {
    id: "1",
    text: "First post.",
    image: {
      src: "http://www.hotel-r.net/im/hotel/bg/avangard-14.gif",
      width: "100",
      height: "100",
      alt: "avangarde"
    }
  },
  {
    id: "2",
    text: "Have you ever been to London? No? Try this for free!",
    image: {
      src: "http://www.hotel-r.net/im/hotel/bg/avangard-14.gif",
      width: "100",
      height: "100",
      alt: "avangarde"
    }
  },
  {
    id: "3",
    text: "How I've started my journey with React.js",
    image: {
      src: "http://www.hotel-r.net/im/hotel/bg/avangard-14.gif",
      width: "100",
      height: "100",
      alt: "avangarde"
    }
  },
];


class BlogPage extends React.Component {
      constructor(props) {
        super(props);
        this.state = { items };
      }

      render() {
        const { items } = this.state;
        return React.createElement(
          "div",
          null,
          items.map(item => (React.createElement(BlogItem, { key: item.id, item })))
        )
      }
};

export default BlogPage;
