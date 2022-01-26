import React from "react";
import type { NextPage } from "next";
import Template from "../components/templates/home/index";

const items: string[] = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

const Home: NextPage = () => {
  return <Template items={items} />;
};

export default Home;
