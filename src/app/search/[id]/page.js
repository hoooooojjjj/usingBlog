"use client";

import React from "react";
import style from "../../page.module.css";

function Search({ searchParams, params }) {
  console.log(params);

  return (
    <div className={style.container}>
      <p className={style.p}>검색어 : {searchParams.query}</p>
    </div>
  );
}

export default Search;
