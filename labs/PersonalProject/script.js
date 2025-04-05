var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var button = document.getElementById('button-click');
var buttonClicked = false;

document.body.style.cursor = 'url(favico.ico)'

Notification.requestPermission();
//----------start of popup notification ----------//
button.addEventListener('mouseleave', function() {
    if(!buttonClicked){
        modal.style.display = "block";
        modal.classList.add("show");
    }
});

span.onclick = function(){
    modal.classList.add("closing");
    setTimeout(function(){
        modal.classList.remove("show","closing");
        modal.style.display = "none";
    }, 1000);
}

window.onclick = function(event){
    if(event.target == modal){
        modal.classList.add("closing");
        setTimeout(function(){
            modal.classList.remove("show","closing");
            modal.style.display = "none";
        },1000);
    }
}
modal.addEventListener('transitionend', function(){
    buttonClicked = false;
})
//----------end of popup notification ----------//

button.addEventListener('click', function(event){
    event.stopPropagation();
    buttonClicked = true;
    button.style.display="none";
    //modal.style.display="block";
    //modal.classList.add("show");
    let data = prompt("What is the code to eternal bliss")
    if (data == "Party Time"){
        document.getElementById('message').style.color = "transparent";
        document.body.style.backgroundImage = "none";
        document.body.style.animation = "changeColor 3s infinite";
        const image = document.getElementById('image-mouse');

        image.style.display = 'block';
        setTimeout(function(){
            image.style.opacity = 1;
        }, 10)
    }else if (data == "Let There be War"){
        document.body.style.background = "black";
    }else{
        document.body.style.background = "black";
    }
});

// function triggerAnimation(){
//     lineAnimation.classList.add('fallingStar');
//     lineAnimation.toggleClass('fallingStar');
// }