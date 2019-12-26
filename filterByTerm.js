"use strict";
const link1 = {
    description: "Typescript is for all js devs",
    id: 1,
    url: "https://github.com/amabirbd",
    language: "en"
};
function filterByTerm(input, searchTerm) {
    if (!searchTerm)
        throw Error("searchTerm cannot be empty");
    if (!input.length)
        throw Error("input cannot be empty");
    const regex = new RegExp(searchTerm, "i");
    return input.filter(function (arrayElement) {
        return arrayElement.url.match(regex);
    });
}
filterByTerm([{ url: "string1" }, { url: "string2" }, { url: "string3" }], "java");
