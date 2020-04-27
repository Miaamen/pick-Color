var colorHsl = document.getElementsByClassName("copy-hsl")[0];
var colorRgb = document.getElementsByClassName("copy-rgb")[0];
var colorHex = document.getElementsByClassName("copy-hex")[0];

colorHsl.addEventListener("click",function(){
    console.log("hellomia")
    var pickColor = colorHsl.innerHTML;
    copyToClipboard(pickColor);
    colorHsl.innerHTML = "copied!"
    var time = 0;
    setInterval(() => {
		colorHsl.innerHTML = pickColor;
	},2000);
})

colorHex.addEventListener("click",function(){
    console.log("hellomia")
    var pickColor = colorHex.innerHTML;
    copyToClipboard(pickColor);
    colorHex.innerHTML = "copied!"
    var time = 0;
    setInterval(() => {
		colorHex.innerHTML = pickColor;
	},2000);
})

colorRgb.addEventListener("click",function(){
    console.log("hellomia")
    var pickColor = colorRgb.innerHTML;
    copyToClipboard(pickColor);
    colorRgb.innerHTML = "copied!"
    var time = 0;
    setInterval(() => {
		colorRgb.innerHTML = pickColor;
	},2000);
})

function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}