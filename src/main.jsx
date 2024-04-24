
import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from '../Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from '../src/components/Main/About.jsx'
import Contact from '../src/components/Main/Contact.jsx'
import Shopping from '../src/components/Shopping/Product.jsx'







// import User from './components/User/User.jsx'
// import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])




const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Layout />}>

      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/shopping' element={<Shopping />} />

      {/* <Route path='user/:userid' element={<User />} />
      <Route
        loader={githubInfoLoader}
        path='github'
        element={<Github />}
      /> */}

    </Route>
  )
)





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-s8kznxaapkvm6kjd.us.auth0.com"
      clientId="b0YNssWqfkQJyzADu3Vy2By3XxTr29ki"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >

      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>,
)


