var bus = new Vue();



function headerScrollShadow() {
    var scrollTop = window.pageYOffset;
    var header = document.getElementsByClassName('header');
    window.addEventListener('scroll', function() {
        scrollTop = window.pageYOffset;
        if (scrollTop >= 20) {
            header.classList.add('highlight');
        }
        if (scrollTop < 20) {
            header.classList.remove('highlight');
        }
    });
}

Vue.component('color-ul-5', {
    template: '#color-ul-5',
    props: ['text','color1','color2','color3','color4','color5'],
    methods: {
        changeColor: function(c){
            console.log(c)
            vm.hsl = c;
            bus.$emit('color',c);
        }
    }
});

Vue.component('color-ul-4', {
    template: '#color-ul-4',
    props: ['text','color1','color2','color3','color4'],
    methods: {
        changeColor: function(c){
            console.log(c)
            vm.hsl = c;
            bus.$emit('color',c);
        }
    }
});


var vm = new Vue({
    el : "#container",
    data:{
        nowNum: 0,
        h: 0,
        s: 0,
        l: 0,
        //a: 0,
        //hsla: null,
        hsl: null,
        rgb: null,
        hex: null,
        settext: null
    },
   
    methods: {
        headerScrollShadow: function() {
            var scrollTop = window.pageYOffset;
            //var header =document.getElementById("header");
            window.addEventListener('scroll', function() {
                scrollTop = window.pageYOffset;
                //console.log(scrollTop)
                if (scrollTop >= 20) {
                    document.getElementById("header").classList.add('highlight');
                    //console.log("hellooooo")
                }
                if (scrollTop < 20) {
                    //console.log("byeooo")
                    document.getElementById("header").classList.remove('highlight');
                }
            });
        },
        hslToRgb: function(color){
            const hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(color);
            var h = parseInt(hsl[1]) / 360;
            var s = parseInt(hsl[2]) / 100;
            var l = parseInt(hsl[3]) / 100;
            //console.log(h + " " + s + " " + l)
            var rgb=[];

            if(s==0){
                rgb=[Math.round(l*255),Math.round(l*255),Math.round(l*255)];
            }else{
                var q=l>=0.5?(l+s-l*s):(l*(1+s));
                var p=2*l-q;
                var tr=rgb[0]=h+1/3;
                var tg=rgb[1]=h;
                var tb=rgb[2]=h-1/3;
                for(var i=0; i<rgb.length;i++){
                    var tc=rgb[i];
                    //console.log(tc);
                    if(tc<0){
                        tc=tc+1;
                    }else if(tc>1){
                        tc=tc-1;
                    }
                    switch(true){
                        case (tc<(1/6)):
                            tc=p+(q-p)*6*tc;
                            break;
                        case ((1/6)<=tc && tc<0.5):
                            tc=q;
                            break;
                        case (0.5<=tc && tc<(2/3)):
                            tc=p+(q-p)*(4-6*tc);
                            break;
                        default:
                            tc=p;
                            break;
                    }
                    rgb[i]=Math.round(tc*255);
                }
            }


            //hex
            var strHex = "#";
            for (var i=0; i<rgb.length; i++) {
                var hex = Number(rgb[i]).toString(16);
                if (hex.length < 2) {
                    hex = '0' + hex;    
                }
                strHex += hex;
            }
            //console.log(strHex + " hex")

            //console.log(rgb);
            //
            const returnRgb = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] +")";
            this.rgb = returnRgb;
            this.hex = strHex;
            //return returnRgb;
        },
        getHVal: function(){
            console.log('滑动h')
            var a = (document.getElementsByClassName("h")[0]).value;
            this.h = a;
            //let hsla = "hsla(" + this.h + "," + this.s + "%"  + "," + this.l + "%" + "," + this.a + ")";
            //this.hsla = hsla;
            let hsl = "hsl(" + this.h + "," + this.s + "%"  + "," + this.l + "%)";
            this.hsl = hsl;
            this.hslToRgb(hsl);
            this.settext = hsl;
        },
        getSVal: function(){
            console.log('滑动s')
            var b = (document.getElementsByClassName("s")[0]).value;
            this.s = b;
            let hsl = "hsl(" + this.h + "," + this.s + "%"  + "," + this.l + "%)";
            this.hsl = hsl;
            this.hslToRgb(hsl);
            this.settext = hsl;
        },
        getLVal: function(){
            console.log('滑动l')
            var c = (document.getElementsByClassName("l")[0]).value;
            this.l = c;
            let hsl = "hsl(" + this.h + "," + this.s + "%"  + "," + this.l + "%)";
            this.hsl = hsl;
            this.hslToRgb(hsl);
            this.settext = hsl;
        },
    },
    created(){
        var that = this;
        that.headerScrollShadow();
        bus.$on('color',function(c){
            this.hsl = c;
            that.settext = c;
            const colorHsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(c);
            this.h = parseInt(colorHsl[1]) / 360;
            this.s = parseInt(colorHsl[2]) / 100;
            this.l = parseInt(colorHsl[3]) / 100;
            //console.log(hsl)
            this.hsl = c;
            that.hslToRgb(c);
        });
        
    }

})