# 🪨📄✂️ Rock–Paper–Scissors Game

A simple and interactive **Rock–Paper–Scissors** web game built with vanilla **JavaScript**, **HTML**, and **CSS**.  
This project allows users to play against the computer, keep score, and restart the game at any time.

---

## 🎮 Features

- ✅ Interactive button-based gameplay  
- 🤖 Randomized computer choices  
- 🏆 Real-time score updates  
- 🔁 Restart option to reset the game  
- 💬 Winner message display  

---

## 🖼️ Game Preview

Below is a sample preview of the game interface:

![Game Screenshot](https://github.com/hemant-kushwaha/rock_paper_scissors_GAME/blob/main/game_RPS.png)  

---

## 🧠 Game Logic Overview

Here’s how the logic works inside the script:

1. **Player Choice:**  
   - When you click a button (Rock, Paper, or Scissors), your selection is displayed in the player cell.

2. **Computer Choice:**  
   - The computer randomly selects between Rock (0), Paper (1), or Scissors (2).

3. **Winner Determination:**  
   - The winner is decided using standard Rock–Paper–Scissors rules:
     ```
     Rock beats Scissors
     Paper beats Rock
     Scissors beats Paper
     ```

4. **Score Update:**  
   - If you win, your score increases by `+1`.

5. **Restart Option:**  
   - Clicking the **Restart** button clears the board, resets messages, and removes images.

---

## ⚙️ Setup Instructions

1. Clone this repository or download the project folder:
   ```bash
   git clone https://github.com/hemant-kushwaha/rock_paper_scissors_GAME.git
