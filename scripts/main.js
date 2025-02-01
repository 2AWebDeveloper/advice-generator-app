"use strict";

const adviceID = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");
const adviceBtn = document.querySelector(".advice-btn");

const getAdvice = async function() {
    try {
        adviceBtn.setAttribute("disabled", true);
        const response = await fetch("https://api.adviceslip.com/advice");
        if (!response.ok) return;
        const {slip: data} = await response.json();
        adviceID.innerHTML = `ADVICE #${data.id}`;
        adviceText.innerHTML = `“${data.advice}”`;
    } catch(error) {
        adviceID.innerHTML = "ERROR";
        adviceText.innerHTML = "Sorry! Failed to fetch, Please try again later ...";
    } finally {
        adviceBtn.removeAttribute("disabled");
    }
};
adviceBtn.addEventListener("click", getAdvice);
