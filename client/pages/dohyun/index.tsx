import React, { useEffect } from "react";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";

function Dohyun() {
  const subscribe = useInfiniteScroll(() => console.log("Dd"), {
    rootMargin: "400px",
  });

  return (
    <ul>
      <li
        style={{
          width: "100px",
          height: "200px",
          background: "blue",
          marginBottom: "10px",
        }}
      />
      <li
        style={{
          width: "100px",
          height: "200px",
          background: "blue",
          marginBottom: "10px",
        }}
      />
      <li
        style={{
          width: "100px",
          height: "200px",
          background: "blue",
          marginBottom: "10px",
        }}
      />
      <li
        style={{
          width: "100px",
          height: "200px",
          background: "blue",
          marginBottom: "10px",
        }}
      />
      <li
        style={{
          width: "100px",
          height: "200px",
          background: "blue",
          marginBottom: "10px",
        }}
      />
      <li
        style={{
          width: "100px",
          height: "200px",
          background: "blue",
          marginBottom: "10px",
        }}
      />
      <li
        style={{
          width: "100px",
          height: "200px",
          background: "blue",
          marginBottom: "10px",
        }}
      />
      <li
        style={{
          width: "100px",
          height: "200px",
          background: "blue",
          marginBottom: "10px",
        }}
      />
      <li
        ref={subscribe}
        style={{
          width: "100px",
          height: "200px",
          background: "blue",
          marginBottom: "10px",
        }}
      />
    </ul>
  );
}

export default Dohyun;
