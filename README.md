
# Real-time Character Counter

This project implements a simple real-time character counter using HTML, CSS, and JavaScript. It features a styled text area with a character limit and dynamically updates the count of entered and remaining characters as the user types.

## Features

- **Real-time Character Count:** Displays the total number of characters entered.
- **Remaining Characters:** Shows how many characters can still be entered.
- **Responsive Design:** The layout centers the counter on the page and adapts to various screen sizes.

## Usage

1. Clone this repository or download the code files.
2. Open the `index.html` file in any web browser to view and interact with the counter.

## Files

- `index.html`: Contains the structure and script for the counter.
- `style.css`: (Inline in `index.html`) Defines the styling of the counter.
- `script.js`: (Inline in `index.html`) Handles the real-time character counting functionality.

## How it Works

1. The text area has a `maxlength` attribute set to 50, restricting the user from entering more than 50 characters.
2. JavaScript listens for the `input` event on the text area and calculates:
   - The total characters entered (`currentLength`).
   - The remaining characters (`maxChars - currentLength`).
3. The values are displayed dynamically in the `Total Characters` and `Remaining` sections.

## Preview

Here's a screenshot of the character counter:

![Screenshot 2025-01-09 120208](https://github.com/user-attachments/assets/5fd8247d-abfc-4b41-8bbd-55c271b71010)



### Author

Developed by KARTHICK S.

---

Enjoy using the real-time character counter! 😊
