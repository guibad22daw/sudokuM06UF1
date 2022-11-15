// Comencem defininint tant els sudokus predeterminats com les solucions mitjançant arrays.
let sudokuFacil1 = ["---26-7-1", "68--7--9-", "19---45--", "82-1---4-", "--46-29--", "-5---3-28", "--93---74", "-4--5--36", "7-3-18---"];
let sudokuFacil2 = ["984-31-72", "61---7---", "257--98--", "3---6--1-", "---37-92-", "--9--5---", "-3---6---", "-45-18-96", "1967--28-"];
let sudokuFacil3 = ["--16-935-", "-------9-", "-9-5-3--4", "1-6--42-3", "---------", "8-91--5-6", "3--4-5-2-", "67-------", "--58-27--"];
let sudokuIntermig1 = ["-2-6-89--", "58---97--", "----4----", "37----5--", "6---8---4", "--8-----3", "----2----", "--98---36", "7--3-6-9-"];
let sudokuIntermig2 = ["-4326----", "--6-----3", "-891-5---", "-3-6----4", "47--1--38", "8----4-7-", "---7-618-", "1-----9--", "----9132-"];
let sudokuIntermig3 = ["8-69----4", "--------7", "973-5--8-", "-2-3-1---", "3---7---2", "---4-2-1-", "-6--2-7-1", "7-----9--", "2--7--4-8"]
let sudokuDificil1 = ["-5-3--1--", "--6----5-", "---8-----", "-6-51----", "4-------2", "-----9---", "--279---3", "-----69--", "-7---8---"];
let sudokuDificil2 = ["-2-------", "---6----3", "-74-8----", "-----3--2", "-8--4--1-", "6--5-----", "----1-78-", "5----9---", "-------4-"];
let sudokuDificil3 = ["5--9---6-", "----8-42-", "7-8--69--", "--5-----6", "-6--3--4-", "1-----5--", "-826--3--", "65--4----", "-----56-8"];

let solucioFacil1 = ["435269781", "682571493", "197834562", "826195347", "374682915", "951743628", "519326874", "248957136", "763418259"];
let solucioFacil2 = ["984531672", "613827549", "257649831", "378962415", "561374928", "429185763", "832496157", "745218396", "196753284"];
let solucioFacil3 = ["481629357", "563748192", "297513864", "156984273", "734256918", "829137546", "318475629", "672391485", "945862731"];
let solucioIntermig1 = ["123678945", "584239761", "967145328", "372461589", "691583274", "458792613", "836924157", "219857436", "745316892"];
let solucioIntermig2 = ["543267891", "216849753", "789135462", "932678514", "475912638", "861354279", "394726185", "127583946", "658491327"];
let solucioIntermig3 = ["856917234", "142638597", "973254186", "524361879", "318579642", "697482315", "469823751", "785146923", "231795438"];
let solucioDificil1 = ["854372196", "326941758", "917865234", "268517349", "491683572", "735429861", "582794613", "143256987", "679138425"];
let solucioDificil2 = ["126437958", "895621473", "374985126", "457193862", "983246517", "612578394", "269314785", "548769231", "731852649"];
let solucioDificil3 = ["514923867", "396187425", "728456931", "235814796", "867539142", "149762583", "982671354", "651348279", "473295618"];

// Mitjançant bucles "for", creem arrays del 1 al 9 (que són la quantitat de quadrants que hi ha). Per cada quadrant que hi ha, s'emmagatzemen la posició de les cel·les que te cada quadrant.
for (let i = 1, x=0; i <= 3; i++,x+=3) this["square"+i] = [1+x, 2+x, 3+x, 10+x, 11+x, 12+x, 19+x, 20+x, 21+x];      // square1, square2, square 3
for (let i = 4, x=0; i <= 6; i++,x+=3) this["square"+i] = [28+x, 29+x, 30+x, 37+x, 38+x, 39+x, 46+x, 47+x, 48+x];   // square4, square5, square 6
for (let i = 7, x=0; i <= 9; i++,x+=3) this["square"+i] = [55+x, 56+x, 57+x, 64+x, 65+x, 66+x, 73+x, 74+x, 75+x];   // square7, square8, square 9

// Declarem arrays de variables per optimitzar el codi i altres variables que s'utilitzaran posteriorment
let squares = [square1, square2, square3, square4, square5, square6, square7, square8, square9];
let sudokuFacil = [sudokuFacil1, sudokuFacil2, sudokuFacil3];
let sudokuIntermig = [sudokuIntermig1, sudokuIntermig2, sudokuIntermig3];
let sudokuDificil = [sudokuDificil1, sudokuDificil2, sudokuDificil3];
let solucioFacil = [solucioFacil1, solucioFacil2, solucioFacil3];
let solucioIntermig = [solucioIntermig1, solucioIntermig2, solucioIntermig3];
let solucioDificil = [solucioDificil1, solucioDificil2, solucioDificil3];
let botoFacil = 0, botoIntermig = 0, botoDificil = 0, errors = 0,  celda = 1, n = 0;
let dificultats = ["Fàcil","Intermig","Difícil"];

// Afegim un event que s'acciona quan tots els recursos dins de la funció han acabat de carregar.
window.onload = function () {
    document.getElementById('btn_facil').onclick = function () {     // Funció que s'acciona quan es prem el botó per escollir la dificultat fàcil.
        botoFacil = 1; botoDificil = 0; botoIntermig = 0;   // Assignem una variable que ens ajudarà a optimitzar codi de forma que no haguem de crear una funció per crear la taula, resoldre-la i etc. per cada dificultat.
        startJoc();         // S'executa una funció que conté altres funcions i codi que s'havia de repetir per cada dificultat, per això ho hem posat en una funció per fer el codi més eficient.
    }

    document.getElementById('btn_intermig').onclick = function () {
        botoFacil = 0; botoDificil = 0; botoIntermig = 1;
        startJoc();
    }

    document.getElementById('btn_dificil').onclick = function () {
        botoFacil = 0; botoDificil = 1; botoIntermig = 0;
        startJoc();
    }
}

 // Funció crearTaula. Genera la taula i introdueix els valors predeterminats segons la dificultat que s'hagi escollit.
function crearTaula() {
    celda = 1;
    n = Math.floor(Math.random() * 3);      // Generem un número aleatori entre 1 i 3. Això es deu a que hem definit tres sudokus diferents per cada nivell dificultat, de forma que no es faci repetitiu.
    if (botoFacil) { sud = sudokuFacil[n] } else if (botoIntermig) { sud = sudokuIntermig[n] } else if (botoDificil) { sud = sudokuDificil[n] }     // Comprovem quina dificultat s'ha seleccionat
                                                                                                                                                    // i seleccionem un sudoku  (sense completar) aleatori de l'array de variables que hem creat
                                                                                                                                                    // previament
    for (let f = 0; f < 9; f++) {       //  Generem un bucle va de 0 a 9 perquè son el numero de files que té un sudoku.
        let taula = document.getElementById("taulaSudoku"); 
        let fila = taula.insertRow(f);      //  Assignem a una variable el metode insertRow. Aquesta línea de codi inserta fila a la taula per cada iteració del loop for que hem mencionat abans.
        for (let c = 0; c < 9; c++, celda++) {      // Creem un altre bucle que iterarà  per cada columna del sudoku
            let columna = fila.insertCell(c);       // Assignem a la variable column el metode insertCell, que ens permetrà inserir una Cel·la per cada posició de la columna.
            columna.innerHTML = celdaCorrecta(celda);   // Per cada posició de la columna, introduïm el que els retorna la funció celdaCorrecta(), a la qual li passem la posició de la cel·la per la que està iterant.
                                                        // La funció celdaCorrecta retorna una línea de codi HTML que coloca a cada casella un Id que defineix la seva posició dins del sudoku, de forma que podem modificar el seu valor posteriorment.
                                                        // Aquesta cel·la però, serà diferent a la resta ja que no permetrem que el client la pugui modificar.
            document.getElementById(`${celda}`).value = sud[f][c];      // Com que hem colocat un Id per cada cel·la, el que fem es colocar al valor de cada input el número que li correspon segons el sudoku predefinit.
            if (document.getElementById(`${celda}`).value == "-") {    // Comparem el valor assignat a la línea anterior amb el valor que li correspon al sudoku que ve predefinit, 
                document.getElementById(`${celda}`).value = null;     //  de forma que si té un '-', coloquem un valor "null" que serà el que haurà d'entrar l'usuari.
                columna.innerHTML = `<input type='text' maxLength='1' class='celda' id='${celda}' onfocus='pintaTaula(id)' autocomplete='off'>`;   // Com que aquesta cel·la és la que haurà d'omplir l'usuari,
                // la modifiquem perque sigui diferent a la que ja ve predefinida i afegim un event "onfocus" per quan es cliqui executi la funció pintaTaula(id) que la explicarém en les pròximes línies.
            }
        }
    }
    document.getElementById('errors').innerText = '';   // Amb aquesta linea buidem el contingut del div per tal que qualsevol text que es generi posteriorment, s'esborri al generar la taula de nou.
}

// Funció crearTaula. Pinta els cuadrants, files i columnes que seleccionem.
function pintaTaula(id) {
    let casellaSeleccionada = id;
    for (let i = 1; i <= 81; i++) {     // Bucle per iterar per les 81 caselles del sudoku
        pintaFilaiColumna(casellaSeleccionada, i);      // Funció pintar fila i columna del id.
        pintaQuadrant(casellaSeleccionada)      // Funció pintar quadrant del id.
    }
}

// Funció pintaFilaiColumna. Pinta les files i columnes de la id que li passem per paràmetre.
function pintaFilaiColumna(casellaSeleccionada, i) {
    if (Math.ceil(i / 9) == Math.ceil(casellaSeleccionada / 9)) {       // Fem un arrodoniment de la posició de la casella del bucle entre 9 i la igualem a l'arrodoniment de la divisió de la casella seleccionada entre 9.
                                                                        // Fent això, el que obtenim és pintar la fila de la casella que tenim seleccionada.
        document.getElementById(i).style.background = "#caf2fa";       // Pintem el color de les caselles de la fila.

    } else if ((Math.trunc(i % 9)) == (Math.trunc(casellaSeleccionada % 9))) {      // Fem el mateix que abans pero utilitzant el metode .trunc, que el que fa és agafar la part sencera del número sense tenir en compte els decimals,
                                                                                    // d'aquesta forma, aconseugim pintar la columna a la que pertany la casella que tenim seleccionada.
        document.getElementById(i).style.background = "#caf2fa";                   // Pintem el color de les caselles de la columna.
    } else {     // Si no correspon a la fila o columna pintem les caselles restants de blanc (predeterminat).
        document.getElementById(i).style.background = "white"; 
        
    }
}

// Funció pintaQuadrant. Aquesta funció pinta el quadrant del qual forma part la casella amb el id que li passem per paràmetre.
function pintaQuadrant(id) {   
    for (square of squares) {   // Iterem sobre l'array de cariables creada al principi del codi.
        if (square.includes(parseInt(id))) {    // Sí l'array conté l'id, iterem per tots els id de l'array del quadrant que conté l'ID i els pintem del color seleccionat.
            for (let x = 0; x < square.length; x++) document.getElementById(square[x]).style.background = "#caf2fa";
        }
    }
}


// Funció resoldreTaula. Aquesta funció resoldrá la taula, pararà el cronometre i mostrarà a l'usuari que el joc ha acabat.
function resoldreTaula() {
    stopCronometre(); // Parem el cronometre
    document.getElementById('numeros').innerHTML = ''; // Posem la id del html numeros a null.
    if(minuts == 0) document.getElementById('errors').innerText = `Felicitats! Has completat el sudoku en ${segons} segon/s.`;  // Sí s'ha solucionat en menys d'1 minut, mostrarem a l'usuari el temps trigat en segons.
    else document.getElementById('errors').innerHTML = `Felicitats! Has completat el sudoku en ${minuts} minut/s i ${segons} segon/s.`;     // Si supera el minut mostrarà també els minuts.
    if (botoFacil) { res = solucioFacil[n] } else if (botoIntermig) { res = solucioIntermig[n] } else if (botoDificil) { res = solucioDificil[n] }  // Condició per fer que la variable res sigui una solució diferent segons la dificultat escollida.
    document.getElementById("taulaSudoku").innerHTML = '';     // Reiniciem taulaSudoku.
    for (let f = 0, celda = 1; f < 9; f++) {    // Tornem a crear la taula pero aquest cop introduïnt els valors de l'array del sudokou solucionat.
        let taula = document.getElementById("taulaSudoku");
        let fila = taula.insertRow(f);
        for (let c = 0; c < 9; c++, celda++) {
            let columna = fila.insertCell(c);
            columna.innerHTML = `<input type='text' maxLength='1' class='celda' id='${celda} disabled>`; // Fem que la casella sigui disabled
            columna.innerHTML = celdaCorrecta(celda); // Fem que la casella sigui una casella Resolta
            document.getElementById(`${celda}`).value = res[f][c]; // Fem que el value de la casella sigui igual que a la de l'array solucionat.
        }
    }
}

// Funció mostraErrors. Mostra els errors quan es prem el botó "mostrar errors", canviant així el fons de les caselles incorrectes i posant les caselles correctes en blanc.
function mostraErrors() {
    let valorCelda, sol;    // Declarem les variables.
    celda = 1; errors = 0;
    if (botoFacil) { sol = solucioFacil[n] } else if (botoIntermig) { sol = solucioIntermig[n] } else if (botoDificil) { sol = solucioDificil[n] }   // Mateix procediment per saber quina dificultat s'ha escollit.
    for (let f = 0; f < 9; f++) {   // Recorrem les caselles amb 2 bucles for.
        for (let c = 0; c < 9; c++, celda++) {
            valorCelda = document.getElementById(`${celda}`).value;    // Assignem la variable valorCelda per obternir el valor de la casella per la que itera en aquell moment.
            if (valorCelda == sol[f][c]){       // Si valorCelda és igual al valor del array corresponent del solucionari canviem l'estil per tal que la casella sigui "correcta".
                document.getElementById(`${celda}`).style.background = 'white';     // Posem el fons de la casella de color blanc.
                document.getElementById(`${celda}`).style.fontWeight = 'bold';      // Posem el tipus de lletra en negreta perquè destaqui.
                document.getElementById(`${celda}`).style.color = 'black';
                document.getElementById(`${celda}`).disabled = true;                // Posem la casella en disabled perquè l'usuari no pugui modificar una resposta que és correcta.
            } 
            else {          // Si el valor no coincideix amb el de l'array de la solució, canviem el fons de la casella a vermell per tal que es marqui com "incorrecte".
                document.getElementById(`${celda}`).style.background = '#ff9d96';
                errors++;  // Sumem errors + 1.
            }
            
        }
    }
    if(errors == 0) resoldreTaula();    // Si es prem el botó de mostrar errors i hi ha 0, executem la funció resoldreTaula() directament.
    else {      // Si hi ha errors, ho mostrarà a l'usuari mitjançant la següent línia de codi.
        document.getElementById('errors').innerHTML = `<label id="errors" class="errors">Tens ${errors} errors.</label>`;
    }
}

let minuts = 0, segons = 0, running = 0;    // Instanciem les variables
// Funció startCronometre. Inicia el cronometre 
function startCronometre() {
    clearInterval(running);         // Es posa l'interval a 0, de forma que cada segon dura 1 segon. Sense aquesta línea, cada cop que s'iniciés el cronómetre, l'interval incrementaria i els segons passarien més ràpid,
    minuts = 0, segons = 0;   // Posem les variables a 0.
    document.getElementById("top").innerHTML += `<div class="cronometre"><span id="minuts">00</span>:<span id="segons"/>00</span></div>`;   // Afegim el rellotge per HTML.
    const idMinuts = document.getElementById("minuts");  // Definim com a constants el valor actual que tenen els minuts i els segons al HTML.
    const idSegons = document.getElementById("segons");
    const sumarMinut = () => { if (minuts < 99) minuts++; }  // Declarem una funció que fa que mentre no s'arribi a 99 minuts (és a dir el limit), els minuts es sumin.
    const incrementar = () => {     // Declarem una altra funció que el que fa és incrementar el valor dels segons.
        if (segons === 59) { segons = 0; sumarMinut(); }  // Si segons arriba a 59, es posen a 0 i executem la funció sumarMinut.
        else segons++;     // Si no arriba a 59 segons, increntem segons + 1.
        if (segons < 10) idSegons.innerHTML = `0${segons}`;     // Mentre el comptador no arribi a 10 segons, introduim un 0 al davant perquè en canvi de que es vegi com 00:5 es vegi com 00:05.
        else idSegons.innerHTML = segons;       // Quan passen 10 segons, ja no cal afegir un 0 davant.
        if (minuts < 10) idMinuts.innerHTML = `0${minuts}`;     // Fem exactament el mateix amb els minuts.
        else idMinuts.innerHTML = minuts;    
    }
    running = setInterval(incrementar, 1000);     // Definim una variable que el que fa es executar la funció "incrementar" cada 1 segon, de forma que es sincronitza amb un temporitzador real.
}

// Funció stopCronometre. Pararà el cronometre.
function stopCronometre() {
    clearInterval(running);     // Atura l'interval que hem creat previament
    running = null;     // La variable assignada a l'interval passa a ser null.
}

// Funció mostraBottom. Ens mostra els botons de solució i mostrar errors.
function mostraBottom() {
    document.getElementById('numeros').innerHTML = `<button id="btn_solucio" type="button" class="btn btn-success" onclick="resoldreTaula()">Solució</button>`;     // Crea el botó solució al div "numeros".
    document.getElementById('numeros').innerHTML += `<button id="btn_mostraErrors" type="button" class="btn btn-danger" onclick="mostraErrors()">Mostrar errors</button>`;  // Afegeix el botó Mostrar Errors darrere de solucio al div "numeros".
}

// Canvia la clase d'una casella a "celdaCorrecta" per aplicar-li altres propietats css, de forma que es posa en "disabled" perquè no es pugui editar.
function celdaCorrecta(celda) {
    return `<input type='text' maxLength='1' class='celdaCorrecta' id='${celda}' disabled>`;
}

// Funció startJoc. Comença la partida, crea la taula, posa el cronometre en marxa i mostra els botons de resoldre i mostrar errors.
function startJoc() {
    document.getElementById("taulaSudoku").innerHTML = '';  // Buida la taula de forma que comenci de nou.
    if (botoFacil) { dificultat = dificultats[0] } else if (botoIntermig) { dificultat = dificultats[1] } else if (botoDificil) { dificultat = dificultats[2] }  // Escollim d'una llista el text que de la dificultat segonms quina s'hagi escollit.
    document.getElementById("top").innerHTML = `<h3 class="dificultat" id="dificultat">${dificultat}</h3>`; // Mostrem la dificultat escollida
    crearTaula();   // Creem la taula.
    startCronometre();  // Posem cronometre en marxa.
    mostraBottom();     // Mostrem botons de Solució i Mostrar Errors.
}