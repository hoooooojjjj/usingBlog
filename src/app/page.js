"use client";
import { useState } from "react";
import "./styles.css";
import { faker } from "@faker-js/faker";
import Post from "./_component/Post";

function Home() {
  // const [userInfo, setUserInfo] = useState({
  //   user1: {
  //     name: faker.person.fullName(),
  //     phoneNumber: faker.phone.number(),
  //     userId: faker.string.uuid(),
  //     email: faker.internet.email(),
  //     password: faker.internet.password(),
  //   },
  //   user2: {
  //     name: faker.person.fullName(),
  //     phoneNumber: faker.phone.number(),
  //     userId: faker.string.uuid(),
  //     email: faker.internet.email(),
  //     password: faker.internet.password(),
  //   },
  // });

  // console.log(faker.date.birthdate());
  // console.log(faker.date.birthdate());
  // console.log(faker.date.birthdate());

  // console.log(faker.location.country());
  // console.log(faker.location.country());
  // console.log(faker.location.country());

  // console.log(faker.lorem.text());
  // console.log(faker.lorem.text());
  // console.log(faker.lorem.text());

  console.log(faker.number.int());
  console.log(faker.number.int());
  console.log(faker.number.int());

  return (
    <div className="container">
      <div className="postWrap">
        {/* <Post image={faker.image.urlLoremFlickr()} />
        <Post image={faker.image.urlLoremFlickr()} />
        <Post image={faker.image.urlLoremFlickr()} />
        <Post image={faker.image.urlLoremFlickr()} />
        <Post image={faker.image.urlLoremFlickr()} />
        <Post image={faker.image.urlLoremFlickr()} />
        <Post image={faker.image.urlLoremFlickr()} />
        <Post image={faker.image.urlLoremFlickr()} />
        <Post image={faker.image.urlLoremFlickr()} /> */}
      </div>
    </div>
  );
}

export default Home;
