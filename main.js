import './style.css'


// renderisacion
document.querySelector('#app').innerHTML = `
  <h1>subir archivos de predial</h1>
  <hr>
  <div class="mt-5 input-group mb-3">
    <input type="file" class="form-control" id="sendFile">
    <label class="input-group-text" for="sendFile">Upload</label>
  </div>
  <div id="btn-subir"></div>
  <div id="mensaje"></div>

`;

document.querySelector('#btn-subir').innerHTML = `
  <button class="btn btn-primary" type="submit">Button</button>
`;

// Declaraciones
const inputFile = document.querySelector('#sendFile');
const viewMsg = document.querySelector('#mensaje');


// Eventos 

inputFile.addEventListener('change', (event) => {

  const file = event.target.files[0];
  console.log(file);
  // subirImagen(file).then(url => imgFoto.src = url);

});

