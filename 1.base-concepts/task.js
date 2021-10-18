function solveEquation(a, b, c) {
  let arr = [];
  
  let d = b**2 - 4 * a * c;

  if (d === 0) {
   let x = -b / (2 * a);
    arr.push(x);
    
  } else if (d > 0) {
   let x1 = (-b + Math.sqrt(d)) / (2 * a) 
   let x2 = (-b - Math.sqrt(d)) / (2 * a)
    arr.push(x1, x2);

  } else if (d < 0) {
    console.log(arr)
  }

   console.log(arr);

  return arr; // array
 
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if (typeof percent === "number") {
  return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (typeof contribution === "number") {
  return `Параметр "Первоначальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (typeof amount === "number") {
  return `Параметр "Сумма кредита" содержит неправильное значение "${amount}"`;
  } else {
  let credit = amount - contribution;
  let dateNow = new Date();
  let date1 = date.getFullYear();
  let date2 = dateNow.getFullYear();
  let creditTerm = (date1 - date2 - 1) * 12;
  let month1 = date.getMonth();
  let month2 = dateNow.getMonth();
  let monthLeft = 11 - month1 + (month2 + 1);
  let totalMonth = creditTerm + monthLeft;
  let monthlyPercent = percent / 12 / 100;
  let monthlyPayment = credit * (monthlyPercent + monthlyPercent / (Math.pow(1 + monthlyPercent, totalMonth) - 1)) * totalMonth;
  let totalPercent = monthlyPayment * totalMonth
  totalAmount = Math.round(monthlyPayment * 100) / 100;
  console.log(totalAmount.toFixed(2));
  
  return totalAmount;
  }
}