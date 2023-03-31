window.addEventListener("DOMContentLoaded", () => {
    const quantity = document.querySelector('.rangeQuantity');
    const quantityNb = document.querySelector('.textQuantity');
    quantity.addEventListener('change', (e) => {
        quantityNb.value = e.target.value;
        console.log(e.target.value);
    });

    quantityNb.addEventListener('change', (e) => {
        quantity.value = e.target.value;
        console.log(e.target.value);
    });
    
    
});

