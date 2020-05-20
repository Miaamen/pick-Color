var colorHsl = document.getElementsByClassName("copy-hsl")[0];
var colorRgb = document.getElementsByClassName("copy-rgb")[0];
var colorHex = document.getElementsByClassName("copy-hex")[0];

colorHsl.addEventListener("click", debounce(sayDebounce))

colorHex.addEventListener("click", debounce(sayDebounce))

colorRgb.addEventListener("click", debounce(sayDebounce))

function debounce(fn) {
  // 4、创建一个标记用来存放定时器的返回值
  let timeout = null;
  return function() {
    // 5、每次当用户点击/输入的时候，把前一个定时器清除
    clearTimeout(timeout);   //clearTimeout() 方法可取消由 setTimeout() 方法设置的 timeout
    // 6、然后创建一个新的 setTimeout，
    // 这样就能保证点击按钮后的 interval 间隔内
    // 如果用户还点击了的话，就不会执行 fn 函数
    //再点击就是重新计时
    timeout = setTimeout(() => {
      fn.call(this, arguments);
    }, 300);
  };
}

function sayDebounce(){
  console.log("hellomia")
  var pickColor = this.innerHTML;
  copyToClipboard(pickColor);
  this.innerHTML = "copied!"
  var time = 0;
  setInterval(() => {
    this.innerHTML = pickColor;
  },2000);
}

function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}