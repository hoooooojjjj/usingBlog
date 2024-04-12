"use client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import style from "./page.module.css";
import { useRouter } from "next/navigation";

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  const handleOnChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    router.replace(`/search/:id/?query=${searchInput}`);
  };
  return (
    <div className={style.container}>
      <form onSubmit={handleOnSubmit}>
        <input
          className={style.input}
          type="text"
          value={searchInput}
          onChange={handleOnChange}
          placeholder="검색어를 입력해주세요"
        />
      </form>
      {/* <BrowserRouter>
        <Routes>
          <Route
            path={`/search/:id`}
            element={<Search />}
          ></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default Home;
