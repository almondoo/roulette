import styled from "styled-components";

const Wrapper = styled.div``;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  display: flex;
  margin: 0 10px;
`;

const ColorBox = styled.div<{ bgc: string }>`
  width: 30px;
  height: 20px;
  margin-right: 10px;
  background-color: ${(props) => props.bgc};
`;

const Text = styled.p``;

const Content = styled.div`
  margin: 20px auto;
  max-width: 400px;
  max-height: 400px;
  position: relative;
`;

const Arrow = styled.div`
  position: absolute;
  top: 185px;
  right: -15px;
  /* top: -15px;
  left: 50%; */
  /* transform: translateX(-50%); */
  z-index: 2;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 15px 40px 15px 0;
  border-color: transparent red transparent transparent;
  /* border-style: solid;
  border-width: 40px 15px 0 15px;
  border-color: red transparent transparent transparent; */
`;

const exportDefault = {
  Wrapper,
  List,
  ListItem,
  ColorBox,
  Text,
  Content,
  Arrow,
};

export default exportDefault;
