import gamesInfo from "data/GameInfo.json";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaPlay } from "react-icons/fa";
// import { BsInfoLg } from "react-icons/bs";
import {
  StyledHome,
  GameContainer,
  Title,
  // InfoContainer,
} from "./HomePage.styled";

// interface PropTypes {
//   name: string;
//   linkTo: string;
//   howToPlay: string;
//   id: number;
// }

function HomePage() {
  // const [infoClicked, setInfoClicked] = useState(false);

  // const handleClick = () => {
  //   setInfoClicked(!infoClicked);
  // };

  return (
    <StyledHome>
      {gamesInfo.map((game) => (
        <GameContainer>
          <Title>{game.name}</Title>
        </GameContainer>
      ))}
    </StyledHome>
  );
}

export default HomePage;
