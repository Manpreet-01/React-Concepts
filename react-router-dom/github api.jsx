import "../styles/App.css";

import { useState, useEffect } from "react";

import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  NavLink,
  Route,
  Routes,
  RouterProvider,
  Outlet,
  useParams,
} from "react-router-dom";



/*
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      }
    ]
  }
]);
*/

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout /> } >
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="github" element={<Github />} />
    </Route>
  )
);

function Layout() {
  function linkStyles({ isActive }){
    return isActive ? "a-active" : "not";
  }
  return (
    <>
      <header>Header</header>
      <nav>
        <NavLink className={linkStyles} to="/">Home</NavLink>
        <NavLink className={linkStyles} to="about">About</NavLink>
        <NavLink className={linkStyles} to="contact">Contact</NavLink>
        <NavLink className={linkStyles} to="user:1">User</NavLink>
        <NavLink className={linkStyles} to="github">Github</NavLink>
      </nav>
      <main className='main'>
        
        {/* Render the app routes via the Layout Outlet */}
        <Outlet />
        {/* acts as a placeholder */}
        
      </main>
      <footer>Footer</footer>
    </>
  );
}


export default function App() {
  return (
    <RouterProvider router={router} />
  );
}

function Home() {
  return (
    <>
      <h1>Home</h1>
    </>
  );
}

function About(){
  return (
    <>
      <h1>About</h1>
    </>
  );
}

function Contact(){
  return (
    <>
      <h1>Contact</h1>
    </>
  );
}

function User(){
  const {userid} = useParams();
  
  return (
    <>
      <h1>User: {userid}</h1>
    </>
  )
}

function Github(){
  const [data, setData] = useState('');
  
  useEffect(()=>{
    const url = 'https://api.github.com/users/hiteshchoudhary'
    
    fetch(url).then(r=>r.json()).then(data => {
      setData(data);
    });
    
  }, []);
  
  return (
    <>
      <img src={data.avatar_url} alt="img" width="200px" />
      <h1>followers: {data.followers}</h1>
    </>
  );
}