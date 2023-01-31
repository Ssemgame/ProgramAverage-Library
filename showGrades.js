function renderGradesTable() {
  const grades = JSON.parse(localStorage.getItem('grades')) || [];
  let table = '<table><tr><th>Datum</th><th>Známka</th></tr>';
  
  grades.forEach(({ grade, date }) => {
    table += `<tr><td>${date}</td><td>${grade}</td></tr>`;
  });
  
  table += '</table>';
  
  document.querySelector('#grades-table').innerHTML = table;
}
