$(document).ready(function() {
  
    // Global Variables
        var cpuNumber;
        var playerScore;
        var wins = 0;
        var losses = 0;


    alert("Click on the crystals to add to your score. Match your score with the displayed number to win.");

   function initializeGame(){
        playerScore = 0;
        $("#playernumber").html("Your score: " + playerScore); 

        cpuNumber = randomCpu();
        $("#cpunumber").html("Number to Match: " + cpuNumber);
        
        $(".crystal").each(function(){
            $(this).val(randomCrystal());
            console.log($(this));
        });
    };

    function randomCpu(){
        return Math.floor((Math.random() * (120 - 19) + 1) + 19);
    };

    function randomCrystal(){
        var randomNumber = Math.floor((Math.random() * 12) + 1);
        return randomNumber;  
    };
    
    $(".crystal").on("click", function(){
        var number = parseInt($(this).val());
        playerScore += number;
        $("#playernumber").html("Your score: " + playerScore);

        if(playerScore === cpuNumber){
            wins++;
            $("#wins").html("Wins: " + wins);
            initializeGame();
        }
        else if(playerScore > cpuNumber){
            losses++;
            $("#losses").html("Losses: " + losses);
            initializeGame();

        }
    });

    initializeGame();
});