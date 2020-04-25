var color = document.getElementsByClassName("copy-hsl")[0];
color.addEventListener("click",function(){
    console.log("hellomia")
    var pickColor = color.innerHTML;
    copyToClipboard(pickColor);
    color.innerHTML = "copied!"
    var time = 0;
    setInterval(() => {
		color.innerHTML = pickColor;
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