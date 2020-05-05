let counter = 1;
document.querySelector('#fioNumberSection').addEventListener('click', (e) => {
    if (e.target.classList.contains("addNewNumber")) {
        e.target.style.display = 'none';
        const newTelephone = `<div>
        <label for="lnumber">Телефон ${++counter}:</label>
        <input type="number" id="lnumber" name="lnumber" placeholder="Введите телефон">
        <button class="addNewNumber">+</button>
    </div>`;
        document.getElementById('fioNumberSection').innerHTML += newTelephone;
    }
});
