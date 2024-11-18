function numberGuessingGame() {
  console.log("Welcome to the Number Guessing Game!");
  console.log("I'm thinking of a number between 1 and 10.");

  // Generate a random number between 1 and 10
  const secretNumber = Math.floor(Math.random() * 10) + 1;
  let attempts = 0;
  const maxAttempts = 5;

  while (attempts < maxAttempts) {
    const guess = prompt(
      `Attempt ${attempts + 1}/${maxAttempts}: Enter your guess:`
    );

    // Check if the input is a valid number
    if (guess === null) {
      console.log("Game exited.");
      return; // Exit the game if the user cancels the prompt
    }

    const guessNumber = parseInt(guess, 10);
    attempts++;

    // Control structure to check the guess
    if (isNaN(guessNumber)) {
      console.log("Invalid input! Please enter a valid number.");
    } else if (guessNumber < 1 || guessNumber > 10) {
      console.log("Please guess a number between 1 and 10.");
    } else {
      switch (true) {
        case guessNumber < secretNumber:
          console.log("Too low! Try again.");
          break;
        case guessNumber > secretNumber:
          console.log("Too high! Try again.");
          break;
        case guessNumber === secretNumber:
          //   console.log(
          //     `Congratulations! You've guessed the number ${secretNumber} in ${attempts} attempts.`
          //   );
          alert(
            `Congratulations! You've guessed the number ${secretNumber} in ${attempts} attempts.`
          );
          return; // Exit the game on a correct guess
      }
    }
  }

  console.log(
    `Sorry, you've used all your attempts. The secret number was ${secretNumber}.`
  );
}

// Start the game
numberGuessingGame();
