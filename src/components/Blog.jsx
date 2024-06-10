import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { BlogOne, BlogTwo, BlogThree } from "../assets/images";

const blogData = [
  {
    id: 1,
    image: BlogOne,
    time: "15 Nov 2016",
    title: "Coffee Lovers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: BlogTwo,
    time: "10 Nov 2016",
    title: "Tips for UI Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: BlogThree,
    time: "07 Nov 2016",
    title: "Beautiful Day",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.",
    link: "https://www.twitter.com",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Latest from blog</h2>
          <div className="subtitle">get our latest new from blog</div>
        </div>
        <Row>
          {blogData.map((blog) => {
            return (
              <Col sm={4} key={blog.id}>
                <div className="holder">
                  <Card>
                    <Card.Img variant="top" src={blog.image} />
                    <Card.Body>
                      <time>{blog.time}</time>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>
                        {blog.description}
                      </Card.Text>
                      <a href={blog.link} className="btn btn-primary">
                        Read More <i className="fas fa-chevron-right"></i>
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
