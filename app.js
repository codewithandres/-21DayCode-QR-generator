
const wrapper = document.querySelector('.wrapper'),
    qrInput = wrapper.querySelector('.form input'),
    qrImg = wrapper.querySelector('.qr-cpde img'),
    genarateBtn = wrapper.querySelector('.form button');


genarateBtn.addEventListener('click', () => {

    let qrValue = qrInput.value;

    if (!qrValue) return;

    genarateBtn.innerHTML = ` Genearting QR code... `;

    qrImg.src = ` http://api.qrserver.com/v1/create-qr-code/?data=${qrValue}!&size=220x370 `;

    if (!qrImg) return console.log('error al intentar generar el qr code');

    qrImg.addEventListener('load', () => {

        wrapper.classList.add('active');
        genarateBtn.innerHTML = ` QR Generate `;
    });

    qrInput.addEventListener('keyup', () => {
        if (!qrInput.value) {
            wrapper.classList.remove('active');
        }
    })
});