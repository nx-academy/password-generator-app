import { generatePassword } from "./functions/generatePassword.js";
import { copyPaste } from "./functions/copyPaste.js";
import { passwordStrength } from "./functions/passwordStrength.js";
import { displayRangeValue } from "./functions/displayRangeValue.js";
import { scoringStrength } from "./functions/scoringStrength.js";

const handleGenerate = () => {
    const form = document.querySelector(".form");
    const passwordLenght = document.querySelector(
        "#password-length",
    ) as HTMLInputElement;
    const passwordUppercaseInput = document.querySelector(
        "#password-uppercase",
    ) as HTMLInputElement;
    const passwordLowercaseInput = document.querySelector(
        "#password-lowercase",
    ) as HTMLInputElement;
    const passwordNumbersInput = document.querySelector(
        "#password-numbers",
    ) as HTMLInputElement;
    const passwordSymbolsInput = document.querySelector(
        "#password-symbols",
    ) as HTMLInputElement;
    const displayPassword = document.querySelector(".password-result");

    if (
        form &&
        passwordLenght &&
        passwordUppercaseInput &&
        passwordLowercaseInput &&
        passwordNumbersInput &&
        passwordSymbolsInput &&
        displayPassword
    ) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const password = generatePassword(
                Number(passwordLenght.value),
                passwordUppercaseInput.checked,
                passwordLowercaseInput.checked,
                passwordNumbersInput.checked,
                passwordSymbolsInput.checked,
            );

            if (password) {
                displayPassword.innerHTML = password;
                const score = scoringStrength(password);
                passwordStrength(score);
            }
        });

        form.addEventListener("change", () => {
            displayRangeValue();
        });
    }

    copyPaste();
};

handleGenerate();
