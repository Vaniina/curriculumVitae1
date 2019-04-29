import {person} from "./data.js";
import {updateText, updateHobbies, updateTimeList, updateAttribute} from "./helpers.js";

person.forEach((value, key) => {
    const selector = "#" + key;

    if (key === "experiences" || key === "formations") {
        updateTimeList(selector, value);
    } else if (key === "hobbies") {
        updateHobbies(selector, value);
    } else if (key === "phone") {
        updateText(selector, value);
        updateAttribute(selector, "href", "tel:" + value);
    } else if (key === "email") {
        updateText(selector, value);
        updateAttribute(selector, "href", "mailto:" + value);
    } else if (key === "image") {
        updateAttribute(".profile img", "src", value);
    } else {
        updateText(selector, value);
    }
});


