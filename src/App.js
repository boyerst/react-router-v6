import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Outlet, useParams, useRoutes } from 'react-router-dom';


const BlogPosts = {
  'first-blog-post': {
    title: 'First Blog Post',
    description: 'Lorem ipsum dolor sit amet, consectetur adip.'
  },
  'second-blog-post': {
    title: 'Second Blog Post',
    description: 'Hello React Router v6'
  }
};



function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}


// ROUTE CONFIG USE COMPONENTS
// function App() {
//   return (
//     <div className="App">
     
//       <Router>

//         <nav style={{ margin: 10 }}>
//           <Link to="/" style={{ padding: 5 }}>
//           Home
//           </Link>
//           <Link to="/posts" style={{ padding: 5 }}>
//           Posts
//           </Link>
//           <Link to="/about" style={{ padding: 5 }}>
//           About
//           </Link>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />}/>
//           <Route path="/posts" element={<Posts />}>
//             <Route index element={<PostLists />} />
//             <Route path=":slug" element={<Post />} />
//           </Route>  
//           <Route path="/about" element={<About />} />
//           <Route path="*" element={<NoMatch />} />
//         </Routes>

//       </Router>
//     </div>
//   );
// }


// ROUTE CONFIG USE HOOK

function Routes() {
  const element = useRoutes([
    { path: "/", element: <Home/> },
    { path: "/posts",
      element: <Posts/>,
      children: [
        { index: true, element: <PostLists/> },
        { path: ":slug", element: <Post/> }
      ],
    },
    { path: "/about", element: <About/> },
    { path: "*", element: <NoMatch/>}
  ]);
  return element;
}


function App() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
          <Link to="/" style={{ padding: 5 }}>
          Home
          </Link>
          <Link to="/posts" style={{ padding: 5 }}>
          Posts
          </Link>
          <Link to="/about" style={{ padding: 5 }}>
          About
          </Link>
      </nav>
      <Routes/>
    </Router>
  );
}








function About() {
  return (
    <div style={{ padding: 20 }}>
      <h2>About View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}


function Posts() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Blog</h2>
      <Outlet />
    </div>
  );
}


function PostLists() {
  return (
    <ul>
      {Object.entries(BlogPosts).map(([slug, { title }]) => (
        <li key={slug}>
          <Link to={`/posts/${slug}`}>
            <h3>{title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}


function Post() {
  // Use useParams() hook to access dynamic parameters that the route (or slug in our case) has
    // In this case the dynamic parameters are the title and description
    // slug here will be the route...either
      // first-blog-post OR second-blog-post
  const { slug } = useParams();
  console.log(slug)
  // Then we access the nested post objects within BlogPosts object using bracket notations
  const post = BlogPosts[slug];
  console.log(post)
  if(!post) {
    return <span>Post does not exist</span>
  }
  // Deconstruct contents of the post objects within BlogPosts object to access their sub-properties
  const { title, description } = post;
  return (
    <div style={{ padding: 20 }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}















export default App;
