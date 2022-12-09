let win=new Audio("winsound.wav")
let tap=new Audio("tapSound.wav")
let turn = 'X'
let gameover=false
function checkWin(){
    let el=document.getElementsByClassName("boxcontent")
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if((el[e[0]].innerText === el[e[1]].innerText) && (el[e[1]].innerText===el[e[2]].innerText) && (el[e[0]].innerText!=="")){
            document.getElementById("next").textContent=el[e[0]].innerText + " Won!"
            win.play()
            gameover=true
            document.querySelector('.imgbox').getElementsByTagName("img")[0].style.width='10vw';

        }
    })
}
function changeTurn(){
    return turn==='X'?'O':'X'
}

function reset(){
    tap.play()
    let elt=document.getElementsByClassName("boxcontent")
    Array.from(elt).forEach(e=>{
        e.innerText=''
    })
    gameover=false
    turn='X'
    document.getElementById("next").textContent= "Turn For " + turn + '!'
    document.querySelector('.imgbox').getElementsByTagName("img")[0].style.width='0'
}

let boxes=document.getElementsByClassName("box")
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxcontent')
    element.addEventListener('click', ()=>{
        if (boxtext.innerText==''){
            boxtext.innerText=turn
            turn=changeTurn();
            tap.play();
            checkWin();
            if(!gameover){
                document.getElementById("next").textContent= "Turn For " + turn + '!'
            }
        }
    })
})

