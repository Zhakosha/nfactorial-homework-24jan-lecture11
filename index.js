// Task 1

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));

//  Task 2
//  Будет выведен только первый вызов reject/resolve

// Task 3
// Нет, потому что в catch ловится ошибка.