const horas = document.getElementById('horas'); // Seleciona o span de Horas
const minutos = document.getElementById('minutos'); // Seleciona o span de Minutos
const segundos = document.getElementById('segundos'); // Seleciona o span de Segundos

const relogio = setInterval(function time() { // setInterval() serve pra chamar uma função a cada determinado tempo
    let dateToday = new Date(); // Cria um objeto, atriubui a variavel dateToday com o valor atual da data e hora do sistema
    let hr = dateToday.getHours(); // Seleciona a hora atual
    let min = dateToday.getMinutes(); // Seleciona o minuto atual
    let seg = dateToday.getSeconds(); // Seleciona o segundo atual

    // Isso serve para caso o digito seja menor que 10, a função concatene 0 + o tempo atual. 9 min => 09 min
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (seg < 10) seg = '0' + seg;

    // Insere os dados recolhidos no texto dentro de cada span
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
}, 1000) // Esse 1000 serve para que função seja realizada a cada 1 segundo