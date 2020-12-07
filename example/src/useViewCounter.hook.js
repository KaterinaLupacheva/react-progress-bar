import { useState, useEffect } from "react";
const useViewCounter = slug => {
  const [views, setViews] = useState(null);

  useEffect(() => {
    // Don't count views on localhost
    if (process.env.NODE_ENV !== "production") {
      return;
    }

    fetch(`http://localhost:3000/api/views/${slug}`, { mode: "no-cors" })
      .then(res => res.json())
      .then(json => {
        setViews(json.views);
      })
      .catch(err => console.error(err));
  }, [slug]);
  return { views };
};

export default useViewCounter;
