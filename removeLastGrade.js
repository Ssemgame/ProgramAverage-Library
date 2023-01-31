function removeLastGrade() {
  const grades = JSON.parse(localStorage.getItem('grades')) || [];
  grades.pop();
  
  localStorage.setItem('grades', JSON.stringify(grades));
}
