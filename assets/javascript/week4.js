 $(".jumbotron").css({'background-image':'url("assets/images/eight_horns.png")'});
      $(".game-rules").css({"background-color": "yellow"});
     $(".panel-body").css({"background-color": "lightgreen"});    

     // The random number shown at the start of the game should be between 19 - 120.
      function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;   
    }
    
// Each crystal should have a random hidden value between 1 - 12.
      var playerTotal = 0;
      var buttonValues = [];
      var matchValue;
      var nbrWins = 0;
      var nbrLosses = 0;

     for (var i = 0; i < 4; i++) {        
        buttonValues[i] = getRandomInt(1, 12);
        var currentValue = buttonValues[i];
        for (var j = 0; j < i; j++)  {              //removes duplicate value if it exists           
            if (buttonValues[i] === buttonValues[j]) {                
                i = i - 1;          //replace the current occurrence of the array when the loop increments
                j = 9;             //break out of the loop               
            } 
        }        
      } 	
      
     $(document).ready(function() {
   //  resetGame();
      matchValue = getRandomInt(19, 120);                              
      $(".match-value").html("<h4>" + matchValue + "</h4>");
      $(".wins").html("<h4>Wins: " + nbrWins + "</h4>");
      $(".losses").html("<h4>Losses: " + nbrLosses + "</h4>");      

      // get button value for first button
      $("#firstBtn").on("click", function() {
         playerTotal = playerTotal + buttonValues[0];
         $("#score").text(playerTotal);         
         didIWin(playerTotal, matchValue);
        });
      
      $("#secondBtn").on("click", function() {
        playerTotal = playerTotal + buttonValues[1];
        $("#score").text(playerTotal);        
        didIWin(playerTotal, matchValue);
      });

      // get button value for third button
      $("#thirdBtn").on("click", function() {
        playerTotal = playerTotal + buttonValues[2];
        $("#score").text(playerTotal);
        didIWin(playerTotal, matchValue);
      });

      // get button value for fourth button
      $("#fourthBtn").on("click", function() {
        playerTotal = playerTotal + buttonValues[3];
        $("#score").text(playerTotal);
        didIWin(playerTotal, matchValue);
      });     

   function displayScore() {
     $("#score").text(playerTotal);
   }   

   function didIWin(playerTotal, matchValue) {
      if (playerTotal === matchValue) {
        nbrWins++;        
        $("#wins").text("Wins: " + nbrWins);
        resetGame();
      } else {
        if (playerTotal > matchValue) {
          nbrLosses++;          
          $("#losses").html("<h4>Losses: " + nbrLosses + "</h4>"); 
          resetGame();
        }
      }
   }   

 function resetGame() {
       playerTotal = 0;
       buttonValues = [];
       matchValue;

     matchValue = getRandomInt(19, 120);  
       
     for (var i = 0; i < 4; i++) {        
        buttonValues[i] = getRandomInt(1, 12);
        var currentValue = buttonValues[i];
        for (var j = 0; j < i; j++)  {
           console.log('value of j ' + j);
            if (buttonValues[i] === buttonValues[j]) {   //if this is a duplicate value, replace it
                i = i - 1;          //replace the current occurrence of the array when the loop increments
                j = 9;             //break out of the loop
            } 
        }        
      }   
  
      $("#wins").text("Wins: " + nbrWins);
      $("#losses").text("Losses: " + nbrLosses); 
      $(".match-value").text(matchValue);
      $("#score").text(playerTotal);
 }

});