const quizQns = document.querySelector(".quiz-qns");

const checkBtn = document.querySelector(".check-btn");
const outPut = document.querySelector(".output");
const correctAns  = ["isosceles-rightangle","360","6","Obtuse","Scalene"];
var score=0;

function calculateScore()
{
   
    var index=0;
var formResults = new FormData(quizQns);

 for(let value of formResults.values())
 {  console.log(value);
    //  if(value===correctAns[0])
    //  {   return score;
              if(value===correctAns[index])
             { 
        
              score++;
               }
              index++;
    //    }   
     
    
    // else {

    //     outPut.innerText = "Hey! it's ok if u don't know the answers . Fill all mcq's";
    // }
}
return score;
}

  
function  clickEvent()
{
  var   score1 =calculateScore();
     if(score1===0)
     {
        var out = "better luck next time! your score is 0";
     }
    else if(score1<=3)
    {
        out = "You have to study more try again! your score is "+score;
    }
    else{
        out = "congratulations! your score is "+score;
    }
   outPut.innerText = out;
}



checkBtn.addEventListener('click',clickEvent);
