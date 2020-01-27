import React from "react";
import Logo from "./img/logo.svg";
import BeachPhoto from "./img/beach-work.jpg";
import "./styles/app.css";

function App() {
  return (
    <div className="flex bg-gray-100">
      <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:w-1/2 lg:max-w-full lg:py-24 lg:px-12">
        <div className="xl:max-w-lg xl:ml-auto">
          <img src={Logo} alt="workcation" className="h-10" />
          <img
            src={BeachPhoto}
            alt="beach-work"
            className="mt-8 rounded-lg shadow-xl sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
          />
          <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:text-4xl sm:mt-8 xl:text-4xl">
            You can work from anywhere.
            <br className="hidden lg:inline" />
            <span className="text-indigo-500">Take advantage of it.</span>
          </h1>
          <p className="mt-2 text-gray-600 sm:text-xl sm:mt-4 lg:text-3xl">
            Workcation helps you find work-friendly rentals in beautiful
            locations so you can enjoy some nice weather even when you're not on
            vacation.
          </p>
          <div className="mt-4 sm:mt-6">
            <a href="/" className="btn btn-indigo shadow-lg  sm:text-base">
              Book your escape
            </a>
            <a href="/" className="ml-2 btn btn-gray   sm:text-base">
              Book your escape
            </a>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 lg:relative">
        <img
          src={BeachPhoto}
          alt="beach-work"
          className="absolute inset-0 h-full w-full object-center object-cover"
        />
      </div>
    </div>
  );
}

export default App;
