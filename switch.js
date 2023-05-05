// License: MIT
// Author: Jhey
// Source: https://codepen.io/jh3y/pen/LYgjpYZ

const BUTTON = document.querySelector("button");

const TOGGLE = () => {
    const IS_PRESSED = BUTTON.matches("[aria-pressed=true]");
    document.body.setAttribute("data-dark-mode", IS_PRESSED ? false : true);
    BUTTON.setAttribute("aria-pressed", IS_PRESSED ? false : true);
};

BUTTON.addEventListener("click", TOGGLE);
