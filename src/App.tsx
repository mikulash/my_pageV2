import React, { lazy, Suspense } from "react";
import Header from "./components/elements/Header";
import Loading from "./components/elements/Loading";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/elements/Footer";
import NotFoundPage from "./components/pages/NotFoundPage";
const HomePage = lazy(() => import("./components/pages/HomePage"));
const AboutMe = lazy(() => import("./components/pages/AboutMe"));
const Projects = lazy(() => import("./components/pages/Projects"));
const Resume = lazy(() => import("./components/pages/Resume"));

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
            <Route path={"*"} element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
