//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var productos = [];


function showProductsList(array) {

    let htmlContentToAppend = "";
    
    
    for (let i=0; i < array.length; i++ ){
        let product = array[i];
    
    htmlContentToAppend+=`
    <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ product.name +`</h4>
                            
                            <small class="text-muted">` + product.soldCount + ` artículos</small>
                            <small class="text-muted">` + product.cost + ` precio</small>
                        
                        </div>
                        
                        <p class="mb-1">` + product.description + `</p>
                    </div>
                </div>
            </div>
            `
        
        }
        document.getElementById("list-container").innerHTML = htmlContentToAppend;
    
        
    
    };



document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCTS_URL).then(function (result) {
        if(result.status === 'ok') {
            productos = result.data;
            showProductsList(productos);
            
        }
    });

});