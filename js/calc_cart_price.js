function calc_cart_price_and_delivery () {
    const cart_items = document.querySelectorAll(".cart-item");
    let total_price = 0;
    const total_price_el = document.querySelector(".total-price");
    const delivery_cost = document.querySelector(".delivery-cost");
    const cart_delivery = document.querySelector("[data-cart-delivery]");
    cart_items.forEach(function (item) {
        const emount_el = item.querySelector("[data-counter]");
        const price_el = item.querySelector(".price__currency");
        const current_price = parseInt(emount_el.innerText) * parseInt(price_el.innerText);
        total_price = total_price + current_price;
    });
    // Отображаем цену на странице
    total_price_el.innerText = total_price;
    // Скрываем / Показываем блок стоимости доставки
    if (total_price > 0) {
        cart_delivery.classList.remove("none");
    } else {
        cart_delivery.classList.add("none");
    };
    // Указываем стоимость доставки
    if (total_price >= 600) {
        delivery_cost.classList.add("free");
        delivery_cost.innerText = "бесплатно";
    } else {
        delivery_cost.classList.remove("free");
        delivery_cost.innerText = "250 ₽";
    };
};