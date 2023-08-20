import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Taskbar from "./components/taskbar/Taskbar";
import Footer from "./components/footer/Footer";
import Contact from "./Pages/Contact-Us/Contact";
import Services from "./Pages/Services/Services";
import AboutUs from "./Pages/AboutUs.js/AboutUs";
import ScrollToTop from "./components/Scroller/ScrollToTop";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <div>
        <ScrollToTop/>
        <Taskbar />
        <Outlet />
        <Footer/>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/Contact",
          element: <Contact />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/about",
          element: <AboutUs />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
