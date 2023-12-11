export const displayRangeValue = ():void => {
    const value = document.querySelector(".range-value");
    const rangeValue = document.querySelector(
        "input[type='range']",
    ) as HTMLInputElement;

    if (value && rangeValue) value.innerHTML = rangeValue.value;
};
