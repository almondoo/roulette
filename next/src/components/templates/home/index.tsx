import React, { useState } from "react";
import Style from "./style";
import Circle from "../../uiParts/circle";
import RouletteItem from "../../originals/rouletteItem";

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

const Home = (): React.JSX.Element => {
  const [item, setItem] = useState<string[]>(items);
  return (
    <Style.Wrapper>
      <Style.Content>
        <Circle items={item} />
      </Style.Content>
      <RouletteItem handleSetItem={setItem} />
    </Style.Wrapper>
  );
};

export default Home;
