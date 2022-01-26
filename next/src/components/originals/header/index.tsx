import { NextPage } from "next";
import Style from "./style";

const Header: NextPage = (): JSX.Element => {
  return (
    <Style.Head>
      <Style.Title>ルーレット</Style.Title>
    </Style.Head>
  );
};

export default Header;
