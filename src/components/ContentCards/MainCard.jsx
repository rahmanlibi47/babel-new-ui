import React from "react";
import { Tags } from "./Tags";
import divider from "./divider.svg";
import "./style.scss";
import Icon from "../IconComponent";
import RresourcesIcon from "../../assets/icons/resources.svg?react";
import GlobeIcon from "../../assets/icons/globe.svg?react";
import avatarImg from "../Sidebar/profile.jpg";

export const CardsProjects = () => {
  return (
    <div className="cards-projects">
      <div className="project">
        <div className="projectTop">
          <div className="content">
            <p className="title">
              Enhancing Safety Training Through Storytelling and Gameplay
            </p>
            <p className="description">
              SEEDS, with support from the Honeywell Foundation, expanded its
              disaster preparedness training for Indian schoolchildren to
              address everyday safety challenges.
            </p>
          </div>
          <div className="avatars">
            <img className="avatar" src={avatarImg} alt="avatar" />
            <img className="avatar avatar--alt" src={avatarImg} alt="avatar" />
          </div>
        </div>
        <img className="divider" alt="Divider" src={divider} />
        <div className="info">
          <div className="tags-2">
            <Tags className="tag" text="2018" />
            <Tags className="tag" text="Technology" />
            <Tags className="tag" text="Education" />
          </div>
          <div className="div-2">
            <Icon className="resources-icon" icon={<RresourcesIcon />} />{" "}
            <div className="text-wrapper">3 Resources</div>
          </div>
          <div className="div-2">
            <Icon className="instance-node" icon={<GlobeIcon />} />{" "}
            <div className="text-wrapper">India, Indonesia</div>
          </div>
        </div>
      </div>
    </div>
  );
};
