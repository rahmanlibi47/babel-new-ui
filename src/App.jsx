import React from "react";
import "./styles/style.scss";

import PlusIcon from "./assets/icons/plus.svg?react";
import LayoutDefault from "./assets/icons/sidebarIcon.svg?react";
import LayoutHover from "./assets/icons/sidebarIconHover.svg?react";
import Icon from "./components/IconComponent";

import Navbar from "./components/Navbar";
import { MainContent } from "./components/Article/MainContent";
import { CardsProjects } from "./components/ContentCards/MainCard";
import { CardsFrameworks } from "./components/FrameworkCards/FrameworkCards";
import { PromptBar } from "./components/PromptBox/PromptBar";

function App() {
  return (
    <>
      <Navbar
        breadcrumbMain="Sector"
        breadcrumbSub="Education and Technology"
      />

      <main className="app-content">
        <section className="demo-body">
          {/* <MainContent/> */}
        </section>
        <CardsProjects />
         <br/>
        <CardsProjects />
        <br/>
        <br/>
        <br/>
        {/* <CardsFrameworks />
         <br/>
        <CardsFrameworks /> */}
          <br/>
        <br/>
          <br/>
        <br/>
      </main>
    </>
  );
}

export default App;
