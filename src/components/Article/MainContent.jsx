import React from "react";
import "./style.scss";
export const MainContent = () => {
  return (
    <div className="article-container">
      {" "}
      <div className="article-header">
        {" "}
        <div className="article-image" />{" "}
        <div className="article-title">Education and Technology</div>{" "}
      </div>{" "}
      <p className="article-description">
        {" "}
        Technology is transforming finance in Southeast Asia, creating a dynamic
        landscape influenced by diverse cultures and varying access to financial
        services. Key challenges include enhancing digital literacy, expanding
        access to banking, and addressing regulatory hurdles. Innovative
        solutions, such as fintech platforms and mobile payment systems, are
        emerging to improve financial inclusion and empower communities across
        the region.{" "}
      </p>{" "}
    </div>
  );
};
