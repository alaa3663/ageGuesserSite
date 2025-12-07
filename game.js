const yesButton=document.getElementById("yes");
const noButton=document.getElementById("no");
const msg=document.getElementById("try");
const countLabel=document.getElementById("counting");
let counter=1;
const startButton=document.getElementById("start");
window.alert("IMPORTANT!\n ALAA WILL OWE YOU A MILK SHAKE IF YOU CLICK YES BY MISTAKE");
yesButton.onchange = function() {
    if(this.checked) {
        msg.textContent = "TRY CLICKING SPONGEBOB";
    }
};

noButton.onchange = function() {
    if(this.checked) {
        msg.textContent = "I KNEW YOURE IDIOT no MILK SHAKE FOR YOU";
        counter++;
        countLabel.textContent=counter;
        startButton.style.visibility="visible";
    }
    yesButton.disabled = true;
};
startButton.onclick = function() {
    document.querySelector('.custom-loader').style.visibility = 'visible';
    setTimeout(function() {
        document.getElementById("think").style.animation = "fadeIn 0.7s ease forwards";
        counter++;
        countLabel.textContent = counter;
        setTimeout(function() {
        document.getElementById('trick').style.visibility = 'visible';
        }, 1500);
        setTimeout(function() {
        document.getElementById('trickbt1').style.visibility = 'visible';
        }, 2000);
        setTimeout(function() {
        document.getElementById('trick2').style.visibility = 'visible';
        }, 2500);
    }, 7000); 

}
const trickButton=document.getElementById("trick");
const trickButton1=document.getElementById("trickbt1");
const trickButton2=document.getElementById("trick2");
trickButton1.onclick = function() {
    counter++;
    countLabel.textContent=counter;
}
trickButton2.onclick = function() {
    document.getElementById('span1').style.visibility = 'visible';
    document.getElementById('continue').style.visibility = 'visible';
}



