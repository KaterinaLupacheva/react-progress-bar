import { useState, useEffect } from "react";
const useViewCounter = (slug) => {
  const [views, setViews] = useState(null);

  useEffect(() => {
    // Don't count views on localhost
    if (process.env.NODE_ENV !== "production") {
      return;
    }

    fetch(`https://my-projects-dashboard.vercel.app/api/views/${slug}`, {
      mode: "no-cors",
    })
      .then((res) => res.json())
      .then((json) => {
        setViews(json.totalViews);
      })
      .catch((err) => console.error(err.message));
  }, [slug]);
  return { views };
};

export default useViewCounter;
