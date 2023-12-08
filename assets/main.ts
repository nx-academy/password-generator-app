import { generatePassword } from "./functions/generatePassword.js";

const handleGenerate = () => {
    const form = document.querySelector(".form");
    const passwordUppercaseInput = document.querySelector("#password-uppercase") as HTMLInputElement
    const passwordLowercaseInput = document.querySelector("#password-lowercase") as HTMLInputElement
    const passwordNumbersInput = document.querySelector("#password-numbers") as HTMLInputElement

    if (form && passwordUppercaseInput) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            console.log(passwordUppercaseInput.checked)
            console.log(passwordLowercaseInput.checked)
            console.log(passwordNumbersInput.checked)

            const password = generatePassword(10, true, false);

        });
    }
};

handleGenerate();
