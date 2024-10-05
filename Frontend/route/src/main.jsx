import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github, { githubUserData } from './Components/Header/Github.jsx'

// The other method
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children:[{
//       path:"",
//       element:<Home/>
//     },
//     {
//       path:"/about",
//       element:<About/>
//     },
//     {
//       path:"/contact",
//       element:<Contact/>
//     }
//   ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='user/:userid' element={<User/>}></Route>
      <Route 
      loader={githubUserData}
      path='github' 
      element={<Github/>}></Route>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
  </StrictMode>,
)



// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Layout from './Layout.jsx'
// import Home from './Components/Home/Home.jsx'
// import About from './Components/About/About.jsx'

// // Custom error page component
// const ErrorPage = () => (
//   <div>
//     <h1>404 - Page Not Found</h1>
//     <p>Sorry, the page you are looking for does not exist.</p>
//   </div>
// );

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     errorElement: <ErrorPage />,  // Add custom error handling
//     children: [
//       {
//         path: "/",  // Home route with the correct path
//         element: <Home />
//       },
//       {
//         path: "about",  // About route with its own path
//         element: <About />
//       }
//     ]
//   }
// ]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );
