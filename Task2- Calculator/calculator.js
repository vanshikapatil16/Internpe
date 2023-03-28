function clr() {
	document.getElementById('result').value = "";
}

function dis(value) {
	document.getElementById('result').value += value;
}

function calculate() {
	var p = document.getElementById('result').value;
	var q = eval(p);
	document.getElementById('result').value = q;
}

function deleteLast() {
	var del = document.getElementById('result').value;
	str = del.substring(0, del.length-1);
	document.getElementById('result').value = str;
}