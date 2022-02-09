import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

// import Cell from '../components/Projects/Cell';
// import data from '../data/blogs';

const Blogs = () => (
  <Main
    title="Blogs"
    description="Blogs published by Udit."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/blogs">Blogs</Link></h2>
          <p>Work In-Progress!</p>
        </div>
      </header>
      {/* {data.map((blog) => (
        <Cell
          data={blog}
          key={blog.title}
        />
      ))} */}
    </article>
  </Main>
);

export default Blogs;
