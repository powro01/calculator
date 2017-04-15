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

            } else {
                firstValue.push(value);
                var display = firstValue.join('');
                
                $('#display').text(display);
            }

        });
    }

});