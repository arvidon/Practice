document.addEventListener("DOMContentLoaded", () => {
    let boxes = document.querySelectorAll(".box");
    let resetBtn = document.querySelector(".resetBtn");
    let msg = document.querySelector(".para");
    let msgContainer = document.querySelector(".msg-container");


    let turn0 = true;

    const winPatterns = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8],
    ];


    boxes.forEach((box) => {
        box.addEventListener("click", function handleClick() {
            console.log("Box clicked!");
            if(turn0){
                box.innerText = "x";
                turn0 = false;
            }else{
                box.innerText = "o";
                turn0 = true;
            }
            box.disabled = true;

            checkWinner();
        });
    });

    const resetGame = () => {
        turn0 = true;
        for (let box of boxes){
            box.disabled = false;
            box.innerText = "";
        }
        msgContainer.classList.add("hide");
    }

    const disableBtn = () => {
        for(let box of boxes){
            box.disabled = true;
        }
    }

    const showWinner = (winner) => {
        msg.innerText = `Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBtn();
    }

    const checkWinner = () => {
        for(let pattern of winPatterns){
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
                if(pos1Val === pos2Val && pos2Val === pos3Val){
                    console.log("winner", pos1Val);
                    showWinner(pos1Val);
                }
            }
        }
    };

    resetBtn.addEventListener("click", resetGame);

});

