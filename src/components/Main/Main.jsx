import React from "react";
import Header from "../Header/Header";
import Add from "../Add/Add";
import AllCompletedUncompleted from "../AllCompletedUncompleted/AllCompletedUncompleted";
import Configuration from "../Configuration/Configuration";
import "../Main/Main.scss";

const Main = () => {
  return (
    <div className="site-wrapper">
      <div className="container">
        <main className="content">
          <Header />
          <nav className="navbar">
            <ul className="filter-list">
              <Add />
              <AllCompletedUncompleted />
              <Configuration />
            </ul>
          </nav>
        </main>
      </div>
    </div>
  );
};

export default Main;
