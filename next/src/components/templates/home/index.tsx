import Style from "./style";
import Circle from "../../uiParts/circle";

type Props = {
  items: string[];
};

const Home = ({ items }: Props): JSX.Element => {
  return (
    <Style.Wrapper>
      <Style.Content>
        <Circle items={items}></Circle>
      </Style.Content>
    </Style.Wrapper>
  );
};

export default Home;
