function solveEquation(a, b, c) {
  let arr = [];
  
  let d = b** - 4 * a * c;

  if (d = 0) {
    x = -b / (2 * a);
    arr.push(x);
    
  } else if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a) 
    x2 = (-b - Math.sqrt(d)) / (2 * a)
    arr.push(x1, x2);

  } else if (d < 0) {
    console.log(arr)
  }

   console.log(arr);

  return arr; // array
 
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  
  if (typeof percent !== "number") {
  return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (typeof contribution !== "number") {
  return `Параметр "Первоначальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (typeof amount !== "number") {
  return `Параметр "Сумма кредита" содержит неправильное значение "${amount}"`;
  } else {
  let credit = amount - contribution;
  let todayDate = new Date();
  let date1 = date.getFullYear();
  let date2 = todayDate.getFullYear();
  let creditTerm = (date1 - date2) * 12;
  let monthlyPercent = percent / 12 / 100;
  let monthlyPayment = credit * (monthlyPercent + monthlyPercent / (((1 + monthlyPercent)**creditTerm) - 1));
  let totalPercent = monthlyPayment * creditTerm
  totalAmount = Math.round((contribution + amount + totalPercent) * 100) / 100;
  console.log(totalAmount);
  
  return totalAmount;
  }
}