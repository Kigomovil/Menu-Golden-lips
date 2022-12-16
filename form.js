document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "573243958382";

  let cliente = document.querySelector("#cliente").value;
  let celular = document.querySelector("#celular").value;
  let fecha = document.querySelector("#fecha").value;
  let hora = document.querySelector("#hora").value;
  let ubicacion = document.querySelector("#ubicacion").value;
  let ciudad = document.querySelector("#ciudad").value;
  let dinero = document.querySelector("#dinero").value;
  let pet250 = document.querySelector("#pet250").value;
  let cantidad250 = document.querySelector("#cantidad250").value;
  let pet400 = document.querySelector("#pet400").value;
  let cantidad400 = document.querySelector("#cantidad400").value;
  let pet600 = document.querySelector("#pet600").value;
  let cantidad600 = document.querySelector("#cantidad600").value;
  let latas = document.querySelector("#latas").value;
  let cantidadlatas = document.querySelector("#cantidadlatas").value;
  let frutales = document.querySelector("#frutales").value;
  let cantidadfrutales = document.querySelector("#cantidadfrutales").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
                 *_🔻Golden © Lisp🥤_*🔻%0A
         *_Datos del cliente_*%0A%0A%0A
	 *_Nombre del cliente_*: ${cliente}%0A
	 *_Numero de celular_*: ${celular}%0A
	 *_Fecha del pedido_*: ${fecha}%0A
	 *_Hora del pedido_*: ${hora}%0A
	 *_Ubicación exacta_*: ${ubicacion}%0A
	 *_Ciudad_*: ${ciudad}%0A
	 *_Tipo de pago_*: ${dinero}%0A%0A
	 ------------------------------------------------
                    *🔻PEDIDO*%0A%0A
   *_Pet 250ml_*: _${pet250}_%0A
   *_Cantidad_*: _${cantidad250}_%0A
   *_Pet 400ml_*: _${pet400}_%0A
   *_Cantidad_*: _${cantidad400}_%0A
   *_Pet 600ml_*: _${pet600}_%0A
   *_Cantidad_*: _${cantidad600}_%0A
   *_Latas_*: _${latas}_%0A
   *_Cantidad_*: _${cantidadlatas}_%0A
   *_Frutales_*: _${frutales}_%0A
   *_Cantidad_*: _${cantidadfrutales}_%0A%0A%0A%0A%0A
   *ENVIAR PEDIDO AL CHAT SIN MODIFICAR👉🏻*`;

  if (cliente === "" || celular === "" || fecha === "" || hora === "" || pet250 === "" || cantidad250 === "" || pet400 === "" || cantidad400 === "" || pet600 === "" || cantidad600 === "" || latas === "" || cantidadlatas === ""  || frutales === "" || cantidadfrutales === "" || ciudad === "" || dinero === "" ) {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

  window.open(url);
});
