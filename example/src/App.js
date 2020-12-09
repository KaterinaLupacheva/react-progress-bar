import React from "react";
import useViewCounter from "./useViewCounter.hook";
import DemoApp from "./DemoApp";

const App = () => {
  const getSlug = () => {
    let slug = window.location.pathname;
    if (slug.charAt(0) === "/") {
      slug = slug.substring(1);
    }
    return slug;
  };
  useViewCounter(getSlug());

  return (
    <div className="App">
      <DemoApp />
    </div>
  );
};

export default App;
