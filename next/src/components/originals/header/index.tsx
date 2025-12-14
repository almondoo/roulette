import React from "react";
import { NextPage } from "next";
import Style from "./style";

const Header: NextPage = (): React.JSX.Element => {
  return (
    <Style.Head>
      <Style.Title>ルーレット</Style.Title>
    </Style.Head>
  );
};

export default Header;
