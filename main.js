import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <h1>subir archivos de predial</h1>
  <hr>
  <div class="mt-5 input-group mb-3">
    <input type="file" class="form-control" id="inputGroupFile02">
    <label class="input-group-text" for="inputGroupFile02">Upload</label>
  </div>
  <div id="btn-subir"></div>
`;

document.querySelector('#btn-subir').innerHTML = `
  <button class="btn btn-primary" type="submit">Button</button>
`

// setupCounter(document.querySelector('#counter'))
