// Implementar lógica de la página

function crearListaProfesores(){
    let selectProfesores = document.getElementById("listaProfes");
    selectProfesores.innerHTML = '<option id="todos" value="todos">Todos</option>';
    let listaProf = [];
    modulos.forEach(mod =>{
        if(!listaProf.find(prof => prof === mod.profesor)){
            listaProf.push(mod.profesor);
        }
    })
    listaProf.forEach(prof =>{
        selectProfesores.innerHTML += `<option id=${prof} value=${prof}>${prof}</option>`;
    })
    document.getElementById("listaProfes").addEventListener("change", montarModulos);
}

function montarModulos(miMatricula){
    let selectProfesores = document.getElementById("listaProfes");
    
    if(selectProfesores.value === "todos"){
        printModulos(modulos,miMatricula);
    } else {
        document.getElementById("contenedor").innerHTML = "";
        let listaModulos = [];
        modulos.forEach(mod => {
            if(selectProfesores.value === mod.profesor){
                listaModulos.push(mod);
            }
        });
        printModulos(listaModulos,miMatricula);
    }

    
}

function printModulos(modulosList,miMatricula){
    let modList = "";
    modulosList.forEach(mod => modList += `
                                        <div class="col">
                                            <div class="card">
                                                <img src="assets/${mod.nombre.toLowerCase()}.png" class="card-img-top"/>
                                                <div class="card-body">
                                                    <h5 class="card-title">${mod.nombre}</h5>
                                                </div>
                                                <button id=${mod.codigo}   class="btn-success">Matricular</button>
                                            </div>
                                        </div>`
                        );
    document.getElementById("contenedor").innerHTML = modList;
    modulosList.forEach(mod =>{
        document.getElementById(mod.codigo).addEventListener("click",function(){agregarModulo(miMatricula,mod.codigo)});
    });
}

function verDatosPersonales(miMatricula){
    miMatricula.verDatosPersonales();
    document.getElementById("formDatos").showModal();
}

function modificarDatosPersonales(miMatricula){
    let dni = document.getElementById("dni").value;
    let nombre = document.getElementById("nombre").value;
    miMatricula.modificarDatosPersonales(dni,nombre);
    document.getElementById("formDatos").close();
}

function agregarModulo(miMatricula,codigoModulo){
    modulos.forEach(mod => {
        if(mod.codigo === codigoModulo){
            miMatricula.anyadeModulo(mod);
        }
    })
    verMatricula(miMatricula);
}

function efectuarMatricula(miMatricula){
    console.log(miMatricula);
    alert(miMatricula);
}

function verMatricula(miMatricula){
    miMatricula.verMatricula();
}

window.onload=()=>{
    crearListaProfesores();
    document.getElementById("btnAbreDatosPersonales").addEventListener("click",function (){verDatosPersonales(miMatricula)});
    document.getElementById("btnCierraDatosPersonales").addEventListener("click",function (){modificarDatosPersonales(miMatricula)});
    document.getElementById("btnEfectuarMatricula").addEventListener("click", function (){efectuarMatricula(miMatricula)})
    let miMatricula = new Matricula();
    montarModulos(miMatricula);
}