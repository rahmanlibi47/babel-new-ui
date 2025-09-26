import React from "react";
import { Resources } from "./Resources";
import "./style.scss";
import Icon from "../IconComponent";
import resourcesIcon from "../../assets/icons/resources.svg?react";


export const ResourcesInfo = () => {
  return (
    <div className="resources-info">
      {" "}
      <Icon className="resources-icon" icon={resourcesIcon}/>{" "}
      <div className="label">3 Resources</div>{" "}
    </div>
  );
};


