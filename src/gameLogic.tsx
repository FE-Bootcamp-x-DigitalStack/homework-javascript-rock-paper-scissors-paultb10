export type Choice = {
    name: "rock" | "paper" | "scissors" | "lizard" | "spock";
    icon: string;
};

export const choices: Choice[] = [
    { name: "rock", icon: "far fa-hand-rock" },
    { name: "paper", icon: "far fa-hand-paper" },
    { name: "scissors", icon: "far fa-hand-scissors" },
    { name: "lizard", icon: "far fa-hand-lizard" },
    { name: "spock", icon: "far fa-hand-spock" },
];

export const gameRules: { [key: string]: string[] } = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"],
};


export function getRandomChoice(): Choice {
    return choices[Math.floor(Math.random() * choices.length)];
}


export function determineWinner(userChoice: Choice, computerChoice: Choice): string {
    if (userChoice.name === computerChoice.name) return "It's a tie!";
    return gameRules[userChoice.name].includes(computerChoice.name)
        ? "You win!"
        : "Computer wins!";
}
