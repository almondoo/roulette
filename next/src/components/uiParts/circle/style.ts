import styled from "styled-components";

const Wrapper = styled.div``;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const ListItem = styled.li`
  display: flex;
  margin: 5px 10px;
`;

const ColorBox = styled.div<{ bgc: string }>`
  width: 30px;
  height: 20px;
  margin-right: 10px;
  background-color: ${(props) => props.bgc};
`;

const Text = styled.p``;

const Content = styled.div`
  margin: 0 auto 40px;
  max-width: 400px;
  max-height: 400px;
  position: relative;
`;

const Arrow = styled.div`
  position: absolute;
  top: 185px;
  right: -15px;
  z-index: 2;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 15px 40px 15px 0;
  border-color: transparent red transparent transparent;
`;

const ButtonGroup = styled.div`
  width: 100%;
  text-align: center;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: 1px solid #000;
  margin-bottom: 20px;
`;

const HitItem = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const exportDefault = {
  Wrapper,
  List,
  ListItem,
  ColorBox,
  Text,
  Content,
  Arrow,
  ButtonGroup,
  Button,
  HitItem,
};

export default exportDefault;
