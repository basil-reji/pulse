let val = [7.4, 85, 88, 57, 23]

function checkBoxFun(n) {
    var checkBox = document.getElementById(`checkbox${n}`);
    var text = document.getElementById(`text${n}`);
    var btn = document.getElementById(`pick${n}`)
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        text.innerHTML = `${val[n-1]}`;
        btn.style.backgroundColor = "#00ffa2";
    } else {
        text.innerHTML = "---";
        btn.style.backgroundColor = '#f74949';
    }
}
