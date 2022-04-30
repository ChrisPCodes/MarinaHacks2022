function getPhysical() {
    //CORRECT ANSWERS
    var amount = 0;

    // LOOP FOR GOING THROUGH ALL QUESTIONS
    for(var i = 1; i <= 12; i++) {
        var radiosName = document.getElementsByName('physical'+i);
  
        //LOOP FOR CHECKING ANSWERS INSIDE EACH RADIO
        for(var j = 0; j < radiosName.length; j++) {
            var radiosValue = radiosName[j];
            if(radiosValue.checked){ // An explanation for this line is nice, I don't know why it work without this 
                //(https://teamtreehouse.com/community/javascript-project-simple-quiz-with-radio-buttons)
                switch(radiosValue.value) {
                    case "option5":
                        amount+=5;
                        break;
                    case "option4":
                        amount+=4;
                        break;
                    case "option3":
                        amount+=3;
                        break;
                    case "option2":
                        amount+=2;
                        break;
                    case "option1":
                        amount+=1;
                        break;
                }
            }
        }
    }

    var review;
    if (amount >= 30){
        review = "You are doing well!"
    }
    else {
        review = "You have room for improvement!"
    }

    outputPhysical.innerText = amount ? `Your total is ${amount} \n${review}` : `You have not select an answers`;
}

function getPsychological(){
    //CORRECT ANSWERS
    var amount = 0;

    // LOOP FOR GOING THROUGH ALL QUESTIONS
    for(var i = 1; i <= 10; i++) {
        var radiosName = document.getElementsByName('psychological'+i);
  
        //LOOP FOR CHECKING ANSWERS INSIDE EACH RADIO
        for(var j = 0; j < radiosName.length; j++) {
            var radiosValue = radiosName[j];
            if(radiosValue.checked){ // An explanation for this line is nice, I don't know why it work without this 
                //(https://teamtreehouse.com/community/javascript-project-simple-quiz-with-radio-buttons)
                switch(radiosValue.value) {
                    case "option5":
                        amount+=5;
                        break;
                    case "option4":
                        amount+=4;
                        break;
                    case "option3":
                        amount+=3;
                        break;
                    case "option2":
                        amount+=2;
                        break;
                    case "option1":
                        amount+=1;
                        break;
                }
            }
        }
    }

    var review;
    if (amount >= 30){
        review = "You are doing well!"
    }
    else {
        review = "You have room for improvement!"
    }

    outputPsychological.innerText = amount ? `Your total is ${amount} \n${review}` : `You have not select an answers`;
}

function getEmotional(){
    //CORRECT ANSWERS
    var amount = 0;

    // LOOP FOR GOING THROUGH ALL QUESTIONS
    for(var i = 1; i <= 10; i++) {
        var radiosName = document.getElementsByName('emotional'+i);
  
        //LOOP FOR CHECKING ANSWERS INSIDE EACH RADIO
        for(var j = 0; j < radiosName.length; j++) {
            var radiosValue = radiosName[j];
            if(radiosValue.checked){ // An explanation for this line is nice, I don't know why it work without this 
                //(https://teamtreehouse.com/community/javascript-project-simple-quiz-with-radio-buttons)
                switch(radiosValue.value) {
                    case "option5":
                        amount+=5;
                        break;
                    case "option4":
                        amount+=4;
                        break;
                    case "option3":
                        amount+=3;
                        break;
                    case "option2":
                        amount+=2;
                        break;
                    case "option1":
                        amount+=1;
                        break;
                }
            }
        }
    }

    var review;
    if (amount >= 30){
        review = "You are doing well!"
    }
    else {
        review = "You have room for improvement!"
    }

    outputEmotional.innerText = amount ? `Your total is ${amount} \n${review}` : `You have not select an answers`;
}

function getSpiritual(){
    //CORRECT ANSWERS
    var amount = 0;

    // LOOP FOR GOING THROUGH ALL QUESTIONS
    for(var i = 1; i <= 11; i++) {
        var radiosName = document.getElementsByName('spiritual'+i);
  
        //LOOP FOR CHECKING ANSWERS INSIDE EACH RADIO
        for(var j = 0; j < radiosName.length; j++) {
            var radiosValue = radiosName[j];
            if(radiosValue.checked){ // An explanation for this line is nice, I don't know why it work without this 
                //(https://teamtreehouse.com/community/javascript-project-simple-quiz-with-radio-buttons)
                switch(radiosValue.value) {
                    case "option5":
                        amount+=5;
                        break;
                    case "option4":
                        amount+=4;
                        break;
                    case "option3":
                        amount+=3;
                        break;
                    case "option2":
                        amount+=2;
                        break;
                    case "option1":
                        amount+=1;
                        break;
                }
            }
        }
    }

    var review;
    if (amount >= 30){
        review = "You are doing well!"
    }
    else {
        review = "You have room for improvement!"
    }

    outputSpiritual.innerText = amount ? `Your total is ${amount} \n${review}` : `You have not select an answers`;
}