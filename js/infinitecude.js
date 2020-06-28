 var answers = ["Oh, why this question again ?!",
                "Don't ask me this...",
                "I know the answer but i don't want to tell you...",
                "AH, AH, AH...",
                "I love this one so much...",
                "Yep!",
                "Nope!",
                "Here we go again...",
                "GUR NAFJRE VF VA IVOENGVBAF...",
                "I don't know and I disappoint myself",
                "Look into your soul and you'll find the truth... No, i'am joking, i don't know!",
                "01001101 01100001 01111001 01100010 01100101",
                "In this world i am a god!",
                "Very doubtful...",
                "Donde esta la biblioteca ?",
                "23119,920,62114",
                "Better not tell you..."
               ];

    window.onload = function() {
       var cube = document.getElementById("cube");
       var answer = document.getElementById("answer");
       var infinitecube = document.getElementById("infinite_cube");
       var question = document.getElementById("question");

       infinitecube.addEventListener("click", function() {
         if (question.value.length < 1) {
           alert('There is no question...');
         } else {
           cube.innerText = "";
           var num = Math.floor(Math.random() * Math.floor(answers.length));
           answer.innerText = answers[num];
         }
       });
    };
