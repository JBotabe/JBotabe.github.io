const manuel_gutierrez_najera = document.getElementById('Manuel_gutierrez_najera');
const amado_nervo = document.getElementById('Amado_Nervo');
const enrique_gonzalez_martinez = document.getElementById('Enrique_Gonzalez_Martinez');
const leopoldo_lugones = document.getElementById('Leopoldo_Lugones');


manuel_gutierrez_najera.addEventListener('click', function() {
    if (manuel_gutierrez_najera.getAttribute('src') === '/Manuel_gutierrez_najera_1_Normal.jpg') {
      manuel_gutierrez_najera.src = '/Manuel_gutierrez_najera_2_Normal.jpg';
    } else {
      manuel_gutierrez_najera.src = '/Manuel_gutierrez_najera_1_Normal.jpg';
    }
  });
  
  amado_nervo.addEventListener('click', function() {
    if (amado_nervo.getAttribute('src') === '/Amado_Nervo_1_Normal.jpg') {
      amado_nervo.src = '/Amado_Nervo_2_Normal.jpg';
    } else {
      amado_nervo.src = '/Amado_Nervo_1_Normal.jpg';
    }
  });
  
  enrique_gonzalez_martinez.addEventListener('click', function() {
    if (enrique_gonzalez_martinez.getAttribute('src') === '/Enrique_Gonzalez_Martinez_1_Normal.jpg') {
      enrique_gonzalez_martinez.src = '/Enrique_Gonzalez_Martinez_2_Normal.jpg';
    } else {
      enrique_gonzalez_martinez.src = '/Enrique_Gonzalez_Martinez_1_Normal.jpg';
    }
  });
  
  leopoldo_lugones.addEventListener('click', function() {
    if (leopoldo_lugones.getAttribute('src') === '/Leopoldo_Lugones_1_Normal.jpg') {
      leopoldo_lugones.src = '/Leopoldo_Lugones_2_Normal.jpg';
    } else {
      leopoldo_lugones.src = '/Leopoldo_Lugones_1_Normal.jpg';
    }
  });