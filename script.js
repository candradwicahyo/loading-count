window.onload = () => {
  function loader() {
    const number = document.querySelector('.number');
    const loader = document.querySelector('.loader');

    let num = 0;

    const start = setInterval(() => {
      number.textContent = `${num++}%`;
      loader.style.width = `${num++}%`;
      if (num > 100) clearInterval(start);
    }, 100);
  }

  loader();
}