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
  width: 400px;
  height: 400px;
  position: relative;
  @media (max-width: 420px) {
    width: 300px;
    height: 300px;
  }
`;

const CanvasWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  border-radius: 50%;
`;

const Canvas = styled.canvas``;

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
  @media (max-width: 420px) {
    top: 135px;
  }
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
  CanvasWrap,
  Canvas,
  Arrow,
  ButtonGroup,
  Button,
  HitItem,
};

export default exportDefault;
