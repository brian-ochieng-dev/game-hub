import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v1 as key } from "uuid";
import { Container } from "globalStyles";
import { Button, Cell, Heading, Table } from "./TicTacToe.styled";
import Pattern from "./constants";

function TicTacToe() {
  const [board, setBoard] = useState<Array<string>>(Array(9).fill(""));
  const [player, setPlayer] = useState<string>("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  const handleClick = (index: number) => {
    setBoard(
      board.map((val, idx) => {
        if (idx === index && val === "") {
          return player;
        }
        return val;
      }),
    );
  };

  const checkWin = () => {
    Pattern.forEach((currentPattern: number[]) => {
      const firstPlayer = board[currentPattern[0]];
      if (firstPlayer === "") return;

      let foundWinningPattern = true;
      currentPattern.forEach((idx: number) => {
        if (board[idx] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });
      if (foundWinningPattern) {
        setResult({ winner: player, state: "won" });
      }
    });
  };

  const checkMoves = () => {
    let filled = true;
    board.forEach((cell) => {
      if (cell === "") {
        filled = false;
      }
    });
    if (filled) {
      setResult({ winner: "No one", state: "tie" });
    }
  };

  const restartGame = () => {
    setBoard(Array(9).fill(""));
    setPlayer(player === "X" ? "O" : "X");
    setResult({ winner: "none", state: "none" });
  };

  useEffect(() => {
    checkWin();
    checkMoves();
    setPlayer(player === "X" ? "O" : "X");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board]);

  return (
    <Container>
      <Table>
        {result.state === "none" &&
          board.map((value, index) => {
            return (
              <Cell key={key()} onClick={() => handleClick(index)}>
                {value}
              </Cell>
            );
          })}

        {result.state === "won" && (
          <Heading>Player {result.winner} Won!</Heading>
        )}

        {result.state !== "none" && (
          <>
            <Button type="submit" onClick={restartGame}>
              Restart
            </Button>
            <Link to="/">
              <Button>Home</Button>
            </Link>
          </>
        )}
      </Table>
    </Container>
  );
}

export default TicTacToe;
