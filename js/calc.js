$(document).ready(function() {

    var firstValue = [];
    var secondValue = [];
    var operators = ['/', 'X', '-', '%', '+', 'pow'];
    var operatorSet = false;
    var selectedOperator;
    

    function findOperator(val) {
        for(let i = 0; i < operators.length; i++) {
            if(val === operators[i]) {
                selectedOperator = operators[i];
                return true;
            }
        }
    }
    
    $('.button').on('click', function() {

        var value = $(this).text();

        if(value === "AC") {
            //clear display and values arrays
            $('#display').text("");
            operatorSet = false;
            firstValue = [];
            secondValue = [];
        }
        else if(value === "DEL") {
            if(!operatorSet) {
                //deleting last value in first array
                let remove = firstValue.pop();
                let display = firstValue.join('');
                $('#display').text(display);
            } else {
                //deleting from second array
                let remove = secondValue.pop();
                let display = secondValue.join('');
                $('#display').text(display);
            }
        }
        else if(findOperator(value)) {
            operatorSet = true;
            $('#display').text("");
        }
        else if(value === "=") {
            let first = firstValue.join('');
            first = parseFloat(first);
            
            let second = secondValue.join('');
            second = parseFloat(second);


            var result;

            $('#display').text("");

            switch(selectedOperator) {
                case "/":
                    result = first / second;
                    $('#display').text(result);
                    break;
                case "X":
                    result = first * second;
                    $('#display').text(result);
                    break;
                case "-":
                    result = first - second;
                    $('#display').text(result);
                    break;
                case "+":
                    result = first + second;
                    $('#display').text(result);
                    break;
                case "pow":
                    result = Math.pow(first, second);
                    $('#display').text(result);
                    break;
            }

            

            
        }
        else {
            if(!operatorSet) {
                //get value to first array and show it on display
                firstValue.push(value);
                let display = firstValue.join('');
                $('#display').text(display);
            } else {
                //get value to second array
                secondValue.push(value);
                let display = secondValue.join('');
                $('#display').text(display);
            }
        }
    });
});