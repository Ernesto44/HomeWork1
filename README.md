1) Создать HTML страницу и подключить к ней файл скрипта

2) В файле скрипта создать 2 переменные (money и time), которые будут получать данные от пользователя:

·      Первая будет спрашивать "Ваш бюджет на месяц?"

·      Вторая "Введите дату в формате YYYY-MM-DD"

3) Создать объект appData, который будет содержать такие данные:

·      бюджет (передаем сюда переменную из п.2)

·      данные времени - timeData (передаем сюда переменную из п.2)

·      объект с обязательными расходами - expenses (смотри пункт 4)

·      объект с необязательными расходами - optionalExpenses (оставляем пока пустым)

·      массив данных с доп. доходом - income (оставляем пока пустым)

·      свойство savings (выставляем его как false)

4) Задать пользователю по 2 раза вопросы:

    “Введите обязательную статью расходов в этом месяце”

    “Во сколько обойдется?”

    Записать ответы в объект expenses в формате: 

    expenses: {
    “ответ на первый вопрос” : “ответ на второй вопрос”
    }
5) Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней, использовать alert)

6) Проверить, чтобы все работало без ошибок в консоли

7) Создать свой репозиторий на GitHub и поместить туда папку с первым заданием.



Вопросы к этому заданию:
1) Сколько типов данных существует в JS? 

Ответ:
В JavaScript существует 6 простых типов данных (1-6) и один сложный(7): 
1.Числа(number);
2.Строки(string);
3.Булевский(boolean) - true/false;
4.(null);
5.(undefined);
6.Символ(Symbol);
7.Объекты(object);

2) Как вывести информацию в консоль?

Ответ:
С помощью команды console.log('');

3) Какая функция операторов || и &&?

Ответ:
Оператор || возвращает true, если из двух вариантов хотя бы одно истина(true).
Оператор && возвращает true, если оба варианта - истина(true), иначе вернет - ложь(false).