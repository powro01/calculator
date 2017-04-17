$(document).ready(function() {

    var firstValue = [];
    var secondValue = [];
    var operators = ['/', 'X', '-', '%', '+', 'sqrt'];
    var operatorSet = false;
    //click event
    
    $('.button').on('click', function() {

        var value = $(this).text();

        if(value === "AC") {
            //clear display and values arrays
            $('#display').text("");
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

        //iterate operators 
        for(let i = 0; i < operators.length; i++) {
            console.log(operators[i]);
        }

    });

});