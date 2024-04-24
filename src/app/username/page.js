"use client";
import React, { useEffect, useState } from "react";

function page() {
  const [data, setData] = useState("");
  async function logJSONData() {
    const response = await fetch("http://localhost:3000/username");
    const jsonData = await response.json();
    console.log(jsonData);
    setData(jsonData);
  }
  useEffect(() => {
    logJSONData();
  }, []);

  return <div></div>;
}

export default page;
