export const generatePassword = (
    length: number,
    hasUpperCase: boolean,
    hasLowerCase: boolean,
    hasNumber: boolean,
    hasSymbols: boolean,
): string => {
    const LETTERS_LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
    const LETTERS_UPPERCASE = LETTERS_LOWERCASE.toUpperCase();
    const NUMBERS = "123456789";
    const SYMBOLS = ".*?#?!@$%^&*-";
    let letters = "";
    let result = "";

    if (hasUpperCase) letters += LETTERS_UPPERCASE;
    if (hasLowerCase) letters += LETTERS_LOWERCASE;
    if (hasNumber) letters += NUMBERS;
    if (hasSymbols) letters += SYMBOLS;

    const charactersLength = letters.length;

    for (let i = 0; i < length; i++) {
        result += letters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
};
