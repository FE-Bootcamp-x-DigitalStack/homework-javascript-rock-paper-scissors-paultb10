import React, { useState } from "react";
import { choices, determineWinner, getRandomChoice, Choice } from "./gameLogic";
import "./index.css";

const App: React.FC = () => {
  const [userChoice, setUserChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<string>("");

  const handleClick = (choice: Choice) => {
    const computer = getRandomChoice();
    setUserChoice(choice);
    setComputerChoice(computer);
    setResult(determineWinner(choice, computer));
  };

  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
        <h1 className="text-3xl font-bold mb-8">Rock Paper Scissors Lizard Spock</h1>
        <div className="flex justify-center space-x-4 mb-8">
          {choices.map((choice) => (
              <button
                  key={choice.name}
                  onClick={() => handleClick(choice)}
                  className="text-2xl p-4 rounded bg-blue-500 text-white hover:bg-blue-700"
                  aria-label={`Choose ${choice.name}`}
              >
                <i className={choice.icon}></i> {choice.name}
              </button>
          ))}
        </div>
        {userChoice && computerChoice && (
            <div className="bg-white p-6 rounded shadow-md w-80">
              <p className="text-lg">
                You chose: <i className={userChoice.icon}></i> {userChoice.name}
              </p>
              <p className="text-lg">
                Computer chose: <i className={computerChoice.icon}></i> {computerChoice.name}
              </p>
              <h2 className="text-2xl font-semibold mt-4">{result}</h2>
            </div>
        )}
      </div>
  );
};

export default App;
