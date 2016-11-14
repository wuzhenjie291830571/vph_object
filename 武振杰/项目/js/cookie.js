/*--------------     cookie的封装函数---------------------*/
function setCookie(name,value,date,path,domain,secure){
    var str = "";
    if(name ==""||value==""){

    }else{
        str+=encodeURIComponent(name)+"="+encodeURIComponent(value);
        if(date instanceof Date){
            str += ";expires="+date;
        }
        if(path){
            str += ";path="+path;
        }
        if(domain){
            str += ";domain="+domain;
        }
        if(secure){
            str += ";secure";
        }
    }
    document.cookie = str;
}

function getCookie(name){
    var str = document.cookie;
    var reg = /\s/ig;
    str = str.replace(reg,"");
    var arr = str.split(";");
    for(var i=0;i<arr.length;i++){
        var arr2= arr[i].split("=");
        if(arr2[0]==encodeURIComponent(name)){
            return decodeURIComponent(arr2[1]);
        }
    }
    return "";
}

function removeCookie(name){
    document.cookie = name +"=1"+new Date();
}