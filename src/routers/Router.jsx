import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { History } from "../pages/History";
import { Points } from "../pages/Points";
import { NotFound } from "../components/notification/NotFound";
import React from "react";

export const Router  = () => {
  return (
    <Routes>
      <Route exact path="/rewards-store-andrea-lopez">
        <Home />
      </Route>
      <Route path="/rewards-store-andrea-lopez/history">
        <History />
      </Route>
      <Route path="/rewards-store-andrea-lopez/points">
        <Points/>
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Routes>
  );
};
