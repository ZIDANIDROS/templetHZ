const selectBtn = document.getElementById('select-btn');
const text = document.getElementById('text');
const option = document.getElementById('option');

selectBtn.addEventListener('click', function () {
  selectBtn.classList.toggle('active');
});

for (const options of option) {
  options.onclick = function () {
    text.innerHTML = this.querySelector('.option-text').textContent;
  };
}
