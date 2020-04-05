function insert(num) {
    document.querySelector(".textview").value += num;
}

function clean() {
    document.querySelector(".textview").value = document.querySelector(".textview").value = "";
}

function backspace() {
    let temp = document.querySelector(".textview").value;
    document.querySelector(".textview").value = temp.substr(0, temp.length - 1);
}

function result() {
    let val = document.querySelector(".textview").value;
    document.querySelector(".textview").value = eval(val);
}
