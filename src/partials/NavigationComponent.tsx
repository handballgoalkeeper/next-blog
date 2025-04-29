"use client";

import React from "react";
import {navigationConfig, NavigationItem} from "@/configs/navigation.config";

const Navigation = (): React.JSX.Element => {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
              <a className="navbar-brand" href="#">Blog</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      {navigationConfig.map((navItem: NavigationItem, index: number) => (
                      <li className="nav-item" key={index}>
                          <a className="nav-link" aria-current="page" href={navItem.path}>
                              <span className={`bi ${navItem.icon} pe-1 fs-5`}></span>
                              {navItem.displayName}
                          </a>
                      </li>
                      ))}
                  </ul>
              </div>
          </div>
      </nav>

  );
};

export default Navigation;