import PropTypes from "prop-types";
import React from "react";
import "./style.scss";
import Icon from "../IconComponent";
export const BtnModes = ({ Svg, property1, className, text, brief }) => {
  return (
    <div className={`btn-modes ${property1} ${className}`}>
      {" "}
      <div className="circle-plus">
        {" "}
        <Icon icon={<Svg />} size={20} />
      </div>{" "}
      <div className="frame">
        {" "}
        <div className="text-wrapper">{text}</div>{" "}
        <div className="div">{brief}</div>{" "}
      </div>{" "}
    </div>
  );
};
BtnModes.propTypes = { property1: PropTypes.oneOf(["hover", "default"]) };
