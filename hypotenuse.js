const sideInput = document.querySelectorAll(".side-input");

const submitBtn = document.querySelector(".submit-btn");
const outPut = document.querySelector(".output");


 outPut.innerText="C=√(a² + b²)";



function clickEvent()
{
    var a=sideInput[0].value;
    var b=sideInput[1].value;
    if(a>0&&b>0)
    {
    var sum = a*a + b*b;
    var c=Math.sqrt(sum);
    outPut.innerText = c;
    }
    else {
        outPut.innerText="⚠Please enter some valid input";  
    }
}




submitBtn.addEventListener('click',clickEvent);
