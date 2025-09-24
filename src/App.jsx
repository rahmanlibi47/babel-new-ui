import React from "react";
import "./styles/style.scss";

import PlusIcon from "./assets/icons/plus.svg?react";
import LayoutDefault from "./assets/icons/sidebarIcon.svg?react";
import LayoutHover from "./assets/icons/sidebarIconHover.svg?react";
import Icon from "./components/IconComponent";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar
        breadcrumbMain="Sector"
        breadcrumbSub="Education and Technology"
      />

      <main className="app-content">
        <section className="demo-body">
          <h2>Education and Technology</h2>
        </section>
      </main>
    </>
  );
}

export default App;
