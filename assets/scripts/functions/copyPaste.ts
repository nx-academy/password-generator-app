export const copyPaste = () => {
    const btnCopyPaste = document.querySelector(".btnCopyPaste");
    const messageCopied = document.querySelector(
        ".copied-message"
    ) as HTMLElement;
    const password = document.querySelector(
        ".password-result"
    ) as HTMLInputElement;

    if (btnCopyPaste && password) {
        btnCopyPaste.addEventListener("click", () => {
            navigator.clipboard.writeText(password.outerText);

            messageCopied.innerText = "Copied!";

            setTimeout(() => {
                messageCopied.innerText = "";
            }, 3000);
        });
    }
};
