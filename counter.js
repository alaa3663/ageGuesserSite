decrease=document.getElementById("decrease");
increase=document.getElementById("increase");
confirm=document.getElementById("confirm");
age=document.getElementById("age");
message=document.getElementById("message");
let count =0;
decrease.onclick=function(){
    document.getElementById('Bob').style.visibility = 'hidden';
    if(count>0){
        count--;
        age.textContent=count;
    }
    else{
            message.textContent="age cannot be negative";
        }
    }

increase.onclick=function(){
    document.getElementById('Bob').style.visibility = 'hidden';
    count++;
    age.textContent=count;
    message.textContent="";
}
confirm.onclick=function(){
    let realAge = age.textContent;
    message.textContent="Sike , keep your age for yourself , today SpongeBob is going to guess your age!";
    document.getElementById('Bob').style.visibility = 'visible';
    document.getElementById('phrasestyle').style.visibility = 'visible';
    
}
document.getElementById('Bob').onclick=function(){
    document.getElementById('s1').style.visibility = 'visible';
}




