// This is my first Java Script project. This is simple calculator that I made using HTML5, CSS3 and Java Script.

let input = document.getElementById('display');

// Функция, която добавя стойност към екрана при натискане на някои от числата или операторите
function appendToDisplay(value) {
  input.value += value;
}

// Функция, която изчиства съдържанието на екрана при натискане на бутона за изтриване
function clearDisplay() {
  input.value = '';
}

// Функция, която изчислява резултата на израза и го показва на екрана
function calculateResult() {
  try {
    // Използваме eval(), за да изчислим израза и да запишем резултата
    display.value = eval(display.value);
  } catch (error) {
      display.value("Error");
  }
}