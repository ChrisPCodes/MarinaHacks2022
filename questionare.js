function getPhysical() {
    //CORRECT ANSWERS
    var amount = 0;

    // LOOP FOR GOING THROUGH ALL QUESTIONS
    for(var i = 1; i <= 3; i++) {
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
    output.innerText = amount ? `Your amount is ${amount}` : `You havn't select an answers`;
}