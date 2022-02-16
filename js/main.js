function updatePrice(clickId, updateId, price) {
    document.getElementById(clickId).addEventListener('click', function (e) {
        const updateField = document.getElementById(updateId);
        updateField.innerText = price;
        updateTotal();
        // Toast Section 
        const toastShow = document.getElementById('liveToast');
        const toast = new bootstrap.Toast(toastShow);
        toast.show();
    })
}

updatePrice('eightGB','memory-cost',0);
updatePrice('sixteenGB','memory-cost',200);
updatePrice('ssd1','storage-cost',0);
updatePrice('ssd2','storage-cost',500);
updatePrice('ssd3','storage-cost',700);
updatePrice('free-delivery','delivery-cost',0);
updatePrice('paid-delivery', 'delivery-cost', 20);

function updateTotal() {

    const bestPrice = document.getElementById('best-price').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;

    const total =
        parseFloat(bestPrice) +
        parseFloat(memoryCost) +
        parseFloat(storageCost) +
        parseFloat(deliveryCost);
    
    const totalPriceField = document.getElementById('total-price');
    totalPriceField.innerText = total;
}

// Coupon Section 
document.getElementById('apply-btn').addEventListener('click', function () {
    const promoCode = 'pHero';
    const couponField = document.getElementById('promo-input');
    if (couponField.value == promoCode) {
        let subTotal = document.getElementById('total-price');
        const discountField = document.getElementById('discount');
        const finalPrice = document.getElementById('final-price');
        couponField.value = '';
        const discount = subTotal.innerText * .2;
        discountField.innerText = discount;
        finalPrice.innerText = subTotal.innerText - discount;
        document.getElementById('discount-row').classList.remove('d-none');
        document.getElementById('hr').classList.remove('d-none');
        document.getElementById('total-row').classList.remove('d-none');
        document.getElementById('coupon-valid').classList.remove('d-none');
        document.getElementById('coupon-invalid').classList.add('d-none');

    } else {
        document.getElementById('coupon-invalid').classList.remove('d-none');
        document.getElementById('coupon-valid').classList.add('d-none');
        
    }

})





