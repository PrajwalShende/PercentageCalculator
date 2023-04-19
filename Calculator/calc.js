var nf1 = document.getElementById('nf1');
var nf2 = document.getElementById('nf2');
var resultf = document.getElementById('resultf')
var form = document.getElementById('xISWhatPercentOfY');



form.addEventListener('submit', function(event) {
    if(!nf1.value || !nf2.value) {
        alert("Please enter values in the fields");
    } else {
        var x = parseFloat(nf1.value);
        var y = parseFloat(nf2.value);

        var result = x/y;
        var percent = result*100;

        resultf.innerText = "Answer: " + percent + "%";
        event.preventDefault();


    }


});