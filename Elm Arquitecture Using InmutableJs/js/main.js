/* ---------------------------------- MODELO ----------------------------------*/

let modelo = Immutable.Map({
  numero: 0
});

/* ---------------------------------- UPDATE ----------------------------------*/

const mensaje = Immutable.Map({
  agregar: 'agregar',
  restar: 'restar'
});

const update = function(mod, msj) {

  let newModel;

  switch (msj) {
    case mensaje.get('agregar'):
      newModel = mod.set('numero', mod.get('numero') + 1);
      break;
    case mensaje.get('restar'):
      newModel = mod.set('numero', mod.get('numero') - 1);
      break;
  }

  document.querySelector("#modelo").appendChild(document.createElement("br"));
  document.querySelector("#modelo").appendChild(document.createTextNode(JSON.stringify(mod, null, 2)));

  view(newModel);

  return newModel;

};

/* ---------------------------------- VIEW ----------------------------------*/

const view = function(mod) {
  const textResultado = document.querySelector("#resultado");
  textResultado.innerHTML = mod.get('numero');
};


function agregar() {
  modelo = update(modelo, 'agregar');
}


function restar() {
  modelo = update(modelo, 'restar');
}


(function main() {
  view(modelo);
})();
