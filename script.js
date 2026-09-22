const nimewoPhone = "56937734018";
const nonPwodwi = "Figura de Buda";
const lyenPwodwi = window.location.href; // L ap pran lyen paj la otomatikman

const mesaj = "Hola, estoy interesado en este producto: Figura de Buda ";
const mesajAnkode = encodeURIComponent(mesaj);

document.getElementById("btn-whatsapp").href = `https://wa.me/${nimewoPhone}?text=${mesajAnkode}`;