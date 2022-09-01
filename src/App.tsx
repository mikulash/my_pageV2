import React, { lazy, Suspense } from "react";
import Header from "./components/elements/Header";
import Loading from "./components/elements/Loading";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path={"/"}>
            <Route index element={<div>HOmePAGE </div>} />
            <Route path={"login"} element={<div>About </div>} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
