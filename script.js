const headColorInput = document.getElementById('head-color');
const bodyColorInput = document.getElementById('body-color');
const legsColorInput = document.getElementById('legs-color');
// 
headColorInput.addEventListener('input', () => {
  document.querySelector('.avatar .head').style.backgroundColor = headColorInput.value;
});

bodyColorInput.addEventListener('input', () => {
  document.querySelector('.avatar .body').style.backgroundColor = bodyColorInput.value;
});

legsColorInput.addEventListener('input', () => {
  document.querySelector('.avatar .legs').style.backgroundColor = legsColorInput.value;
});