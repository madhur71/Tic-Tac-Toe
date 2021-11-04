var gameData ={ one:1, two:2, three:3, four:4, five:5, six:6, seven:7, eignt:8, nine:9}
var player = {1:"Player 1", 2: "Player 2"}
var flag = 1;
function change(ids){
    if(flag==3){
        console.log("cool")
    }
    else if(flag==1){
        document.getElementById(ids).innerHTML = "<button style='font-size: 50px;'>X</button>"
        gameData[ids]="X"
        document.getElementById('resul').innerHTML = player[1] + "'s Turn"
        flag = 2
        
        check()
}
    else{
        document.getElementById(ids).innerHTML = "<button style='font-size: 50px;'>O</button>"
        gameData[ids]="O"
        document.getElementById('resul').innerHTML = player[2] + "'s Turn"
        flag = 1
        
        check()
    }
}
function check(){
    if(
        (gameData.one==gameData.two && gameData.two==gameData.three)||
    (gameData.four==gameData.five && gameData.five==gameData.six)||
    (gameData.seven==gameData.eignt && gameData.eignt==gameData.nine)||
    (gameData.one==gameData.four && gameData.four==gameData.seven)||
    (gameData.two==gameData.five && gameData.five==gameData.eignt)||
    (gameData.three==gameData.six && gameData.six==gameData.nine)||
    (gameData.one==gameData.five && gameData.five==gameData.nine)||
    (gameData.three==gameData.five && gameData.five==gameData.seven)
    )
    {
        document.getElementById('resul').innerHTML = player[flag] + " Wins" +  "<br><button onclick='reset()' class='star'> Restart</button>";
        flag = 3;
    }
    if(isNaN(gameData.one) && isNaN(gameData.two) && isNaN(gameData.three) && isNaN(gameData.four) && isNaN(gameData.five) && isNaN(gameData.six) && isNaN(gameData.seven) && isNaN(gameData.eignt) && isNaN(gameData.nine)  )
    {
        document.getElementById('resul').innerHTML = "Tie" +  "<br><button onclick='reset()' class='star'> Restart</button>";
    }
}
function reset(){
    window.open("index.html","_self")
}
function StartGame(target, source) {
    player[2]=document.getElementById('Player_1').value;
    player[1]=document.getElementById('Player_2').value;
    document.getElementById(target).innerHTML = document.getElementById(source).innerHTML;
    document.getElementById('resul').innerHTML = player[2] + "'s Turn"
    
}