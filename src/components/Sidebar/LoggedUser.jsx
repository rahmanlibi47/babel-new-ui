import React from "react";
import Icon from "../IconComponent";
import ChevronDown from "../../assets/icons/ChevronDown.svg?react";
import "./style.scss";
export const LoggedUser = () => {
  return (
    <div className="logged-user-main">
      {" "}
      <div className="div">
        {" "}
        <div className="div-2" />{" "}
        <div className="div-3">
          {" "}
          <div className="text-wrapper">libin@quicksand.co.in</div>{" "}
         <Icon icon={ <ChevronDown  />} />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
