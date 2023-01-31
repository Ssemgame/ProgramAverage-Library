function saveGrade() {
  const grade = Number(document.querySelector('#grade').value);
  const date = new Date().toLocaleDateString();
  
  const grades = JSON.parse(localStorage.getItem('grades')) || [];
  grades.push({ grade, date });
  
  localStorage.setItem('grades', JSON.stringify(grades));
}
