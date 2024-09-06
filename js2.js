const ricardo_jaimes_freyre = document.getElementById('ricardo_jaimes_freyre');
const alfonsina_storni = document.getElementById('alfonsina_storni');
const delmira_agustini = document.getElementById('delmira_agustini');
const gabriela_mistral = document.getElementById('gabriela_mistral');



ricardo_jaimes_freyre.addEventListener('click', function() {
    if (ricardo_jaimes_freyre.getAttribute('src') === '/Ricardo_Jaimes_Freyre_1_Normal.jpg') {
      ricardo_jaimes_freyre.src = '/Ricardo_Jaimes_Freyre_2_Normal.jpg';
    } else {
      ricardo_jaimes_freyre.src = '/Ricardo_Jaimes_Freyre_1_Normal.jpg';
    }
  });
  
  alfonsina_storni.addEventListener('click', function() {
    if (alfonsina_storni.getAttribute('src') === '/Alfonsina_Storni_1_Normal.jpg') {
      alfonsina_storni.src = '/Alfonsina_Storni_2_Normal.jpg';
    } else {
      alfonsina_storni.src = '/Alfonsina_Storni_1_Normal.jpg';
    }
  });
  
  delmira_agustini.addEventListener('click', function() {
    if (delmira_agustini.getAttribute('src') === '/Delmira_Agustini_1_Normal.png') {
      delmira_agustini.src = '/Delmira_Agustini_2_Normal.png';
    } else {
      delmira_agustini.src = '/Delmira_Agustini_1_Normal.png';
    }
  });
  
  gabriela_mistral.addEventListener('click', function() {
    if (gabriela_mistral.getAttribute('src') === '/Gabriela_Mistral_1_Normal.jpg') {
      gabriela_mistral.src = '/Gabriela_Mistral_2_Normal.jpg';
    } else {
      gabriela_mistral.src = '/Gabriela_Mistral_1_Normal.jpg';
    }
  });