"use client";
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
    router.push(`/search/sono/?query=${searchInput}`);
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
    </div>
  );
}

export default Home;
