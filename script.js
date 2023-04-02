const mario = document.querySelector('.mario');
const tube = document.querySelector('.tube');
const cloud = document.querySelector('.cloud');
const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');

  }, 560);
}

const loop = setInterval (() => {
   
   const tubePosition = tube.offsetLeft;
   const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
   const cloudPosition = +window.getComputedStyle(cloud).bottom.replace('px', '');

   if (tubePosition <= 83 && tubePosition > 0 && marioPosition < 63) {
    tube.style.animationPlayState = 'paused';
    mario.style.animationPlayState = 'paused';
    cloud.style.animationPlayState = 'paused';
  
    tube.style.left = `${tubePosition}px`;
    mario.style.bottom = `${marioPosition}px`;
    cloud.style.bottom = `${cloudPosition}px`;
  
    mario.src = './_imagens/gameover.png';
    mario.style.width = '80px'
    mario.style.height = '80px'
    mario.style.marginLeft = '19px'
  
    mario.style.animation = 'gameover 1700ms';
  
    mario.classList.delete('mario');
  
    clearInterval(loop);
  }
}, 14);

document.addEventListener('keydown', jump);
