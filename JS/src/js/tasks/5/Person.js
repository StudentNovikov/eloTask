export class Person {
    constructor(fio, numbers, comment) {
        this.fio = fio;
        this.numbers = numbers;
        this.comment = comment;
    }

    send() {
        this.fillInTheForm();
        this.submit();
    }

    fillInTheForm() {
        document.getElementById('fname').value = this.fio;
        this.pressPlusButton();
        this.fillInNumbers();
        document.getElementById('comment').innerHTML = this.comment;
    }

    pressPlusButton() {
        for (let i = 0; i < this.numbers.length - 1; i++) {
            let buttons = document.querySelectorAll('.addNewNumber');
            buttons[buttons.length - 1].click();
        }
    }

    fillInNumbers() {
        for (let i = 0; i < this.numbers.length; i++) {
            document.getElementById(`lnumber${i + 1}`).setAttribute('value', this.numbers[i]);
        }
    }

    submit() {
        document.getElementById('submitBtn').click();
    }
}