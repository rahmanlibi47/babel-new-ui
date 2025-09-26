import PropTypes from "prop-types";
import React from "react";
import image from "./image.jpg"
import "./style.scss";

export const ImgFrame = ({ className, imageClassName }) => {
  return (
    <div className={`frame-cards ${className}`}>
      {" "}
      <img className={`image-cards ${imageClassName}`} alt="Image" src={image} />{" "}
    </div>
  );
};
ImgFrame.propTypes = { image: PropTypes.string };
