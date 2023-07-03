// script.js

document.getElementById('numBands').addEventListener('change', toggleBands);
document.getElementById('calculate-btn').addEventListener('click', calculateResistance);

function toggleBands() {
  const numBands = document.getElementById('numBands').value;
  const bandContainer = document.getElementById('bandContainer');
  const band3 = document.getElementById('band3');
  const band4 = document.getElementById('band4');

  if (numBands === '2') {
    band3.style.display = 'none';
    band4.style.display = 'none';
  } else if (numBands === '3') {
    band3.style.display = 'block';
    band4.style.display = 'none';
  } else if (numBands === '4') {
    band3.style.display = 'block';
    band4.style.display = 'block';
  }
}

function calculateResistance() {
  const numBands = document.getElementById('numBands').value;
  let resistanceValue = '';
  let toleranceValue = '';

  if (numBands === '2') {
    const band1Color = document.getElementById('band1').value;
    const band2Color = document.getElementById('band2').value;

    resistanceValue = `Nilai Resistor: ${calculateResistanceValue(band1Color, band2Color)} ohm`;
    toleranceValue = 'Toleransi: ±5%';
  } else if (numBands === '3') {
    const band1Color = document.getElementById('band1').value;
    const band2Color = document.getElementById('band2').value;
    const band3Color = document.getElementById('band3').value;

    resistanceValue = `Nilai Resistor: ${calculateResistanceValue(band1Color, band2Color, band3Color)} ohm`;
    toleranceValue = 'Toleransi: ±10%';
  } else if (numBands === '4') {
    const band1Color = document.getElementById('band1').value;
    const band2Color = document.getElementById('band2').value;
    const band3Color = document.getElementById('band3').value;
    const band4Color = document.getElementById('band4').value;

    resistanceValue = `Nilai Resistor: ${calculateResistanceValue(band1Color, band2Color, band3Color, band4Color)} ohm`;
    toleranceValue = 'Toleransi: ±1%';
  }

  const result = `${resistanceValue}, ${toleranceValue}`;

  document.getElementById('result').textContent = result;
}

function calculateResistanceValue(...colors) {
  // Kode logika untuk menghitung nilai resistor berdasarkan warna pita
  // ...
  // Return nilai resistor yang dihitung
}
