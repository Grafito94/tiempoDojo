function removeCookie(){
    var elementCookie = document.querySelector("footer"); //Seleccionamos aquel elemento que tenga la clase cookie
    elementCookie.remove();
}
function loadingw(element){
    alert("loading weather report of " + element);

    var elementoH2 = document.querySelector(".sanJose h2");
    elementoH2.innerText = element;
}

function changeTemp(element){
    var temp = element.value;
    if(temp == "F"){
        var far = document.querySelectorAll(".tempMax");
        var far2 = document.querySelectorAll(".tempMin");

        for (let step = 0; step < far.length; step++){
            far[step].innerHTML = Math.round((far[step].innerHTML) * (9/5) + 32);
            far2[step].innerHTML = Math.round((far2[step].innerHTML) * (9/5) + 32);
        }
    }else{
        var far = document.querySelectorAll(".tempMax");
        var far2 = document.querySelectorAll(".tempMin");

        for (let step = 0; step < far.length; step++){
            far[step].innerHTML = Math.round((far[step].innerHTML - 32) * 5/9);
            far2[step].innerHTML = Math.round((far2[step].innerHTML - 32) * 5/9);
        }
    }
}