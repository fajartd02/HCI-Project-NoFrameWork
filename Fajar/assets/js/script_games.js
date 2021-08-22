const dino = document.getElementById('dinosaur');
const batu = document.getElementById('batu');
const score = document.getElementById('score');

function jump() {
    dino.classList.add('jump_animate');
    setTimeout(function() {
        dino.classList.remove('jump_animate');
    }, 523);
}

document.addEventListener('keypress', function() {
    if (!dino.classList.contains('jump_animate')) {
        jump();
    }
    jump();
});

setInterval(function () {
    if(score.innerText >= 80) {
        window.location.href = 'fajar_portofolio.html';
    }

    score.innerText++;
    const top_dino = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    // console.log(top_dino);
    const rock_position = parseInt(window.getComputedStyle(batu).getPropertyValue('left'));
    // console.log(rock_position);

    if (rock_position < 0) {
        batu.style.display = 'none';
    } else {
        batu.style.display = '';
    }

    if(rock_position < 50 && rock_position > 0 && top_dino > 150) {
        alert(
            "Game Over\n" + 
            "Score : " +  
            score.innerText +
            "\nPlease Try Again.");
        score.innerText = 0;
    }
  }, 50);