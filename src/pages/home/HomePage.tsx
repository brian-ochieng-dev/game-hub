import gamesInfo from "data/GameInfo.json";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { BsInfoLg } from "react-icons/bs";
import {
  StyledHome,
  GameContainer,
  ButtonContainer,
  Title,
  PlayLink,
} from "./HomePage.styled";

function HomePage() {
  const [infoClicked, setInfoClicked] = useState(false);

  const handleClick = () => {
    setInfoClicked(!infoClicked);
  };

  return (
    <StyledHome>
      {gamesInfo.map((game) => (
        <GameContainer>
          <Title>{game.name}</Title>

          <ButtonContainer>
            <PlayLink to={game.linkTo}>
              <FaPlay />
            </PlayLink>

            <BsInfoLg onClick={handleClick} />
          </ButtonContainer>
        </GameContainer>
      ))}
    </StyledHome>
  );
}

export default HomePage;
