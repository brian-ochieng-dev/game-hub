import { Link } from "react-router-dom";
import { Button } from "globalStyles";
import { GameOverModal, StyledGameOver, Header } from "./GameOver.styled";

function GameOver({ restartGame }: { restartGame: Function }) {
  return (
    <GameOverModal>
      <StyledGameOver>
        <Header>Game Over</Header>
        <Button
          type="submit"
          onClick={() => (restartGame() ? restartGame() : null)}
        >
          Restart
        </Button>
        <Link to="/">
          <Button>Home</Button>
        </Link>
      </StyledGameOver>
    </GameOverModal>
  );
}

export default GameOver;
