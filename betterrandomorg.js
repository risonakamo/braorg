document.head.insertAdjacentHTML("beforeend",`<link rel="stylesheet" href="${chrome.runtime.getURL("betterrandomorg.css")}">`);

var homepageGen=document.querySelector("#homepage-generator");

homepageGen.children[0].onload=()=>{
    homepageGen.children[0].contentDocument.head.insertAdjacentHTML("beforeend",
    `<link rel="stylesheet" href="${chrome.runtime.getURL("betterrandomorg2.css")}">`);

    // var mainElement=homepageGen.children[0].contentDocument
    //     .querySelector("#true-random-integer-generator");

    // mainElement.style.border="none";
    // mainElement.removeChild(mainElement.children[6]);
    // mainElement.removeChild(mainElement.children[4]);
    // mainElement.removeChild(mainElement.children[0]);
};
