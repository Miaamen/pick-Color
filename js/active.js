var colorLi = document.getElementsByClassName("color-lis");
for(let i = 0; i < colorLi.length; i ++){
    colorLi[i].addEventListener("click",function(){
        for(let j = 0; j < colorLi.length; j ++){
            colorLi[j].classList.remove("active");
        }
        colorLi[i].classList.add("active");
    })
}