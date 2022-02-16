import styled from "styled-components";

const Wrapper = styled.div`
  margin: 40px auto;
  max-width: 400px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 400px;
  border: 1px solid #000;
  padding: 5px;
`;

const Button = styled.button`
  display: block;
  margin: 5px 0 0 auto;
  padding: 5px 10px;
  border: 1px solid #000;
`;

const exportDefault = {
  Wrapper,
  TextArea,
  Button,
};

export default exportDefault;
