function toggle_cart_status () {
    const cart_wrapper = document.querySelector(".cart-wrapper");
    const cart_empty_badge = document.querySelector("[data-cart-empty]");
    const order_form = document.querySelector("#order-form");
    if (cart_wrapper.children.length > 0) {
        cart_empty_badge.classList.add("none");
        order_form.classList.remove("none");
    } else {
        cart_empty_badge.classList.remove("none");
        order_form.classList.add("none");
    };
};