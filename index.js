var randomNumber = Math.round(Math.random() * 5);

function check() {
    var userNumber = document.getElementById('userNumber').value;
    var scoreDiv = document.getElementById('score');
    var correctNumber = document.getElementById('correctNumber');

    scoreDiv.innerText=randomNumber;
    if (userNumber == '') {
        alert('please guesss first');
        return;
    }
    if(userNumber==randomNumber){
        correctNumber.innerText="You guessed Right ✅";
    }else{
        correctNumber.innerText="You guessed Wrong ❌";
    }
    scoreDiv.innerText = randomNumber;

    

    randomNumber = Math.round(Math.random() * 5);
}