decrease=document.getElementById("decrease");
increase=document.getElementById("increase");
confirm=document.getElementById("confirm");
age=document.getElementById("age");
message=document.getElementById("message");
let count =0;
decrease.onclick=function(){
    if(count>0){
        count--;
        age.textContent=count;
    }
    else{
            message.textContent="age cannot be negative";
        }
    }

increase.onclick=function(){
    count++;
    age.textContent=count;
    message.textContent="";
}
confirm.onclick=function(){
    message.textContent="Sike , keep your age for yourself , today Bob is going to guess your age!";
}



