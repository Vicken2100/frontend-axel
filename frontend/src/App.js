import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, startTransition } from "react";


const Redirect = lazy(() => {
  return new Promise((resolve) => {
    startTransition(() => {
      resolve(import("./page/redirect"));
    });
  });
});

const Searching = lazy(() => {
  return new Promise((resolve) => {
    startTransition(() => {
      resolve(import("./page/Searching"));
    });
  });
});

const HomePage = lazy(() => {
  return new Promise((resolve) => {
    startTransition(() => {
      resolve(import("./page/HomePage"));
    });
  });
});

const Selected = lazy(() => {
  return new Promise((resolve) => {
    startTransition(() => {
      resolve(import("./page/Selected"));
    });
  });
});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />                                                      {/* selesai */}
        <Route path="/Searching" element={<Searching />} />
        <Route path="/Selected" element={<Selected />} />
        <Route path="*" element={<Redirect />}/>                                                    {/* selesai */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
