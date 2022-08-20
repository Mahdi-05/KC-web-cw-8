let grades = [90, 94, 65, 80, 39, 55, 83, 92, 39, 93, 43, 70, 57, 0];

let all_grades_div = document.getElementById("all-grades");
let search_grades_div = document.getElementById("search-grades");
let A_grades_div = document.getElementById("A-grades");
let bonus_grades_div = document.getElementById("bonus-grades");
let random_grade_div = document.getElementById("random-grade");
// لا تقم بتغيير او تخريب الكود الموجود فوق هذا الكومنت

// طبّق الخطوة 4 في أسفل هذا الكومنت
grades.pop();

// طبّق الخطوة 5 في أسفل هذا الكومنت
grades.push(99);

// طبّق الخطوة 6 أسفل هذا الكومنت
grades.forEach((element) => {
  all_grades_div.innerHTML += `<div>${element}</div>`;
});

function search() {
  let inputValue = document.getElementById("input").value;
if (inputValue != 90 && inputValue !=94 && inputValue !=65 && inputValue !=80 && inputValue !=39 && inputValue !=55 && inputValue !=83 && inputValue !=92 && inputValue !=93 && inputValue !=43 && inputValue !=70 && inputValue !=57 && inputValue !=99 ){
  console.log(`الدرجة غير موجوده`)
  return
}
  
  // طبّق الخطوة 7 أسفل هذا الكومنت
  let filteredGrades = grades.filter((x) => x == inputValue);
  console.log(filteredGrades);
}

// طبّق الخطوة 8 و 9 أسفل هذا الكومنت
let randomIndex = Math.floor(Math.random() * grades.length);
// طبّق الخطوة 10 أسفل هذا الكومنت
random_grade_div.innerHTML = `<div>${grades[randomIndex]}</div>`;
