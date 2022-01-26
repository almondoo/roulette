import styled from "styled-components";

const Head = styled.header`
  width: 100%;
  height: 60px;
  text-align: center;
  line-height: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Title = styled.h1`
  font-size: 26px;
`;

const exportDefault = {
  Head,
  Title,
};

export default exportDefault;
