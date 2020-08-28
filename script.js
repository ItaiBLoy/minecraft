

let matrix = [
    [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
    [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
    [5,5,5,5,3,3,3,3,5,5,5,5,5,5,3,3,3,5,5,5],
    [5,5,5,3,3,3,3,3,5,5,5,5,5,5,3,3,3,5,5,5],
    [5,5,5,3,3,3,3,3,3,5,5,5,5,5,5,5,5,5,5,5],
    [5,5,5,5,3,3,3,3,5,5,5,5,5,5,5,5,5,5,5,5],
    [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
    [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
    [5,5,5,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
    [5,5,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
    [5,2,2,1,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
    [5,5,5,1,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
    [5,5,5,1,5,5,5,4,5,4,4,4,4,5,5,5,4,4,5,5],
    [5,5,5,1,5,5,5,4,4,4,4,4,4,5,5,5,4,4,5,5],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

let world = document.querySelector(".world");

function setWorld(){
    let birdCount = 0;
    let bombB = 0;
    for (let row = 0; row < 20; row++){
        for (let col = 0; col < 20; col++){
            let tile = document.createElement("div");
            tile.classList.add("tile");
            switch (matrix[row][col]){
                case 0:
                    tile.classList.add("soil");
                    break;
                case 1:
                    tile.classList.add("trunk");
                    break;
                case 2:
                    tile.classList.add("tree");
                    break;
                case 3:
                    tile.classList.add("cloud");
                    break;
                case 4:
                    tile.classList.add("stone");
                    break;
            }
            if (row > 0 && row < 7 && (Math.floor(Math.random() * 20)+birdCount) < 10 && matrix[row][col] !== 3){
                tile.classList.add("bird");
                birdCount++;
            }

            if (bombB === 0){
                let rowBomb = Math.floor(Math.random() * 19) + 14;
                let colBomb = Math.floor(Math.random() * 19) + 0;
                if (row === rowBomb && col === colBomb){
                    tile.classList.add("bomb");
                    bombB = 1;
                }
            }

            world.appendChild(tile);
            
        }  
    }
}


setWorld();

let hand = "";
let pickaxe = document.querySelector(".pickaxe-arsenal");
let axe = document.querySelector(".axe-arsenal");
let shoval = document.querySelector(".shoval-arsenal");
let reset = document.querySelector(".reset");

// world.forEach(item => {
//     item.addEventListener('click', event => {
//           alert("BOOM!!!");
//     })
//   })

pickaxe.addEventListener("click", function(){
    console.log(hand);
    if (hand === "pickaxe-arsenal"){hand = ""; this.style.background = "none";} 
    else{
        document.querySelector(".shoval-arsenal").style.background = "none";
        document.querySelector(".axe-arsenal").style.background = "none";  
        hand = "pickaxe-arsenal";
        console.log(hand);
        this.style.background = "blue";
    }
    
});
shoval.addEventListener("click", function(){
    if (hand === "shoval-arsenal"){hand = ""; this.style.background = "none";} 
    else{
        document.querySelector(".pickaxe-arsenal").style.background = "none";
        document.querySelector(".axe-arsenal").style.background = "none"; 
        hand = "shoval-arsenal"; 
        this.style.background = "blue";}
});
axe.addEventListener("click", function(){
    if (hand === "axe-arsenal"){hand = ""; this.style.background = "none";} 
    else{
        document.querySelector(".shoval-arsenal").style.background = "none";
        document.querySelector(".pickaxe-arsenal").style.background = "none"; 
        hand = "axe-arsenal"; 
        this.style.background = "blue";}
});

reset.addEventListener("click", function(){
    for (let i = 0; i < 400; i++){
        document.querySelector(".world").deleteCell(0)
    }
    setWorld()
});

if (hand !== ""){
    document.style.cursur = "pointer";
}