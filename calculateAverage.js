function calculateAverage() {
  const grades = JSON.parse(localStorage.getItem('grades')) || [];
  let sum = 0;
  
  grades.forEach(({ grade }) => {
    sum += grade;
  });
  
  const average = sum / grades.length;
  
  document.querySelector('#result').innerHTML = `Průměrná známka: ${average}`;
}
