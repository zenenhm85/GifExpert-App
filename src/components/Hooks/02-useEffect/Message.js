import React, { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const { x, y } = coords;
  useEffect(() => {
    const mouseMove = (e) => {
      const coordsNews = { x: e.x, y: e.y };
      setCoords(coordsNews);
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return (
    <div>
      <h3>You are a genial!!</h3>
      <p>
        X= {x}; Y= {y}
      </p>
    </div>
  );
};
