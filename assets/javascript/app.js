
    $(document).ready(function(){






        var timer = 30;
        var setTimer;

        var wrong = $("#wrong");
        var right = $("#right");
        var noAnswer = $("#no-answer");

        var rightCount = 0;
        var wrongCount = 0;
        var unAnswer = 0;

        var userChoice = $(".input:checked").val();

        $("#game-over").hide();
        start();

        function start(){
            setTimer = setInterval(function(){
                timer-- ;
                $("#timer").html("Race against time: " + timer);



                if (timer ===0 ){
                    stop();
                    alert("Time's Up");
                    $("#question").hide();
                    $("#game-over").show();
                    answerCheck1();
            		answerCheck2();
            		answerCheck3();
            		answerCheck4();
            		answerCheck5();

                }
            }, 1000);

        };


        $("#form").submit(function(e){
            e.preventDefault();
        });

        function stop(){
            clearInterval(setTimer);
        };


        $("#submit-button").on('click', function(event){
            event.preventDefault();
            stop();
            alert("Time's Up");
            $("#question").hide();
            $("#game-over").show();
            answerCheck1();
            answerCheck2();
            answerCheck3();
            answerCheck4();
            answerCheck5();
        });



// Shoul

        function answerCheck1(){

            var userChoice = $('input[name=optradio1]:checked').val();
            console.log(userChoice);
            if(userChoice === "c"){
                alert("you got it right mang")
                rightCount++;
                right.html(rightCount);

            }

            

            else{
          		 alert("ughhh...WRONG!")
                wrongCount++;
                wrong.html(wrongCount);
            }
    };

    function answerCheck2(){
        	
            var userChoice = $('input[name=optradio2]:checked').val();
            console.log(userChoice);
            if(userChoice === "c"){
                alert("you got it right mang")
                rightCount++;
                right.html(rightCount);

            }

            else{
            	alert("ughhh...WRONG!")
                wrongCount++;
                wrong.html(wrongCount);
            }
    };

    function answerCheck3(){
        	
            var userChoice = $('input[name=optradio]:checked').val();
            console.log(userChoice);
            if(userChoice === "a"){
                alert("you got it right mang")
                rightCount++;
                right.html(rightCount);

            }

            else{
            	alert("ughhh...WRONG!")
                wrongCount++;
                wrong.html(wrongCount);
            }
    };

    function answerCheck4(){
        	
            var userChoice = $('input[name=optradio4]:checked').val();
            console.log(userChoice);
            if(userChoice === "a"){
                alert("you got it right mang")
                rightCount++;
                right.html(rightCount);

            }

            else{
            	alert("ughhh...WRONG!")
                wrongCount++;
                wrong.html(wrongCount);
            }
    };

    function answerCheck5(){
        	
            var userChoice = $('input[name=optradio5]:checked').val();
            console.log(userChoice);
            if(userChoice === "d"){
                alert("you got it right mang")
                rightCount++;
                right.html(rightCount);

            }

            else{
            	alert("ughhh...WRONG!")
                wrongCount++;
                wrong.html(wrongCount);
            }
    };



    });
