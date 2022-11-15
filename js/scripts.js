$(document).ready(function () {

    'use strict';

   for (let i = 0; i < productos.length; i++) {

       $('#productos').append(
           '<div class="col-6 col-md-4">' +
               '<div class="sc-product-item">' +
                   '<img class="img-fluid mt-3" data-name="product_image"  src="img/productos/'+ productos[i]['Imagen'] +'" alt="'+ productos[i]['Nombre'] +'">' +
                   '<h4 data-name="product_name" id="nombre">'+ productos[i]['Nombre'] +'</h4>' +
                   '<p data-name="product_desc">'+ productos[i]['Descripcion'] +'</p>' +
                   '<input name="product_price" value="'+ productos[i]['Precio'] +'" type="hidden" >' +
                   '<input name="product_id" value="'+ productos[i] +'" type="hidden" >' +
                   '<div>$ '+ productos[i]['Precio'] +'</div>' +
                   '<button class="sc-add-to-cart btn btn-dark" id= "agregar">Agregar</button>' +
               '</div>' +
           '</div>'
       );
   }

   'use strict';

   for (let i = 0; i < accesorios.length; i++) {

       $('#accesorios').append(
           '<div class="col-6 col-md-4">' +
               '<div class="sc-product-item">' +
                   '<img class="img-fluid mt-3" data-name="product_image"  src="img/productos/'+ accesorios[i]['Imagen'] +'" alt="'+ accesorios[i]['Nombre'] +'">' +
                   '<h4 data-name="product_name" id="nombre">'+ accesorios[i]['Nombre'] +'</h4>' +
                   '<p data-name="product_desc">'+ accesorios[i]['Descripcion'] +'</p>' +
                   '<input name="product_price" value="'+ accesorios[i]['Precio'] +'" type="hidden" >' +
                   '<input name="product_id" value="'+ accesorios[i] +'" type="hidden" >' +
                   '<div>$ '+ accesorios[i]['Precio'] +'</div>' +
                   '<button class="sc-add-to-cart btn btn-dark" id= "agregar">Agregar</button>' +
               '</div>' +
           '</div>'
       );
   }

   'use strict';

   for (let i = 0; i < cafe.length; i++) {

       $('#cafe').append(
           '<div class="col-6 col-md-4">' +
               '<div class="sc-product-item">' +
                   '<img class="img-fluid mt-3" data-name="product_image"  src="img/productos/'+ cafe[i]['Imagen'] +'" alt="'+ cafe[i]['Nombre'] +'">' +
                   '<h4 data-name="product_name" id="nombre">'+ cafe[i]['Nombre'] +'</h4>' +
                   '<p data-name="product_desc">'+ cafe[i]['Descripcion'] +'</p>' +
                   '<input name="product_price" value="'+ cafe[i]['Precio'] +'" type="hidden" >' +
                   '<input name="product_id" value="'+ cafe[i] +'" type="hidden" >' +
                   '<div>$ '+ cafe[i]['Precio'] +'</div>' +
                   '<button class="sc-add-to-cart btn btn-dark" id= "agregar">Agregar</button>' +
               '</div>' +
           '</div>'
       );
   }

  
    $('#smartcart').smartCart({

        cartItemTemplate: '<div class="d-flex">'+
            '<img class="img-fluid" src="{product_image}" />' +
            '<h3 class="h5 list-group-item-heading">{product_name}</h3>' +
        '</div>',

        lang: {
            cartTitle: 'Mis productos',
            checkout: 'Hacer pedido',
            clear: 'Borrar',
            subtotal: 'Subtotal:',
            cartRemove:'×',
            cartEmpty: '¡Todavía no agregaste ningun producto!<br />'
        }
    });


});