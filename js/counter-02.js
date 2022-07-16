// Добавляем прослушку на всём окне
window.addEventListener("click", function (event) {
    // Объявляем переменную для счётчика
    let counter;
    // Проверяем клик строго по кнопкам Плюс или Минус
    if (event.target.dataset.action === "plus" || event.target.dataset.action === "minus") {
        // Находим обёртку счётчика
        const counter_wrapper = event.target.closest(".counter-wrapper");
        // Находим див с числом счетчика
        counter = counter_wrapper.querySelector("[data-counter]");
    }
        // Проверяем, является ли элемент кнопкой Плюс
        if (event.target.dataset.action === "plus") {
        // Изменяем текст в счётчике увеличивая его на 1
            counter.innerText = ++counter.innerText;
        };

        // Проверяем, является ли элемент кнопкой Минус
        if (event.target.dataset.action === "minus") {
            // Проверяем чтобы счётчик был больше 1
            if (parseInt(counter.innerText) > 1 ) {
            // Изменяем текст в счётчике уменьшая его на 1
            counter.innerText = --counter.innerText;
            // Проверка на товар, который находится в корзине
            } else if (event.target.closest(".cart-wrapper") && parseInt(counter.innerText) === 1) {
                // Удаляем товар из корзины
                event.target.closest(".cart-item").remove();
                // Функция отображения статуса корзины - Пустая / Полная
		        toggle_cart_status();
            };
        };
});