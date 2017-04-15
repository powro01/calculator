$(document).ready(function() {

    var firstValue = [];
    var secondValue = [];
    var operators = ['AC', '/', 'X', '-', '+', 'DEL'];
    var operatorSet = false;
    //click event
    
    if(!operatorSet) {
        $('.button').on('click', function(e) {

            var value = $(this).text();
            
            if(value === "AC") {

                //clear display
                $('#display').text("");
                firstValue = [];
            } else if(value === "DEL") {

                //delete last char
                firstValue[0] = firstValue[0].substr((firstValue[0].length - 1), 1);
                $("#display").text(firstValue[0]);

                console.log(firstValue[0].length);
                console.log(firstValue[0]);

            }
            
            else {
            
            firstValue.push(value);
            var display = firstValue.join('');
            
            $('#display').text(display);

            }
            

        });
    }

});