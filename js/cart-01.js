// Отслеживаем клик на странице
window.addEventListener("click", function (event) {
    // Проверяем что клик был совершен на кнопку "+ в корзину"
    if (event.target.hasAttribute("data-cart")) {
        console.log("Click on cart");
    };
});