import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import figlet from "figlet";

const rl = readline.createInterface({ input, output });

const plays = ["rock", "paper", "scissors"];

const cChoice = plays[Math.floor(Math.random() * plays.length)][0];

rl.question("Choose (r)ock, (p)aper, or (s)cissors \n", async (yourChoice) => {
  const { plays, winner } = playRPS(yourChoice[0], cChoice);
  console.log(plays);
  figlet.text(winner, (err, data) => {
    if (err) {
      console.log("something went wrong");
    }
    console.log(data);
  });

  rl.close();
});

const playRPS = (playerChoice, computerChoice) => {
  let game = {
    plays: "",
    winner: "",
  };
  if (playerChoice === "r") {
    if (computerChoice === "p") {
      game.plays = "Player chose rock and computer chose paper.";
      game.winner = "Computer wins!";
    } else if (computerChoice === "s") {
      game.plays = "Player chose rocks and computer chose scissors.";
      game.winner = "Player wins!";
    } else {
      game.winner = "It's a tie!";
    }
  } else if (playerChoice === "p") {
    if (computerChoice === "r") {
      game.plays = "Player chose paper and computer chose rock.";
      game.winner = "Player wins!";
    } else if (computerChoice === "s") {
      game.plays = "Player chose paper and computer chose scissors.";
      game.winner = "Computer wins!";
    } else {
      game.winner = "It's a tie!";
    }
  } else if (playerChoice === "s") {
    if (computerChoice === "p") {
      game.plays = "Player chose scissors and computer chose paper.";
      game.winner = "Player wins!";
    } else if (computerChoice === "r") {
      game.plays = "Player chose scissors and computer chose rock.";
      game.winner = "Computer wins!";
    } else {
      game.winner = "It's a tie!";
    }
  } else {
    game.plays = "Sorry, you made an invalid choice";
  }
  return game;
};
