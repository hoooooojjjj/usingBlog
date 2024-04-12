"use client";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import { useState } from "react";

dayjs.extend(relativeTime);
dayjs.locale("ko");

function page() {
  // const date = dayjs();
  // console.log(date);

  const [todoInput, setTodoInput] = useState("");
  const [todo, setTodo] = useState([
    {
      content: "",
      date: "",
    },
  ]);

  const handleOnChange = (e) => {
    setTodoInput(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      content: todoInput,
      // date: dayjs(new Date()).format("YYYY년 MM월 DD일 HH:mm:ss"),
      date: dayjs(new Date()).fromNow(),
    };
    setTodo([...todo, newTodo]);
    setTodoInput("");
  };

  // const threeMonth = dayjs().set("month", 3).month();
  // console.log(threeMonth + "월"); // 출력 : 3월

  // const MulthreeYear = dayjs(new Date()).add(3, "year").format("YYYY년");
  // console.log(MulthreeYear); // 출력 : 2027년

  // const isBefore = dayjs(new Date()).add(3, "year").isBefore(dayjs(Date.now()));
  // console.log(isBefore); // 출력 : false

  // const isAfter = dayjs(new Date()).add(3, "year").isAfter(dayjs(Date.now()));
  // console.log(isAfter); // 출력 : true

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input type="text" value={todoInput} onChange={handleOnChange} />
        <button>추가</button>
      </form>
      {todo.map((todo, i) => (
        <div key={i}>
          {todo.content}
          <br />
          {todo.date}
        </div>
      ))}
    </div>
  );
}

export default page;
