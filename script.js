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


//INVIARE DATI A GOOGLE SCRIPTS  -----------------------------------------------------------------------------------------
	const url = "https://script.google.com/macros/s/AKfycbxi2ilqNcszu4V3HVdf5WhuvlZk0Vc7gKlAsIabKv8TDt8ihFd0KDQ5SPdco1YQT2Mhow/exec";

	document.getElementById("form").addEventListener("submit", function(e){
	  e.preventDefault();

	  const formData = new FormData(this);

	  fetch(url, {
	    method: "POST",
	    body: formData,
	    mode: "no-cors"
	  })
	  .then(() => {
	    window.location.href = "grazie.html";
	    document.getElementById("form").reset();
	  })
	});

//PER MODIFICARE LE OPTION  ------------------------------------------------------------------------------------------------
	const selects = document.querySelectorAll('.inputbase');

	selects.forEach(select => {
	  select.addEventListener('change', () => {
	    // 1. Prendo tutti i valori attualmente selezionati (escludendo quelli vuoti)
	    const valoriSelezionati = Array.from(selects)
	      .map(s => s.value)
	      .filter(v => v !== "");

	    // 2. Ciclo su ogni select e su ogni sua opzione
	    selects.forEach(s => {
	      Array.from(s.options).forEach(option => {
	        if (option.value === "") return; // Salta il placeholder

	        // 3. Disabilita l'opzione se è già scelta in UN ALTRO menu
	        // Ma lasciala attiva se è quella scelta nel menu corrente
	        const giaSceltaAltrove = valoriSelezionati.includes(option.value);
	        const sceltaInQuestoMenu = s.value === option.value;

	        option.disabled = giaSceltaAltrove && !sceltaInQuestoMenu;
	      });
	    });
	  });
	});
