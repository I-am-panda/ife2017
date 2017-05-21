/**
 * Created by wanghan on 2017/3/14.
 */
    var btn=document.getElementById("button");
    btn.onclick=function(){
        var input=document.getElementById("aqi-input");
        var display=document.getElementById("aqi-display");
        display.innerHTML=input.value;
    }
