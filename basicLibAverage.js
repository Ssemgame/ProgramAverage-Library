function calculateGrade() {
  const grade1 = Number(document.querySelector('#grade1').value);
  const weight1 = Number(document.querySelector('#weight1').value);
  const grade2 = Number(document.querySelector('#grade2').value);
  const weight2 = Number(document.querySelector('#weight2').value);
  
  const result = (grade1 * weight1 + grade2 * weight2) / (weight1 + weight2);
  
  document.querySelector('#result').innerHTML = `Výsledná známka je: ${result}`;
}
