let hole = document.getElementById('hole');
let block = document.getElementById('block');
let bird = document.getElementById('bird');
let point = document.getElementById('point-display');
let jumping = 0;
let score = 0;
let hasStarted = false;
let gravity;

block.style.animation = 'none';
hole.style.animation = 'none';

hole.addEventListener('animationiteration', () => {
    let randHole = -1 * ((Math.random() * 250) + 200);
    hole.style.top = randHole + 'px';
    if (hasStarted) {
        score++;
        point.innerHTML = 'Score: ' + score;
        if (score === 5) {
            clearInterval(gravity);
            window.location.href = 'portfolio.html';
            return;
        }
    }
});

function flap() {
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(() => {
        let ballPos = parseInt(window.getComputedStyle(bird).getPropertyValue('top'));
        bird.style.top = (ballPos - 5) + 'px';
        
        if (ballPos > 6 && jumpCount < 20) {
            bird.style.top = (ballPos - 3) + 'px';
        }
        
        if (jumpCount > 18) {
            clearInterval(jumpInterval);
            jumping = jumpCount = 0;
        }
        jumpCount++;
    }, 10);
}

document.addEventListener('click', () => {
    if (hasStarted) {
        return;
    }

    hasStarted = true;
    block.style.animation = '';
    hole.style.animation = '';  
    
    gravity = setInterval( () => {
        let ballPos = parseInt(window.getComputedStyle(bird).getPropertyValue('top'));
        
        if (jumping == 0) {
            bird.style.top = (ballPos + 3) + 'px';
        }
        
        let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
        let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue('top'));
        let ballTop = -1 * (500 - ballPos);
        
        if (ballPos > -170 || ((blockLeft < 40) && (blockLeft > -30) && ((ballTop + 650 < holeTop) || (ballTop + 650 > holeTop + 130)))) {
            alert('Game Over! Click OK to try again.');
            
            hole.style.top = -200 + 'px';
            bird.style.top = -400 + 'px';
            score = 0;
            point.innerHTML = 'Score: ' + score;
            
            block.style.animation = 'none';
            hole.style.animation = 'none';
            
            setTimeout( () => {
                block.style.animation = '';
                hole.style.animation = '';
            }, 10);       
        } 
    }, 10);
});


