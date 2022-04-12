import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const NavBar = () => {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            className={(x) =>
              x.isActive
                ? "inline-flex items-center py-6 px-3 mr-4 text-white hover:text-green-800 text-4xl font-bold cursive tracking-widest"
                : "inline-flex items-center py-6 px-3 mr-4 text-red-200 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
            }
          >
            Godwin
          </NavLink>
          <NavLink
            to="/post"
            className={(x) =>
              x.isActive
                ? "inline-flex items-center py-3 px-3 my-6 rounded text-red-100  bg-red-700 hover:text-green-800"
                : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/projects"
            className={(x) =>
              x.isActive
                ? "inline-flex items-center py-3 px-3 my-6 rounded text-red-100  bg-red-700 hover:text-green-800"
                : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={(x) =>
              x.isActive
                ? "inline-flex items-center py-3 px-3 my-6 rounded text-red-100  bg-red-700 hover:text-green-800"
                : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            }
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://twitter.com/godwin__JS"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://ng.linkedin.com/in/godwin-iyogun-0b0b79160"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/giyogun"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
