const angleInput = document.querySelectorAll(".angle-input");
console.log(angleInput[0]);
const submitBtn = document.querySelector(".submit-btn");
const outPut = document.querySelector(".output");





function findIsItaTriangle(){
    angle1=Number(angleInput[0].value);
    angle2=Number(angleInput[1].value);
    angle3=Number(angleInput[2].value);
    if(angle1>0&&angle2>0&&angle3>0)
    {
        var sum = angle1+angle2+angle3;
        if(sum===180)
        {
        var outputText = "Huraay, it is a Triangle🥳";
        }
        else
        {
        outputText = "Oh know ! it is not a triangle😥";
        }
    }
    else 
    {
        outputText = "⚠Please enter some valid input";
    }
    outPut.innerText =  outputText;

}




submitBtn.addEventListener('click',findIsItaTriangle )