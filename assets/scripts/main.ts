import { generatePassword } from "./functions/generatePassword.js";
import { copyPaste } from "./functions/copyPaste.js";
import { passwordStrength } from "./functions/passwordStrength.js";
import { displayRangeValue } from "./functions/displayRangeValue.js";

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
    const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(
        "input[type='checkbox']",
    );

    if (
        form &&
        passwordLenght &&
        passwordUppercaseInput &&
        passwordLowercaseInput &&
        passwordNumbersInput &&
        passwordSymbolsInput &&
        displayPassword //&&
        //Array.from(checkboxes).every((box) => box.checked === false)
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

            displayPassword.innerHTML = password;
        });

        form.addEventListener("submit", () => {
            const password = document.querySelector(
                ".password-result",
            ) as HTMLInputElement;

            passwordStrength(password.outerText);
        });

        form.addEventListener("change", () => {
            displayRangeValue();
        });
    }

    copyPaste();
};

handleGenerate();
