import { generatePassword } from "./functions/generatePassword.js";

const handleGenerate = () => {
    const form = document.querySelector(".form");
    const passwordUppercaseInput = document.querySelector(
        "#password-uppercase"
    ) as HTMLInputElement;
    const passwordLowercaseInput = document.querySelector(
        "#password-lowercase"
    ) as HTMLInputElement;
    const passwordNumbersInput = document.querySelector(
        "#password-numbers"
    ) as HTMLInputElement;
    const passwordSymbolsInput = document.querySelector(
        "#password-symbols"
    ) as HTMLInputElement;

    if (
        form &&
        passwordUppercaseInput &&
        passwordLowercaseInput &&
        passwordNumbersInput &&
        passwordSymbolsInput
    ) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const password = generatePassword(20, true, true, true);
            
            console.log(password);
        });
    }
};

handleGenerate();
