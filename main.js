let money = +prompt('Введите ваш бюджет на месяц', '');
let timeData = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
  money,
  timeData,
  expenses : {
    'обязательный расход в этом месяце' : '700$'
    },
  optionalExpenses : {},
  income : [],
  savings : false
};

const month = 30;
let result = money/month;

alert(result);