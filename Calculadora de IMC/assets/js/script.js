const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    document.getElementById('infos').classList.remove('hidden');

    value.classList.add('attention');

    if (bmi < 18.5) {
        description = 'Está abaixo do peso!';
    } else if (bmi >= 18.5 && bmi < 25) {
        description = 'Está no peso ideal!';
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (bmi >= 25 && bmi < 30) {
        description = 'Está no sobrepeso!';
    } else if (bmi >= 30 && bmi < 35) {
        description = 'Está com obesidade moderada!';
    } else if (bmi >= 35 && bmi < 40) {
        description = 'Está com obesidade severa!';
    } else {
        description = 'Está com obesidade mórbida!';
    }

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
});
