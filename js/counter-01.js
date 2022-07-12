// Находим элементы на страницы
const btn_minus = document.querySelector("[data-action='minus']");
const btn_plus = document.querySelector("[data-action='plus']");
const counter = document.querySelector("[data-counter]");

// Отслеживаем клик на кнопку Минус
btn_minus.addEventListener("click", function(){
    // Проверяем чтобы счётчик был больше 1
    if (parseInt(counter.innerText) > 1 ) {
        // Изменяем текст в счётчике уменьшая его на 1
        counter.innerText = --counter.innerText;
    }
});

// Отслеживаем клик на кнопку Плюс
btn_plus.addEventListener("click", function(){
    counter.innerText = ++counter.innerText;
});


