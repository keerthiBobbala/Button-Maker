let bgColor = document.getElementById("bgColorInput");
let fontColor = document.getElementById("fontColorInput");
let fontSize = document.getElementById("fontSizeInput");
let fontWeight = document.getElementById("fontWeightInput");
let padding = document.getElementById("paddingInput");
let borderRadius = document.getElementById("borderRadiusInput");

function stylebutton() {
    document.getElementById("customButton").style.backgroundColor = bgColor.value;
    document.getElementById("customButton").style.color = fontColor.value;
    document.getElementById("customButton").style.fontSize = fontSize.value;
    document.getElementById("customButton").style.fontWeight = fontWeight.value;
    document.getElementById("customButton").style.padding = padding.value;
    document.getElementById("customButton").style.borderRadius = borderRadius.value;
}