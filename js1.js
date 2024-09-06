const ruben_dario = document.getElementById('ruben_dario');
const jose_marti = document.getElementById('jose_marti');
const julian_del_casal = document.getElementById('julian_del_casal');
const jose_asuncion_silva = document.getElementById('jose_asuncion_silva');
ruben_dario.addEventListener('click', function() {
  if (ruben_dario.getAttribute('src') === '/Ruben_dario_1_Normal.jpg') {
    ruben_dario.src = '/Ruben_dario_2_Normal.jpg';
  } else {
    ruben_dario.src = '/Ruben_dario_1_Normal.jpg';
  }
});

jose_marti.addEventListener('click', function() {
  if (jose_marti.getAttribute('src') === '/Jose_Marti_1_Normal.jpg') {
    jose_marti.src = '/Jose_Marti_2_Normal.jpg';
  } else {
    jose_marti.src = '/Jose_Marti_1_Normal.jpg';
  }
});

julian_del_casal.addEventListener('click', function() {
  if (julian_del_casal.getAttribute('src') === '/Julian_del_Casal_1_Normal.jpg') {
    julian_del_casal.src = '/Julian_del_Casal_2_Normal.jpg';
  } else {
    julian_del_casal.src = '/Julian_del_Casal_1_Normal.jpg';
  }
});

jose_asuncion_silva.addEventListener('click', function() {
  if (jose_asuncion_silva.getAttribute('src') === '/Jose_asuncion_silva_1_Normal.jpg') {
    jose_asuncion_silva.src = '/Jose_asuncion_silva_2_Normal.jpg';
  } else {
    jose_asuncion_silva.src = '/Jose_asuncion_silva_1_Normal.jpg';
  }
});
