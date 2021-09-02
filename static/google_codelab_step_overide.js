var steps = document.getElementsByTagName("google-codelab-step");

var innerBeforeIntruction = document.querySelectorAll(".instructions")[0];
var innerBefore = steps[0].querySelectorAll(".instructions .inner")[0];

var innerNewInstruction = document.createElement("div");
innerNewInstruction.className = "instructions about-card";

var innerTitle = document.createElement("div");
innerTitle.className = "inner inner-title";
innerTitle.innerHTML = `
        <h1>Introduction to TFX CLI</h1>
        `;
innerNewInstruction.append(innerTitle);

var innerAuthor = document.createElement("div");
innerAuthor.className = "inner inner-author";
innerAuthor.innerHTML = `
        <span>by Chansung Park</span>
        `;
innerNewInstruction.append(innerAuthor);

var innerHorizontalLine = document.createElement("div");
innerHorizontalLine.innerHTML = `
        <hr/>
        `;

steps[0].insertBefore(innerNewInstruction, innerBeforeIntruction);
steps[0].insertBefore(innerBeforeIntruction, innerHorizontalLine);
