$(function(){
    const stringArray = $(".header-contacts").text().trim().split(" ");
    let fontSizeHtml = $("html").css("font-size");

    stringArray[2] = stringArray[2].split("").reverse().join("");
    stringArray.splice(3,1);
    fontSizeHtml = fontSizeHtml.slice(0,2);

    $(".header-contacts").html(`
        ${stringArray[0]}
        <span style = "font-size: ${fontSizeHtml/2}px; font-weight: bold;">
            ${stringArray[1]}
        </span>
        ${stringArray[2]}<br/>
        <span style = "display: block; margin-top: 10px;">
            ${stringArray.slice(3).join(" ")}
        </span>
    `);
});