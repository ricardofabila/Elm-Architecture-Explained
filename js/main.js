/* ---------------------------------- MODELO ----------------------------------*/

let modelo = {
    numero : 0
};

/* ---------------------------------- UPDATE ----------------------------------*/

const mensaje= {
    agregar : 'agregar',
    restar : 'restar'
};

const update = function (mod, msj) {

    switch (msj){
        case mensaje.agregar:
            mod.numero += 1;
            break;
        case mensaje.restar:
            mod.numero -= 1;
            break;
    }

    document.querySelector("#modelo").appendChild( document.createElement("br") );
    document.querySelector("#modelo").appendChild( document.createTextNode( JSON.stringify(mod, null, 2) ));

    view(mod);

};

/* ---------------------------------- VIEW ----------------------------------*/

const view = function (mod) {
    const textResultado = document.querySelector("#resultado");
    textResultado.innerHTML = mod.numero.toString();
};


function agregar() {
    update(modelo, 'agregar');
}


function restar(){
    update(modelo, 'restar');
}


(function main() {
    view(modelo);
})();
