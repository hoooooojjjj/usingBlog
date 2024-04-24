"use client";
import "./styles.css";

function Home() {
  return (
    <div className="container">
      <form action={"/username"} method="post">
        <input type="text"></input>
      </form>
    </div>
  );
}

export default Home;
