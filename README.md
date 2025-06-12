** Phase 1 Code Challenge: JavaScript Web Tools & Calculators**

This repository contains a collection of simple, interactive web-based tools developed as part of my "Phase 1" JavaScript learning journey. Each project focuses on fundamental JavaScript concepts, user interaction via the DOM (Document Object Model), and practical problem-solving.

---

**Project Overview**

These tools showcase basic front-end development, where JavaScript interacts directly with HTML to take user input and display dynamic results on the webpage.

### 1. ☕ Chai Ingredients Calculator

* **Description:** A simple calculator that helps you prepare Kenyan chai! Enter the number of cups you want, and it will calculate the required amounts of water, milk, tea leaves, and sugar based on a standard recipe.

* **Files:**
   chai.html: The user interface.
  chai.js: Contains the JavaScript logic for calculations and DOM manipulation.

**2. Mobile Money Transaction Fee Estimator**

* **Description:** This is a tool that estimates the transaction fee for sending money via a mobile money service. It incorporates a realistic fee structure with a minimum fee (Ksh 10) and a maximum fee (Ksh 70), ensuring the final charge is always within these bounds.
* **Key Functionality:** Handles numerical input, implements conditional logic (`if-else if-else`) for fee tiers, and updates the webpage with the calculated fee and total amount.
* **Files:**
  fee.html: The user interface.
  fee.js: Contains the JavaScript logic for fee calculation and DOM manipulation.

### 3.  Boda Fare Estimator

* **Description:** A simple tool to estimate the fare for a boda-boda ride based on the distance in kilometers. It demonstrates how to capture user input and display calculated results on a web page.
* **Key Functionality:** Takes numerical input for distance, applies a simple fare calculation, and presents the estimated cost to the user on the webpage.
* **Files:**
  boda.html: The user interface.
  boda.js: Contains the JavaScript logic for fare calculation and DOM manipulation.

---

## Technologies Used

* **HTML:** For structuring the web pages and creating input forms and display areas.
* **JavaScript ** For all the dynamic behavior, calculations, and interaction with the DOM (Document Object Model) to update webpage content.
* **DOM Manipulation:** Key to all projects, ensuring that outputs are displayed directly on the webpage for an interactive user experience, rather than just in the browser console.

---

**setup**

To run and interact with these projects locally:

1.  **Clone the Repository:**
    Open your terminal or command prompt and run:
    ```bash
    git clone [https://github.com/FrancisKarani14/code-challenge-1.git](https://github.com/FrancisKarani14/code-challenge-1.git)
    cd code-challenge-1
    ```
   

2.  **Navigate to a Project Folder:**
    Each project is in its own subfolder. For example:
    * `cd chaiCalculator`
    * `cd mobileMoneyEstimator`
    * `cd bodaFareEstimator`

3.  **Open the `index.html` file:**
    Once inside a project folder, simply open the individual html file _(fee.html`/`boda.html`/`chai.html)_ in your preferred web browser. You can usually do this by double-clicking the file or by right-clicking and choosing "Open with Browser".

4.  **Interact with the Tool:**
    * Enter the requested information into the input fields.
    * Click the "Calculate" or "Estimate" button.
    * The results will appear directly on the webpage.

---

author: Francis Karani
Licence: MIT Licence
