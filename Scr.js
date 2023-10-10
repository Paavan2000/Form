document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('survey-form');
    const popup = document.getElementById('popup');
    const popupList = document.getElementById('popup-list');
    const closePopup = document.getElementById('close-popup');
    const resetButton = document.getElementById('reset-btn');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        popupList.innerHTML = ''; // Clear previous popup content

        const formData = new FormData(form);
        formData.forEach((value, key) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${key}: ${value}`;
            popupList.appendChild(listItem);
        });

        popup.style.display = 'block';
    });

    closePopup.addEventListener('click', function () {
        popup.style.display = 'none';
        form.reset();
    });

    resetButton.addEventListener('click', function () {
        form.reset();
    });
});
