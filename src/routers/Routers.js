import React from "react";
import { Route, Routes } from "react-router-dom";
import Todo from "../pages/Todo/Todo";
import RegisterForm from "../pages/login/RegisterForm";
import LoginHookForm from "../pages/login/LoginHookForm";
import { URL } from "../constants/router";
import TestGrid from "./../pages/TestGrid";
import {
  CompanyPage,
  EmployeePage,
  WorkplacePage,
} from "../pages/amaranth10/Index.js";

const Routers = () => {
  return (
    <Routes>
      <Route path={URL.home} element={<LoginHookForm />} />
      <Route path={URL.main} element={<Todo />} />
      <Route path={URL.register} element={<RegisterForm />} />
      <Route path={URL.test} element={<TestGrid />} />
      <Route path={URL.company} element={<CompanyPage />} />
      <Route path={URL.employee} element={<EmployeePage />} />
      <Route path={URL.workplace} element={<WorkplacePage />} />
    </Routes>
  );
};

export default Routers;