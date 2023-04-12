var btn = document.getElementById('submit');
btn.addEventListener('click', func);

function func() {
var number = document.getElementById('number').value;
    Number(number);
    maxL = number
    let string = "";
    let max = 2;
    let midline;
    for (let k = 0; k < 2; k++) {
        for(let i = 0; i < max; i++) {
            if (maxL <= 5) {
                string += "*";
            } else {
                string += "**"
            }
            for ( let j = 0; j < maxL; j++) {
                string += "&nbsp;"
                }
            }
            string += "<br>"
    }
    
    if (maxL > 5) {
        midline = 2;
    } else {
        midline = 1;    
    }
    
    for (let i = 0; i < midline; i++) {
        for (let j = 0; j < maxL; j++){
            string += "*"
        }
    string += "<br>"
    }
    
    
    for (let k = 0; k < 2; k++) {
        for(let i = 0; i < max; i++) {
            if (maxL <= 5) {
                string += "*";
            } else {
                string += "**"
            }
            for ( let j = 0; j < maxL; j++) {
                string += "&nbsp;"
                }
            }
            string += "<br>"
    }
    // document.getElementById("string").innerHTML = "";
    document.getElementById("string").innerHTML = string;
}