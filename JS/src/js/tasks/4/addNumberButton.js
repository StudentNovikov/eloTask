let counter = 1;
document.querySelector('#numberSection').addEventListener('click', (e) => {

    if (e.target.classList.contains("addNewNumber")) {
        counter++;
        e.target.style.display = 'none';
        const newTelephone = `
        <label for="lnumber${counter}">Телефон ${counter}:</label>
        <input type="number" value="" id="lnumber${counter}" name="lnumber" placeholder="Введите телефон">
        <button class="addNewNumber">+</button>
    `;
        const node = document.createElement('div');
        node.innerHTML = newTelephone
        document.getElementById('numberSection').appendChild(node);
        e.preventDefault();
    }
});
