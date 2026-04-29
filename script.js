//PER USARE PULSANTE TORNA SU ------------------------------------------------------------------------------------------
function scrollWin() {
	var d = document.querySelector('.main');
	d.style.scrollBehavior="smooth";
	d.scrollTop = 0;
}

//PER FUOCHI D'ARTIFICIO  ----------------------------------------------------------------------------------------------
	const container = document.querySelector('.fireworks-wrapper');
	const titolo = document.querySelector('#title');

	// Inizializzazione con opzioni personalizzate
	const fireworks = new Fireworks.default(container, {
	  autoresize: true,
	  opacity: 0.5,
	  acceleration: 1.05,
	  friction: 0.97,
	  gravity: 1.5,
	  particles: 50,
	  traceLength: 3,
	  explosion: 5,
	  intensity: 30,
	});

	// 1. All'apertura della pagina: spara per 3 secondi e poi si ferma
	fireworks.start();
	setTimeout(() => fireworks.stop(), 3000);

	// 2. Quando passi il mouse sopra il titolo
	titolo.addEventListener('mouseenter', () => {
	  fireworks.start();
	});

	// 3. Quando togli il mouse (opzionale: smette di sparare nuovi colpi)
	titolo.addEventListener('mouseleave', () => {
	  fireworks.stop();
	});


//PER CLASSIFICA LIVE  ---------------------------------------------------------------------------------------------------
	
//INVIARE DATI A GOOGLE SCRIPTS  -----------------------------------------------------------------------------------------
	const url = "https://script.google.com/macros/s/AKfycbwbZDTK--7lS-EAxmR4GF5-hG4nULAzpmDsWxDhYHJVMACx6KwMeGO7GLOfo7ssH7l22w/exec";

	document.getElementById("form").addEventListener("submit", function(e){
	  e.preventDefault();

	  const formData = new FormData(this);

	  fetch(url, {
	    method: "POST",
	    body: formData
	  })
	  
	  .then(r => r.text())
	  .then(() => { 
	 	document.getElementById("msg").innerHTML = "Voto inviato."; 
	 	document.getElementById("form").reset(); 
	 }) 
	 .catch(() => { 
	 	document.getElementById("msg").innerHTML = "Errore invio."; 
	 });
	});

//PER MODIFICARE LE OPTION  ------------------------------------------------------------------------------------------------
	/*const nomi = ["Marco","Luca","Anna"];

	function aggiorna() {
	  let scelto = document.getElementById("primo").value;
	  let secondo = document.getElementById("secondo");

	  secondo.innerHTML = "";

	  nomi.forEach(nome => {
	    if(nome !== scelto){
	      secondo.innerHTML += `<option>${nome}</option>`;
	    }
	  });
	}*/

