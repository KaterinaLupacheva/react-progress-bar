import React, { useState, useEffect } from "react";
const useViewCounter = ( slug ) => {
  const [views, setViews] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/views/${slug}`)
      .then(res => res.json())
      .then(json => {
        setViews(json.views);
      });
  }, [slug]);
  return { views };
};

export default useViewCounter;
