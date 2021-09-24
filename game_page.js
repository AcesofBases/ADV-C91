player1_name=localStorage.getItem("namekey1");
player2_name=localStorage.getItem("namekey2");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name + ":";
document.getElementById("player2_name").innerHTML=player2_name + ":";

document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - " + player2_name;

function send()
{
    firstnum=document.getElementById("input_box_1").value;
    secondnum=document.getElementById("input_box_2").value;
    actual_answer = parseInt(firstnum) * parseInt(secondnum);
 question_word = "<h4> Question: " + firstnum + " + " + secondnum + " = " + "</h4> <br>"
 input_box = " Answer: <input type='text' id='answer_box'> </br></br> ";
 check_button="<button class='btn btn-info' onclick='check()'> Check </button>"; 

 row = question_word + input_box + check_button;

 document.getElementById("output").innerHTML = row;
 document.getElementById("input_box_1").value="";
 document.getElementById("input_box_2").value="";
}

question_turn="p1";
answer_turn="p2";


