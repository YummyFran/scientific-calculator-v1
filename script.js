function shiftFn(Reign) {
    var shift = document.getElementById("shft") ;
    var arr = document.getElementsByTagName("input") ;
    
    
    if (Reign == 1) {
        shift.setAttribute("onclick", "shiftFn(0)") ;
        // shift.style.backgroundColor = "orange" ;
        arr[4].value = "!" ;
        arr[4].setAttribute("onclick", "insert('!')") ;
        arr[5].value = "nPr";
        arr[5].setAttribute("onclick", "nPr()");
        arr[19].value = "sin⁻¹" ;
        arr[19].setAttribute("onclick", "trigo1('sin')") ;
        arr[20].value = "cos⁻¹" ;
        arr[20].setAttribute("onclick", "trigo1('cos')") ;
        arr[21].value = "tan⁻¹" ;
        arr[21].setAttribute("onclick", "trigo1('tan')") ;
        // arr[10].innerHTML = "ln" ;
        // arr[10].setAttribute("onclick", "log(0)") ;
        arr[45].value = "\u0065" ;
        arr[45].setAttribute("onclick", "piOrE('e')") ;
        arr[32].setAttribute("onclick", "onOff(1)");
        arr[32].value = "Off";
    } else {
        shift.setAttribute("onclick", "shiftFn(1)") ;
        // shift.style.backgroundColor = "yellow" ;
        arr[4].value = "x⁻¹" ;
        arr[4].setAttribute("onclick", "neg()") ;
        arr[5].value = "nCr";
        arr[5].setAttribute("onclick", "nCr()");
        arr[19].value = "sin" ;
        arr[19].setAttribute("onclick", "trigo('sin')") ;
        arr[20].value = "cos" ;
        arr[20].setAttribute("onclick", "trigo('cos')") ;
        arr[21].value = "tan" ;
        arr[21].setAttribute("onclick", "trigo('tan')") ;
        // arr[10].innerHTML = "log" ;
        // arr[10].setAttribute("onclick", "log(1)") ;
        arr[45].value = "\u03C0" ;
        arr[45].setAttribute("onclick", "piOrE('pi')") ;
        arr[32].setAttribute("onclick", "clean()");
        arr[32].value = "AC"
    }
}
function alpha(casile) {
    var arr = document.getElementsByTagName("input");
    if(casile == 1) {
        arr[3].setAttribute("onclick", "alpha(0)");
        arr[16].value = "A";
        arr[16].setAttribute("onclick", "insert('A')");
        arr[17].value = "B";
        arr[17].setAttribute("onclick", "insert('B')");
        arr[18].value = "C";
        arr[18].setAttribute("onclick", "insert('C')");
        arr[19].value = "D";
        arr[19].setAttribute("onclick", "insert('D')");
        arr[20].value = "E";
        arr[20].setAttribute("onclick", "insert('E')");
        arr[21].value = "F";
        arr[21].setAttribute("onclick", "insert('F')");
        arr[25].value = "X";
        arr[25].setAttribute("onclick", "insert('X')");
        arr[26].value = "Y";
        arr[26].setAttribute("onclick", "insert('Y')");
        arr[27].value = "M";
        arr[27].setAttribute("onclick", "insert('M')");
    } else {
        arr[3].setAttribute("onclick", "alpha(1)");
        arr[16].value = "(-)";
        arr[16].setAttribute("onclick", "changeSign()");
        arr[17].value = "deg";
        arr[17].setAttribute("onclick", "deg()");
        arr[18].value = "hyp";
        arr[18].setAttribute("onclick", "hyp()");
        arr[19].value = "sin";
        arr[19].setAttribute("onclick", "trigo('sin')");
        arr[20].value = "cos";
        arr[20].setAttribute("onclick", "trigp('cos')");
        arr[21].value = "tan";
        arr[21].setAttribute("onclick", "trigo('tan')");
        arr[25].value = ")";
        arr[25].setAttribute("onclick", "insert('(')");
        arr[26].value = ",";
        arr[26].setAttribute("onclick", "insert(',')");
        arr[27].value = "M+";
        arr[27].setAttribute("onclick", "mem()");
    }
}
function insert(num) {
    document.form.text.value += num;
    document.getElementById("ctn").innerHTML += num;
    shiftFn(0);
}
function clean() {
    document.form.text.value = "";
    document.form.text2.value = "";
    document.getElementById("ctn").innerHTML = "";
    shiftFn(0);
}
function back() {
    var x = document.form.text2 ;
    var y = document.form.text;
    var ctn = document.getElementById('ctn');
    var z = document.getElementById("myAns") ;
    shiftFn(0);
    if (y.value.slice(-3) == "Ans") {
        ctn.innerHTML = (/[\d)IE]/.test(y.value.slice(-4, -3))) ? 
        ctn.innerHTML.slice(0, -(z.innerHTML.length + 3)) : ctn.innerHTML.slice(0, -(z.innerHTML.length)) ;
        y.value = y.value.slice(0, -3) ;
    } else if (y.value == "Error!") {
        ac() ;
    } else {
        switch (ctn.innerHTML.slice(-2)) {
            case "* ": // sin cos tan
            ctn.innerHTML = (/[\d)IE]/.test(y.value.slice(-5, -4))) ? 
            ctn.innerHTML.slice(0, -28) : ctn.innerHTML.slice(0, -25) ;
            y.value = y.value.slice(0, -4) ;
            break ;
            case "n(":
            case "s(": // asin acos atan
            ctn.innerHTML = (/[\d)IE]/.test(y.value.slice(-7, -6))) ? 
            ctn.innerHTML.slice(0, -29) : ctn.innerHTML.slice(0, -26) ;
            y.value = y.value.slice(0, -6) ;
            break ;
            case "0(": // log
            ctn.innerHTML = (/[\d)IE]/.test(y.value.slice(-5, -4))) ? 
            ctn.innerHTML.slice(0, -14) : ctn.innerHTML.slice(0, -11) ;
            y.value = y.value.slice(0, -4) ;
            break ;
            case "g(": // ln
            ctn.innerHTML = (/[\d)IE]/.test(y.value.slice(-4, -3))) ? 
            ctn.innerHTML.slice(0, -12) : ctn.innerHTML.slice(0, -9) ;
            y.value = y.value.slice(0, -3) ;
            break ;
            case "t(": // sqrt
            ctn.innerHTML = (/[\d)IE]/.test(y.value.slice(-6, -5))) ? 
            ctn.innerHTML.slice(0, -13) : ctn.innerHTML.slice(0, -10) ;
            y.value = y.value.slice(0, -5) ;
            break ;
            case "PI": // pi
            ctn.innerHTML = (/[\d)IE]/.test(y.value.slice(-2, -1))) ? 
            ctn.innerHTML.slice(0, -10) : ctn.innerHTML.slice(0, -7) ;
            y.value = y.value.slice(0, -1) ;
            break ;
            case ".E": // e
            ctn.innerHTML = (/[\d)IE]/.test(y.value.slice(-2, -1))) ? 
            ctn.innerHTML.slice(0, -9) : ctn.innerHTML.slice(0, -6) ;
            y.value = y.value.slice(0, -1) ;
            break ;
            default:
            ctn.innerHTML = ctn.innerHTML.slice(0, -1) ;
            y.value = y.value.slice(0, -1) ;
        } ;
    }
}
// function back() {
//     var exp = document.form.text.value;
    
//     document.form.text.value = exp.substring(0, exp.length - 1);
// }
function sqrt() {
    var x = document.form.text2 ;
    var y = document.form.text;
    var ctn = document.getElementById('ctn');
    y.value += "sqrt(" ;
    ctn.innerHTML += (/[\d)IE]/.test(ctn.innerHTML.slice(-1))) ? 
    " * Math.sqrt(" : "Math.sqrt(" ;
    shiftFn(0);
}
function polar() {
    var x = document.form.text2 ;
    var y = document.form.text;
    var ctn = document.getElementById('ctn');
    y.value += "Pol(";
    ctn.innerHTML += (/[\d)IE]/.test(ctn.innerHTML.slice(-1))) ? 
    " * pol(" : "pol(" ;
}
function nCr() {
    var x = document.form.text2 ;
    var y = document.form.text;
    var ctn = document.getElementById('ctn');
    y.value += "nCr(";
    ctn.innerHTML += (/[\d)IE]/.test(ctn.innerHTML.slice(-1))) ? 
    " * combi(" : "combi(" ;
}
function nPr() {
    var x = document.form.text2 ;
    var y = document.form.text;
    var ctn = document.getElementById('ctn');
    y.value += "nPr(";
    ctn.innerHTML += (/[\d)IE]/.test(ctn.innerHTML.slice(-1))) ? 
    " * permu(" : "permu(" ;
}
function factorial(yummy) {
    if (Number.isInteger(yummy)) {
        if (yummy < 2) return 1 ;
        return yummy * factorial(yummy - 1) ;
    }
}
function piOrE(Fran) {
    var x = document.form.text2;
    var y = document.form.text;
    var ctn = document.getElementById('ctn');
    if (Fran == "pi") {
        y.value += "\u03C0" ;
        ctn.innerHTML += (/[\d)IE]/.test(ctn.innerHTML.slice(-1))) ? 
        " * Math.PI" : "Math.PI" ;
        shiftFn(0);
    } else {
        y.value += "\u0065" ;
        ctn.innerHTML += (/[\d)IE]/.test(ctn.innerHTML.slice(-1))) ? 
        " * Math.E" : "Math.E" ;
        shiftFn(0);
    }
}
function signX(Palomares) {
    var x = document.form.text2;
    var y = document.form.text;
    var ctn = document.getElementById('ctn');
    if (Palomares == "mult") {
        y.value += "\u00D7" ;
        ctn.innerHTML += "*" ;
        shiftFn(0);
    } else {
        y.value += "\u00F7" ;
        ctn.innerHTML += "/"
        shiftFn(0);
    }
}
function changeSign() {
     var x = document.form.text2;
    var y = document.form.text;
    var ctn = document.getElementById('ctn');
    var z = document.getElementById("myAns");
    
    if(y.value.substring(0, 1) == "-") {
        y.value = y.value.substring(1, y.value.length);
        ctn.innerHTML = ctn.innerHTML.substring(1, ctn.innerHTML.length);
        
        shiftFn(0);
    }
    else {
    y.value = "-" + y.value;
    ctn.innerHTML = y.value;
        shiftFn(0);            
    }
}
function ans() {
    var x = document.form.text2;
    var y = document.form.text;
    var ctn = document.getElementById('ctn');
    var z = document.getElementById("myAns") ;
    y.value += "Ans" ;
    ctn.innerHTML += (/[\d)IE]/.test(ctn.innerHTML.slice(-1))) ? 
    " * " + z.innerHTML : z.innerHTML ;
    shiftFn(0);
}
function par() {
    var x = document.form.text2;
    var y = document.form.text;
    var ctn = document.getElementById('ctn');
    y.value += "(" ;
    ctn.innerHTML += (/[\d)IE]/.test(ctn.innerHTML.slice(-1))) ? 
    " * (" : "(" ;
    shiftFn(0);
}
function square() {
    var x = document.form.text2;
    var y = document.form.text;
    var ctn = document.getElementById('ctn');
    y.value += "²" ;
    ctn.innerHTML += (/[\d)IE]/.test(ctn.innerHTML.slice(-1))) ? 
    "^2" : "^2" ;
    shiftFn(0);
}
function cube() {
    var x = document.form.text2;
    var y = document.form.text;
    var ctn = document.getElementById('ctn');
    y.value += "³" ;
    ctn.innerHTML += (/[\d)IE]/.test(ctn.innerHTML.slice(-1))) ? 
    "^3" : "^3" ;
    shiftFn(0);
}
function neg() {
    var x = document.form.text2;
    var y = document.form.text;
    var ctn = document.getElementById('ctn');
    y.value += "⁻¹" ;
    ctn.innerHTML += (/[\d)IE]/.test(ctn.innerHTML.slice(-1))) ? 
    "^-1" : "^-1" ;
    shiftFn(0);
}
function trigo(ondoy) {
    
    var x = document.form.text2;
    var y = document.form.text;
    var ctn = document.getElementById('ctn');
    y.value += ondoy + "(" ;
    ctn.innerHTML+= (/[\d)IE]/.test(ctn.innerHTML.slice(-1))) ? 
    " * Math." + ondoy + "(Math.PI / 180 * " : "Math." + ondoy + "(Math.PI / 180 * " ;
    
    shiftFn(0);
}
function trigo1(valentin) {
    var x = document.form.text2;
    var y = document.form.text
    var ctn = document.getElementById('ctn');
    y.value += valentin + "\u207B\u00B9("
    ctn.innerHTML += (/[\d)IE]/.test(ctn.innerHTML.slice(-1))) ? 
    " * 180 / Math.PI * Math.a" + valentin + "(" : "180 / Math.PI * Math.a" + valentin + "(" ;
    shiftFn(0);
}
function log(ambotUy) {
    var x = document.form.text2;
    var y = document.form.text;
    var ctn = document.getElementById('ctn');
    if (ambotUy == 1) {
        y.value += "log(" ;
        ctn.innerHTML += (/[\d)IE]/.test(ctn.innerHTML.slice(-1))) ? 
        " * Math.log10(" : "Math.log10(" ;
        shiftFn(0);
    } else {
        y.value += "ln(" ;
        ctn.innerHTML += (/[\d)IE]/.test(ctn.innerHTML.slice(-1))) ? 
        " * Math.log(" : "Math.log(" ;
        shiftFn(0);
    }
}
function onOff(reign) {
    var btn = document.getElementsByTagName("input");
    var shift = document.getElementById("shft") ;
    if (reign == 1) {
        shiftFn(0);
        shift.setAttribute("onclick", "shiftFn(1)") ;
        btn[0].setAttribute("disabled", true);   
        btn[1].setAttribute("disabled", true);   
        btn[2].setAttribute("disabled", true);   
        btn[3].setAttribute("disabled", true);   
        btn[4].setAttribute("disabled", true);   
        btn[5].setAttribute("disabled", true);   
        btn[6].setAttribute("disabled", true);   
        btn[7].setAttribute("disabled", true);   
        btn[8].setAttribute("disabled", true);   
        btn[9].setAttribute("disabled", true);   
        btn[10].setAttribute("disabled", true);   
        btn[11].setAttribute("disabled", true);   
        btn[12].setAttribute("disabled", true);   
        btn[13].setAttribute("disabled", true);   
        btn[14].setAttribute("disabled", true);   
        btn[15].setAttribute("disabled", true);   
        btn[16].setAttribute("disabled", true);   
        btn[17].setAttribute("disabled", true);   
        btn[18].setAttribute("disabled", true);   
        btn[19].setAttribute("disabled", true);   
        btn[20].setAttribute("disabled", true);   
        btn[21].setAttribute("disabled", true);   
        btn[22].setAttribute("disabled", true);   
        btn[23].setAttribute("disabled", true);   
        btn[24].setAttribute("disabled", true);   
        btn[25].setAttribute("disabled", true);   
        btn[26].setAttribute("disabled", true);   
        btn[27].setAttribute("disabled", true);   
        btn[28].setAttribute("disabled", true);   
        btn[29].setAttribute("disabled", true);   
        btn[30].setAttribute("disabled", true);   
        btn[31].setAttribute("disabled", true);
        btn[32].setAttribute("onclick", "onOff(0)");
        btn[33].setAttribute("disabled", true);   
        btn[34].setAttribute("disabled", true);   
        btn[35].setAttribute("disabled", true);   
        btn[36].setAttribute("disabled", true);      
        btn[37].setAttribute("disabled", true);   
        btn[38].setAttribute("disabled", true);   
        btn[39].setAttribute("disabled", true);   
        btn[40].setAttribute("disabled", true);   
        btn[41].setAttribute("disabled", true);   
        btn[42].setAttribute("disabled", true);   
        btn[43].setAttribute("disabled", true);   
        btn[44].setAttribute("disabled", true);   
        btn[45].setAttribute("disabled", true);   
        btn[46].setAttribute("disabled", true);   
        btn[47].setAttribute("disabled", true); 
    } else {
        btn[2].removeAttribute("disabled");   
        btn[3].removeAttribute("disabled");   
        btn[4].removeAttribute("disabled");   
        btn[5].removeAttribute("disabled");   
        btn[6].removeAttribute("disabled");   
        btn[7].removeAttribute("disabled");   
        btn[8].removeAttribute("disabled");   
        btn[9].removeAttribute("disabled");   
        btn[10].removeAttribute("disabled");   
        btn[11].removeAttribute("disabled");   
        btn[12].removeAttribute("disabled");   
        btn[13].removeAttribute("disabled");   
        btn[14].removeAttribute("disabled");   
        btn[15].removeAttribute("disabled");   
        btn[16].removeAttribute("disabled");   
        btn[17].removeAttribute("disabled");   
        btn[18].removeAttribute("disabled");   
        btn[19].removeAttribute("disabled");   
        btn[20].removeAttribute("disabled");   
        btn[21].removeAttribute("disabled");   
        btn[22].removeAttribute("disabled");   
        btn[23].removeAttribute("disabled");   
        btn[24].removeAttribute("disabled");   
        btn[25].removeAttribute("disabled");   
        btn[26].removeAttribute("disabled");   
        btn[27].removeAttribute("disabled");   
        btn[28].removeAttribute("disabled");   
        btn[29].removeAttribute("disabled");   
        btn[30].removeAttribute("disabled");   
        btn[31].removeAttribute("disabled");
        btn[32].setAttribute("onclick", "clean()")
        btn[33].removeAttribute("disabled");   
        btn[34].removeAttribute("disabled");   
        btn[35].removeAttribute("disabled");   
        btn[36].removeAttribute("disabled");      
        btn[37].removeAttribute("disabled");   
        btn[38].removeAttribute("disabled");   
        btn[39].removeAttribute("disabled");   
        btn[40].removeAttribute("disabled");   
        btn[41].removeAttribute("disabled");   
        btn[42].removeAttribute("disabled");   
        btn[43].removeAttribute("disabled");   
        btn[44].removeAttribute("disabled");   
        btn[45].removeAttribute("disabled");   
        btn[46].removeAttribute("disabled");   
        btn[47].removeAttribute("disabled");   
    }
}
function equal() {
    
    var x = document.form.text2;
    var y = document.form.text;
    var z = document.getElementById("myAns");
    var ctn = document.getElementById('ctn');
    shiftFn(0);
    
     for (var i = 0; i < y.value.split("(").length - y.value.split(")").length; i++) {
        ctn.innerHTML += ")" ;
        y.value += ")";
    }
    
    if (ctn.innerHTML != "") {
        x.value = ctn.innerHTML = z.innerHTML = eval(ctn.innerHTML
        .replace(/(\d+\.?\d*)\!/g, "factorial($1)")
        .replace(/(\(?[^(]*\)?)\^(\(?.*\)?)/, "Math.pow($1, $2)")
        ) ;
    }
    if (!isFinite(x.value)) x.value = "Error!" ;
}
function product_Range(a,b) {
  var prd = a,i = a;
 
  while (i++< b) {
    prd*=i;
  }
  return prd;   
}
function combi(n,r) {
     if (n==r) {
    return 1;
  } else {
    r=(r < n-r) ? n-r : r;
    return product_Range(r+1, n)/product_Range(1,n-r);
  }
}
function permu(n,r) {
    var N = n;
    var Z = n;
    var Y = r;
    while (r>1) {
        r--;
        n--;
        N = N * n;
    }
    return N;
}
function pol(x, y){
    distance = Math.sqrt(x*x + y*y);
    radians = Math.atan2(y,x); 
    polarCoor = { distance:distance, radians:radians };
    return polarCoor;
}  