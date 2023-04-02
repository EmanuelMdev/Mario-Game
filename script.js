const mario = document.querySelector('.mario');
const tube = document.querySelector('.tube');
const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');

}, 560);
}

const loop = setInterval (() => {
   
   const tubePosition = tube.offsetLeft;
   const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

   if (tubePosition <= 83 && tubePosition > 0 && marioPosition < 63) {

    tube.style.animation = 'none';
    tube.style.left = `${tubePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;
    
    mario.src = './_imagens/gameover.png';
    mario.style.width = '80px'
    mario.style.height = '80px'
    mario.style.marginLeft = '19px'

    clearInterval(loop);
   }

}, 14);
document.addEventListener('keydown', jump);