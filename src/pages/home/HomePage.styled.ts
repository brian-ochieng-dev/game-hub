import styled from "styled-components";
import { Container } from "globalStyles";

export const StyledHome = styled(Container)`
  padding: 6rem 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  & > :nth-child(1) {
    background-image: linear-gradient(to top right, #ff512f, #f09819);
  }
  & > :nth-child(2) {
    background-image: linear-gradient(to top right, #08203e, #557c93);
  }
  & > :nth-child(3) {
    background-image: linear-gradient(to top right, #00b09b, #96c93d);
  }
  & > :nth-child(4) {
    background-image: linear-gradient(to top right, #e91fa8, #b9dfee);
  }
  & > :nth-child(5) {
    background-image: linear-gradient(to top right, #5b86e5, #36d1dc);
  }
  & > :nth-child(6) {
    background-image: linear-gradient(to top right, #f86594, #ffcaa6);
  }
  & > :nth-child(7) {
    background: linear-gradient(
      45deg,
      hsla(282, 36%, 25%, 1),
      hsla(310, 22%, 37%, 1)
    );
  }
`;

export const GameContainer = styled.div`
  height: 25rem;
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  position: relative;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: white;
  display: inline-block;
  max-width: min-content;
`;

export const InfoContainer = styled.div`
  border-radius: 10px;
  padding: 2rem;
  position: absolute;
  background: ${({ theme }) => theme.infoBackground};
`;
