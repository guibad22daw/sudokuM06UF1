let numSeleccionat = null;
let tileSelected = null;

let errors = 0;

let sudokuFacil = [
    "---26-7-1",
    "68--7--9-",
    "19---45--",
    "82-1---4-",
    "--46-29--",
    "-5---3-28",
    "--93---74",
    "-4--5--36",
    "7-3-18---"
];

let sudokuIntermig = [
    "-2-6-89--",
    "58---97--",
    "----4----",
    "37----5--",
    "6---8---4",
    "--8-----3",
    "----2----",
    "--98---36",
    "7--3-6-9-"
];

let sudokuDificil = [
    "-5-3--1--",
    "--6----5-",
    "---8-----",
    "-6-51----",
    "4-------2",
    "-----9---",
    "--279---3",
    "-----69--",
    "-7---8---"
];

let solucioFacil = [
    "435269781",
    "682571493",
    "197834562",
    "826195347",
    "374682915",
    "951743628",
    "519326874",
    "248957136",
    "763418259"
];

let solucioIntermig = [
    "123678945",
    "584239761",
    "967145328",
    "372461589",
    "691583274",
    "458792613",
    "836924157",
    "219857436",
    "745316892"
]

let solucioDificil = [
    "854372196",
    "326941758",
    "917865234",
    "268517349",
    "491683572",
    "735429861",
    "582794613",
    "143256987",
    "679138425"
];

window.onload = function () {

    document.getElementById('btn_facil').onclick = function () {
        document.getElementById("taulaSudoku").innerHTML = '';
        crearTaulaFacil();
        document.getElementById('numeros').innerHTML = `<button style="margin: auto;" id="btn_facil" type="button" class="btn btn-outline-success" onclick="resoldreTaulaFacil()">Solució</button>`;
    }

    document.getElementById('btn_intermig').onclick = function () {
        document.getElementById("taulaSudoku").innerHTML = '';
        crearTaulaIntermig();
        document.getElementById('numeros').innerHTML = `<button style="margin: auto;" id="btn_facil" type="button" class="btn btn-outline-success" onclick="resoldreTaulaIntermig()">Solució</button>`

    }

    document.getElementById('btn_dificil').onclick = function () {
        document.getElementById("taulaSudoku").innerHTML = '';
        crearTaulaDificil();
        document.getElementById('numeros').innerHTML = `<button id="btn_dificil" type="button" class="btn btn-outline-success" onclick="resoldreTaulaDificil()">Solució</button>`;
    }
}


let celda = 1;
function crearTaulaFacil() {
    celda = 1;
    for (let f = 0; f < 9; f++) {
        let tabla = document.getElementById("taulaSudoku");
        let fila = tabla.insertRow(f);
        for (let c = 0; c < 9; c++, celda++) {
            let columna = fila.insertCell(c);
            columna.innerHTML = celdaCorrecta(celda);
            document.getElementById(`${celda}`).value = sudokuFacil[f][c];
            if (document.getElementById(`${celda}`).value == "-") {
                document.getElementById(`${celda}`).value = null;
                columna.innerHTML = `<input type='text' maxLength='1' class='celda' id='${celda}' onclick='pintarTaula(id)'>`;
            }
        }
    }
}

function pintarTaula(id) {
    let casellaSeleccionada = id;
    for (let i = 1; i <= 81; i++) {
        
        if (Math.ceil(i / 9) == Math.ceil(casellaSeleccionada / 9)) {
            document.getElementById(i).style.background ="#b7f1f7";;
        
        } else if ((Math.trunc(i % 9)) == (Math.trunc(casellaSeleccionada % 9))) {
            document.getElementById(i).style.background ="#b7f1f7";
        }
        
        // else if (funcioQuadrant(i) == true) {
            // document.getElementById(i).style.background = 'red';
        // } 
        else {
            document.getElementById(i).style.background = 'white';
        }
        document.getElementById(i).webkitAnimationPlayState = "running";
    }
}

function crearTaulaIntermig() {
    for (let f = 0; f < 9; f++) {
        let tabla = document.getElementById("taulaSudoku");
        let fila = tabla.insertRow(f);
        for (let c = 0; c < 9; c++) {
            let columna = fila.insertCell(c);
            columna.innerHTML = celdaCorrecta(f, c)
            document.getElementById(`${f}-${c}`).value = sudokuIntermig[f][c];
            if (document.getElementById(`${f}-${c}`).value == "-") {
                document.getElementById(`${f}-${c}`).value = null;
                columna.innerHTML = `<input type='text' maxLength='1' class='celda' id='${f}-${c}'>`;
            }
        }
    }
}

function crearTaulaDificil() {
    for (let f = 0; f < 9; f++) {
        let tabla = document.getElementById("taulaSudoku");
        let fila = tabla.insertRow(f);
        for (let c = 0; c < 9; c++) {
            let columna = fila.insertCell(c);
            columna.innerHTML = celdaCorrecta(f, c)
            document.getElementById(`${f}-${c}`).value = sudokuDificil[f][c];
            if (document.getElementById(`${f}-${c}`).value == "-") {
                document.getElementById(`${f}-${c}`).value = null;
                columna.innerHTML = `<input type='text' maxLength='1' class='celda' id='${f}-${c}'>`;
            }
        }
    }
}

function resoldreTaulaFacil() {
    document.getElementById("taulaSudoku").innerHTML = '';
    for (let f = 0,celda=1; f < 9; f++) {
        let tabla = document.getElementById("taulaSudoku");
        let fila = tabla.insertRow(f);
        for (let c = 0; c < 9; c++, celda++) {
            let columna = fila.insertCell(c);
            columna.innerHTML = `<input type='text' maxLength='1' class='celda' id='${celda} disabled>`;
            columna.innerHTML = celdaCorrecta(celda);
            document.getElementById(`${celda}`).value = solucioFacil[f][c];
            
        }
    }
}

function resoldreTaulaIntermig() {
    document.getElementById("taulaSudoku").innerHTML = '';
    for (let f = 0; f < 9; f++) {
        let tabla = document.getElementById("taulaSudoku");
        let fila = tabla.insertRow(f);
        for (let c = 0; c < 9; c++) {
            let columna = fila.insertCell(c);
            columna.innerHTML = celdaCorrecta(f, c);
            document.getElementById(`${f}-${c}`).value = sudokuIntermig[f][c];
        }
    }
    for (let f = 0; f < 9; f++) {
        for (let c = 0; c < 9; c++) {
            document.getElementById(`${f}-${c}`).value = solucioIntermig[f][c];
        }
    }
}

function resoldreTaulaDificil() {
    document.getElementById("taulaSudoku").innerHTML = '';
    for (let f = 0; f < 9; f++) {
        let tabla = document.getElementById("taulaSudoku");
        let fila = tabla.insertRow(f);
        for (let c = 0; c < 9; c++) {
            let columna = fila.insertCell(c);
            columna.innerHTML = celdaCorrecta(f, c);
            document.getElementById(`${f}-${c}`).value = sudokuDificil[f][c];
        }
    }
    for (let f = 0; f < 9; f++) {
        for (let c = 0; c < 9; c++) {
            document.getElementById(`${f}-${c}`).value = solucioDificil[f][c];
        }
    }
}


function celdaCorrecta(celda) {
    return `<input type='text' maxLength='1' class='celdaCorrecta' id='${celda}' disabled>`;
}

function celdaIncorrecta(celda) {
    return `<input type='text' maxLength='1' class='celdaIncorrecta' id='${celda}'>`;
}

function celdaNormal(celda) {
    return `<input type='text' maxLength='1' class='celda' id='${celda}'>`;
}

function celdaSeleccionada(celda) {
    return `<input type='text' maxLength='1' class='celdaSeleccionada' id='${celda}'>`;
}
