const numeroAleatorio = Math.floor(Math.random() * 7) + 1;

const primario = {
  1: '#FF69B4', // Rojo
  2: '#34C759', // Verde
  3: '#2196F3', // Azul
  4: '#F7DC6F', // Amarillo
  5: '#FFC0CB', // Magenta
  6: '#00BFFF', // Cyan
  7: '#333333' // Negro
};

const secundario = {
  1: '#FFC5C5', // Rojo secundario
  2: '#8BC34A', // Verde secundario
  3: '#87CEEB', // Azul secundario
  4: '#F2C464', // Amarillo secundario
  5: '#FF99CC', // Magenta secundario
  6: '#66CCCC', // Cyan secundario
  7: '#555555' // Negro secundario
};

const root = document.documentElement;
root.style.setProperty('--primario', primario[numeroAleatorio]);
root.style.setProperty('--secundario', secundario[numeroAleatorio]);