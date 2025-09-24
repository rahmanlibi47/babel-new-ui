import React from "react";
import styles from "./Navbar.module.scss";
import Icon from "./IconComponent";
import LayoutDefault from "../assets/icons/sidebarIcon.svg?react";
import MenuMore from "../assets/icons/menu-more.svg?react";
import LayoutHover from "../assets/icons/sidebarIconHover.svg?react";
import ChevronDown from "../assets/icons/chevronDown.svg?react";
import SettingsIcon from "../assets/icons/settings.svg?react";
import Ask from "../assets/icons/ask.svg?react";
import Browse from "../assets/icons/browse.svg?react";
import { BtnModes } from "./Sidebar/BtnModes";
import { LibraryBar } from "./Sidebar/LibraryBar";
import { LoggedUser } from "./Sidebar/LoggedUser";

export default function Navbar({
  breadcrumbMain = "Sector",
  breadcrumbSub = "Education and Technology",
}) {
  return (
    <header className={styles.navbar}>
      <div className={styles.brand}>
        <div className={styles.sidebarTrigger}>
          <button className={styles.iconBtn} aria-label="layout">
            <Icon
              icon={<LayoutDefault />}
              hoverIcon={<LayoutHover />}
              size={20}
            />
          </button>

          <aside className={styles.sidebar} aria-hidden="true">
            <div className={styles.sidebarInner}>
              <div className={styles.sidebarHeader}>
                <div className={styles.brandMini}>
                  <span>babel</span>
                  <Icon icon={<ChevronDown />} size={18} />
                </div>
                <div className={styles.headerActions}>
                  <Icon icon={<SettingsIcon />} size={18} />
                </div>
              </div>

              <BtnModes
                Svg={Ask}
                property1="default"
                className=""
                text={"Ask Insights"}
                brief={"For open-ended questions"}
              />
              <BtnModes
                Svg={Browse}
                property1="default"
                className=""
                text={"Topics"}
                brief={"For structured research"}
              />

              <div className={styles.sidebarLibrary}>
               <LibraryBar />
              </div>
              <LoggedUser />
            </div>
          </aside>
        </div>
        <span className={styles.brandText}>babel</span>
      </div>

      <div className={styles.center}>
        <div className={styles.breadcrumb}>
          <span className={styles.crumbMain}>{breadcrumbMain}</span>
          <span className={styles.crumbSep}> / </span>
          <span className={styles.crumbSub}>{breadcrumbSub}</span>
        </div>
      </div>

      <nav className={styles.navItems}>
        <button className={styles.ghost}>Share</button>
        <Icon icon={<MenuMore />} size={18} />
      </nav>
    </header>
  );
}
