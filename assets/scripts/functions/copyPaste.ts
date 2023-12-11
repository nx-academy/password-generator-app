export const copyPaste = (): void => {
    const btnCopyPaste = document.querySelector(".btnCopyPaste");
    const messageCopied = document.querySelector(
        ".copied-message",
    ) as HTMLElement;
    const password = document.querySelector(
        ".password-result",
    ) as HTMLInputElement;

    if (btnCopyPaste && password) {
        btnCopyPaste.addEventListener("click", () => {
            navigator.clipboard.writeText(password.outerText);

            messageCopied.innerText = "Copied!";
            btnCopyPaste.classList.remove("text-mischka");
            btnCopyPaste.classList.add("text-mintGreen");

            setTimeout(() => {
                messageCopied.innerText = "";
                btnCopyPaste.classList.remove("text-mintGreen");
                btnCopyPaste.classList.add("text-mischka");
            }, 3000);
        });
    }
};
