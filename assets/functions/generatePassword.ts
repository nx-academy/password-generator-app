export const generatePassword = (length: number): string => {
    const LETTERS = "abcdefghijklmnopqrstuvwxyz";
    const charactersLength = LETTERS.length;
    let result = "";

    for (let i = 0; i < length; i++) {
        result += LETTERS.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
};
