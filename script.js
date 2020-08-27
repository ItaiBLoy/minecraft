


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
            world.appendChild(tile);
            
        }  
    }
}



setWorld();

let hand = "";

document.querySelector(".pickaxe-arsenal").addEventListener("click", function(){
    if (hand === "pickaxe-arsenal"){hand = ""; this.style.background = "none";} 
    else{
        document.querySelector(".shoval-arsenal").style.background = "none";
        document.querySelector(".axe-arsenal").style.background = "none";  
        hand = "pickaxe-arsenal"; 
        this.style.background = "blue";
    }
    
});
document.querySelector(".shoval-arsenal").addEventListener("click", function(){
    if (hand === "shoval-arsenal"){hand = ""; this.style.background = "none";} 
    else{
        document.querySelector(".pickaxe-arsenal").style.background = "none";
        document.querySelector(".axe-arsenal").style.background = "none"; 
        hand = "shoval-arsenal"; 
        this.style.background = "blue";}
});
document.querySelector(".axe-arsenal").addEventListener("click", function(){
    if (hand === "axe-arsenal"){hand = ""; this.style.background = "none";} 
    else{
        document.querySelector(".shoval-arsenal").style.background = "none";
        document.querySelector(".pickaxe-arsenal").style.background = "none"; 
        hand = "axe-arsenal"; 
        this.style.background = "blue";}
});

document.querySelector(".reset").addEventListener("click", setWorld());

this.addEventListener(click, function(){
    if (hand !== "shoval"){alert(addsdv)}
});