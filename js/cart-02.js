// Div внутри корзины, в который мы добавляем товары
const cart_wrapper = document.querySelector(".cart-wrapper");
// Отслеживаем клик на странице
window.addEventListener("click", function (event) {
    // Проверяем что клик был совершен на кнопку "+ в корзину"
    if (event.target.hasAttribute("data-cart")) {
        // Находим карточку с товаром, внутри которой был совершен клик
        const card = event.target.closest(".card");
        // собираем данные с этого товара и записываем их в единый объект product_info
        const product_info = {
            id: card.dataset.id,
            img_src: card.querySelector(".product-img").getAttribute("src"),
            title: card.querySelector(".item-title").innerText,
            items_in_box: card.querySelector("[data-items-in-box]").innerText,
            weight: card.querySelector(".price__weight").innerText,
            price: card.querySelector(".price__currency").innerText,
            counter: card.querySelector("[data-counter]").innerText,
        };
		// Проверяем, есть ли такой товар в корзине
		const item_in_cart = cart_wrapper.querySelector(`[data-id="${product_info.id}"]`)
		// Если товар есть в корзине
		if (item_in_cart) {
			const counter_element = item_in_cart.querySelector("[data-counter]")
			counter_element.innerText = parseInt(counter_element.innerText) + parseInt(product_info.counter)
		} else {
			// Если товара нет в корзине
			// Собранные данные подставим в шаблон для товара в корзине
        	const cart_item_HTML = `<div class="cart-item" data-id="${product_info.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${product_info.img_src}" alt="">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${product_info.title}</div>
										<div class="cart-item__weight">${product_info.items_in_box} / ${product_info.weight}</div>
										<div class="cart-item__details">
											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${product_info.counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>
											<div class="price">
												<div class="price__currency">${product_info.price}</div>
											</div>
										</div>
									</div>
								</div>
							</div>`;
        	// Отобразим данные в корзине
        	cart_wrapper.insertAdjacentHTML("beforeend", cart_item_HTML);
		}
		// Сбрасываем счетчик добавленного товара на "1"
        card.querySelector("[data-counter]").innerText = "1";
		// Функция отображения статуса корзины - Пустая / Полная
		toggle_cart_status();
    };
});