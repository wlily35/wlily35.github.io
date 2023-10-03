(function(){
    const slider = [...document.querySelectorAll(".testimonio__body")];
    const buttonNext = document.querySelector("#next");
    const buttonBefore = document.querySelector("#before");
    let value;

    buttonNext.addEventListener("click", ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener("click", ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimonio = document.querySelector(".testimonio__body--show").dataset.id;
        value = Number(currentTestimonio);
        value+= add;

        slider[Number(currentTestimonio)-1].classList.remove("testimonio__body--show");
        if(value === slider.length+1 || value === 0){
            value = value === 0 ? slider.length : 1;
        }
        slider[value-1].classList.add("testimonio__body--show");
    }


    
})();