const topl = document.getElementById("topleft")
const topr = document.getElementById("topright")
const botl = document.getElementById("bottomleft")
const botr = document.getElementById("bottomright")

const shape = document.getElementById("shape");

function updateShape() {
    shape.style.borderTopLeftRadius = topl.value + "px";
    shape.style.borderTopRightRadius = topr.value + "px";
    shape.style.borderBottomLeftRadius = botl.value + "px";
    shape.style.borderBottomRightRadius = botr.value + "px";
};

topl.addEventListener('input', updateShape);
topr.addEventListener('input', updateShape);
botl.addEventListener('input', updateShape);
botr.addEventListener('input', updateShape);

function copyValuesToClipboard() {
    const valuesToCopy = `border-radius: ${topl.value}px ${topr.value}px ${botr.value}px ${botl.value}px`;
    
    const textarea = document.createElement("textarea");
    textarea.value = valuesToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
    document.body.removeChild(textarea);

    alert("Values have been copied to the clipboard!");
}

const copyButton = document.getElementById("copyButton");
copyButton.addEventListener('click', copyValuesToClipboard);