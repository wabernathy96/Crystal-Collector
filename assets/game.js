$(document).ready(function() {


    // Universal Variables
    // var playerNumber = 0;
    var wins = 0;
    var losses = 0;
    var playerNumber = 0;
    


    // Reset the game
    var resetGame = function(){
        playerNumber = 0;
        

    }
    // Computer generates a random number
    var cpuChoice = Math.floor((Math.random() * (120 - 19) + 1) + 19);
        console.log(cpuChoice);

    // Random numbers generate for crystals
    function randomCrystal(){
        var randomNumber = Math.floor((Math.random() * 12) + 1);
        return randomNumber;
        
    }
        
        // Random Numbers are assigned to each crystal
        $(".crystal").each(function(){
            $(this).val(randomCrystal());
            console.log($(this));
        });

         
    //  Player can click on each crystal
    $(".crystal").on("click", function(){
        var number = parseInt($(this).val());

        playerNumber += number;

        console.log(playerNumber);
        
        // $("#playernumber").text(
        //     parseInt($(this).val()) + parseInt(playerNumber));
        
    
    });  
        //  Crystal's numbers get put together then added 
    // Sum of crystal's gets checked against random number
});
