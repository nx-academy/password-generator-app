/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.html"],
    theme: {
        extend: {
            colors: {
                balticSea: "#24232C",
                topaz: "#817D92",
                mischka: "#E6E5EA",
                balticSeaDarker: "#18171F",
                mintGreen: "#A4FFAF",
                carnation: "#F64A4A",
                coral: "#FB7C58",
                creamCan: "#F8CD65",
            },
            lineHeight: {
                body: "23px",
                headingM: "31px",
                headingL: "43px",
            },
            fontSize: {
                body: "18px",
                headingM: "24px",
                headingL: "32px",
            },
            fontFamily: {
                sans: ["jetbrainMono"],
            },
        },
    },
    plugins: [],
};
