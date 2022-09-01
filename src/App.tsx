import React, { lazy, Suspense } from "react";
import Header from "./components/elements/Header";
import Loading from "./components/elements/Loading";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/elements/Footer";
import HomePage from "./components/pages/HomePage";
import AboutMe from "./components/pages/AboutMe";
import Projects from "./components/pages/Projects";
import Resume from "./components/pages/Resume";

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path={"/"}>
            <Route index element={<HomePage />} />
            <Route path={"about"} element={<AboutMe />} />
            <Route path={"projects"} element={<Projects />} />
            <Route path={"resume"} element={<Resume />} />
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
