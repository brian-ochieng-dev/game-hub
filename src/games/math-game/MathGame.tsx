import { useState, useEffect, ChangeEvent } from "react";
import {
  MathGameContainer,
  NumContainer,
  SymbolContainer,
  Input,
} from "./MathGame.styled";
import { emptyGameData, symbols, difficulty } from "./constants";

interface GameDataTypes {
  number1: string;
  number2: string;
  number3: string;
  symbol1: string;
  symbol2: string;
  answer: number;
}

function MathGame() {
  const [gameData, setGameData] = useState<GameDataTypes>(emptyGameData);
  const [gameDifficulty, setGameDifficulty] = useState(difficulty);
  const [userGuess, setUserGuess] = useState("");
  const [count, setCount] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [valid, setValid] = useState(false);

  const randInt = (limit: number) => {
    return Math.floor(Math.random() * limit);
  };

  const addProblem = () => {
    return setGameData(() => ({
      ...gameData,
      // set numbers
      number1: String(randInt(gameDifficulty.maxNumber) + 1),
      number2: String(randInt(gameDifficulty.maxNumber) + 1),
      number3:
        difficulty.level > 2
          ? String(randInt(gameDifficulty.maxNumber) + 1)
          : "",
      // set symbols
      symbol1: symbols[randInt(gameDifficulty.level >= 2 ? 4 : 2)],
      symbol2: gameDifficulty.level > 2 ? symbols[randInt(4)] : "",
    }));
  };

  const symbolConverter = (symbol: string) => {
    if (symbol === "*") {
      return "×";
    }
    if (symbol === "/") {
      return "÷";
    }
    return symbol;
  };

  const calculation = () => {
    setGameData((p) => ({
      ...p,
      // eslint-disable-next-line no-eval
      answer: eval(
        `${p.number1}${p.symbol1}${p.number2}${p.symbol2}${p.number3}`,
      ),
    }));
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setUserGuess(event.target.value);
  };

  const checkIfGameOver = () => {
    if (Number(userGuess) !== gameData.answer) {
      setGameOver(true);
    } else {
      setCount(count + 1);
    }
  };

  const handleClick = () => {
    checkIfGameOver();
    setUserGuess("");

    // change difficulty of the game
    if (count <= 5 && gameDifficulty.maxNumber < 100) {
      setGameDifficulty((p) => ({ ...p, maxNumber: p.maxNumber * 1.1 }));
    } else if (count > 5 && gameDifficulty.maxNumber < 500) {
      setGameDifficulty((p) => ({ ...p, maxNumber: p.maxNumber * 1.2 }));
    }
    if (count > 8) {
      setGameDifficulty((p) => ({ ...p, level: p.level + 1 }));
    }
  };

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  useEffect(() => {
    setValid(false);
    addProblem();
    calculation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  useEffect(() => {
    if (Number.isInteger(gameData.answer)) {
      setValid(true);
    } else {
      addProblem();
      calculation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameData.answer]);

  return (
    <MathGameContainer>
      {!gameOver && (
        <>
          {valid && (
            <>
              <NumContainer>{gameData.number1}</NumContainer>
              <SymbolContainer>
                {symbolConverter(gameData.symbol1)}
              </SymbolContainer>
              <NumContainer>{gameData.number2}</NumContainer>
              <SymbolContainer>
                {symbolConverter(gameData.symbol2)}
              </SymbolContainer>
              <NumContainer>{gameData.number3}</NumContainer>
            </>
          )}
          <>
            <Input
              value={userGuess}
              type="text"
              placeholder="..."
              onChange={(event) => handleInput(event)}
              onKeyDown={handleKeyDown}
            />

            <button type="submit" onClick={handleClick}>
              check
            </button>
          </>
        </>
      )}
      <>
        <NumContainer>{gameData.answer}</NumContainer>
        <NumContainer>{userGuess}</NumContainer>
      </>
    </MathGameContainer>
  );
}

export default MathGame;
