"use client";
import Link from "next/link";
import style from "./page.module.css";
import { useRouter } from "next/navigation";

function Home() {
  const router = useRouter();
  const onClick = () => {
    router.push("/detail");
  };
  return (
    <div className={style.container}>
      <div onClickCapture={onClick} className={style.post}>
        <Link className={style.link} href={"/search"}>
          프로필 페이지로 가기
        </Link>
      </div>
    </div>
  );
}

export default Home;
