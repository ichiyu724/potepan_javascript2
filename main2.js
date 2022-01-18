/* global $*/

//ボタンを作る
//数字ボタンをクリックしたら、その値をinputに表示する
//演算子ボタンをクリックしたら、その値をinputに表示する。ただし1回のみ
//ACをクリックしたら、inputの値がゼロになる
//=をクリックしたら、inputに計算結果を表示する


let result = document.getElementById("result");
let point = document.getElementById("point");
let number = document.getElementsByClassName("number").value;
let pointFlag = false;
//ACボタン
function reset() {
    result.value = 0;
    if(point.disabled ==　true) {
        point.disabled = false;
    }
    
};

//計算結果を表示
function equal() {
    result.value = eval(result.value);
    if(point.disabled ==　true) {
        point.disabled = false;
    }
}

//数値を入力
function clickButton(btn) {
    if (result.value === "0" || result.value === "00") {
        result.value = btn.value;
    } else { 
        result.value += btn.value;
    }
}



//演算子が一番右の時に、入力した演算子を上書きする
let operator = document.getElementsByClassName("operator");
function operate(btn) {
    if(result.value.slice(-1) === "+" || result.value.slice(-1) === "-"|| result.value.slice(-1) === "*" || result.value.slice(-1) === "/") {
        let func = result.value.slice(0,-1)
        result.value = func + btn.value;
    } else {
        result.value += btn.value;
    }
    if(point.disabled ==　true) {
        point.disabled = false;
    }
}

//小数点が２回押せてしまう
//0.1などの表示にしたい= "0." + btn.value ?
//小数点を一度入力したら、２回目以降は処理をストップする

//小数点の制御

function clickPoint(btn) {
    pointFlag = true
    if (pointFlag == true) {
        point.disabled = true;
    }
    if (result.value === "0" + ".") {
        result.innerHTML = "0.";
    } else {
        if(result.value.slice(-1) === ".") {
        let p = result.value.slice(0,-1);
        result.value = p + btn.value;
        } else {
        result.value += btn.value;
        }
    }
}
