document.getElementById('generate').addEventListener('click', function() {
    const link = document.getElementById('link').value;
    const qr = new QRious({
        element: document.getElementById('qr-code'),
        value: link,
        size: 200 // You can adjust the size as needed
    });
});