import PropTypes from "prop-types";
import React from "react";
import { ImgFrame } from "./ImgFrame";
import "./style.scss";
export const CardsFrameworks = ({ property1, className }) => {
  return (
    <div className={`cards-frameworks ${className}`}>
      {" "}
      <ImgFrame
        className="framework-189-cards"
        image="image.png"
        imageClassName="frame-instance-img"
      />{" "}
      <div className="document-info-cards">
        {" "}
        <div className="document-header-cards">
          {" "}
          <div className="document-name-cards">framework title</div>{" "}
          <div className="document-size-cards">(31kb)</div>{" "}
        </div>{" "}
        <p className="project-name-cards">
          {" "}
          Short description of framework. For eg. A detailed guide for 3 day
          discovery workshop with community stakeholders. Includes time-bound
          activities and active research areas to look for.{" "}
        </p>{" "}
        <div className="text-wrapper-cards">from Project Name</div>{" "}
      </div>{" "}
    </div>
  );
};
CardsFrameworks.propTypes = { property1: PropTypes.oneOf(["normal"]) };
