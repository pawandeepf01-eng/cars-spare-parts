import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Signin from "./componets/Signin.jsx";
import Navbar from "./componets/Navbar.jsx";
import Login from "./componets/Login.jsx";
import Home from "./componets/Home.jsx";
import About from "./componets/About.jsx";
import Contact from "./componets/Contact.jsx";
import Cart from "./componets/Cart.jsx";
import Shop from "./componets/Shop.jsx";
import Footer from "./componets/Footer.jsx";
import Productdetail from "./componets/Productdetail.jsx";
import Checkout from "./componets/Checkout.jsx";
import Profile from "./componets/Profile.jsx";
import Admin from "./componets/Admin.jsx";
import Userorder from "./componets/Userorder.jsx";
import Adminorder from "./componets/Adminorder.jsx";
import Adminlayout from "./componets/Adminlayout.jsx";
import Deleteproduct from "./componets/Deleteproduct.jsx";
import Adminuser from "./componets/Adminuser.jsx";
import OrderSuccess from "./componets/Ordersucces.jsx";
import Userprotecting from "./componets/Userprotecting.jsx";
import Adminprotecting from "./componets/Adminprotecting.jsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Home />
          <Footer />
        </div>
      ),
    },
    {
      path: "/signin",
      element: (
        <div>
          <Navbar />
          <Signin />
          <Footer />
        </div>
      ),
    },
    {
      path: "/login",
      element: (
        <div>
          <Navbar />
          <Login />
          <Footer />
        </div>
      ),
    },
    {
      path: "/about",
      element: (
        <div>
          <Navbar />
          <About />
          <Footer />
        </div>
      ),
    },
    {
      path: "/contact",
      element: (
        <div>
          <Navbar />
          <Contact />
          <Footer />
        </div>
      ),
    },
    {
      path: "/cart",
      element: (
        <Userprotecting>
          <div>
            <Navbar />
            <Cart />
            <Footer />
          </div>
        </Userprotecting>
      ),
    },
    {
      path: "/shop",
      element: (
        <div>
          <Navbar />
          <Shop />
          <Footer />
        </div>
      ),
    },
    {
      path: "/productdetail/:id",
      element: (
        <Userprotecting>
          <div>
            <Navbar />
            <Productdetail />
            <Footer />
          </div>
        </Userprotecting>
      ),
    },
    {
      path: "/checkout",
      element: (
        <Userprotecting>
          <div>
            <Navbar />
            <Checkout />
            <Footer />
          </div>
        </Userprotecting>
      ),
    },
    {
      path: "/profile",
      element: (
        <Userprotecting>
          <div>
            <Navbar />
            <Profile />
            <Footer />
          </div>
        </Userprotecting>
      ),
    },
    {
      path: "/userorder",
      element: (
        <div>
          <Navbar />
          <Userorder />
          <Footer />
        </div>
      ),
    },
    {
      path: "/ordersucces",
      element: (
        <Userprotecting>
          <div>
            <Navbar />
            <OrderSuccess />
            <Footer />
          </div>
        </Userprotecting>
      ),
    },
    {
      path: "/emailverify",
      element: (
        <Userprotecting>
          <div>
            <Navbar/>
            <Emailverification />
            <Footer/>
          </div>
        </Userprotecting>
      ),
    },
    {
      path: "/admin",
      element: (
        <Adminprotecting>
          <div>
            <Navbar />
            <Adminlayout />
            <Footer />
          </div>
        </Adminprotecting>
      ),
      children: [
        { path: "showuser", element: <Adminuser /> },
        { path: "addproduct", element: <Admin /> },
        { path: "adminorders", element: <Adminorder /> },
        { path: "deleteproduct", element: <Deleteproduct /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
