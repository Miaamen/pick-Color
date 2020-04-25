Vue.component('color-ul-5', {
    template: '#color-ul-5'
});

Vue.component('color-ul-4', {
    template: '#color-ul-4'
});

new Vue({
    el : "#container",
    data:{
        nowNum: 0,
        h: 0,
        s: 0,
        l: 0,
        a: 0,
        hsla: null,
        showText: "Pink is here!"
    },
   
    methods: {
        getHVal: function(){
            var a = (document.getElementsByClassName("h")[0]).value;
            this.h = a
            let hsla = "hsla(" + this.h + "," + this.s + "%"  + "," + this.l + "%" + "," + this.a + ")";
            this.hsla = hsla;
        },
        getSVal: function(){
            var b = (document.getElementsByClassName("s")[0]).value;
            this.s = b
            let hsla = "hsla(" + this.h + "," + this.s + "%"  + "," + this.l + "%" + "," + this.a + ")";
            this.hsla = hsla;
            
        },
        getLVal: function(){
            var c = (document.getElementsByClassName("l")[0]).value;
            this.l = c
            let hsla = "hsla(" + this.h + "," + this.s + "%"  + "," + this.l + "%" + "," + this.a + ")";
            this.hsla = hsla;
        },
        getAVal: function(){
            var d = (document.getElementsByClassName("a")[0]).value;
            this.a = d
            let hsla = "hsla(" + this.h + "," + this.s + "%"  + "," + this.l + "%" + "," + this.a + ")";
            this.hsla = hsla;
        }
    }
})