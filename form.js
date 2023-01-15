document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "573243958382";

  let cliente = document.querySelector("#cliente").value;
  let celular = document.querySelector("#celular").value;
  let fecha = document.querySelector("#fecha").value;
  let ciudad = document.querySelector("#ciudad").value;
  let dinero = document.querySelector("#dinero").value;
  let pet250 = document.querySelector("#pet250").value;
  let cantidad250 = document.querySelector("#cantidad250").value;
  let pet400 = document.querySelector("#pet400").value;
  let cantidad400 = document.querySelector("#cantidad400").value;
  let pet600 = document.querySelector("#pet600").value;
  let cantidad600 = document.querySelector("#cantidad600").value;
    let pet15 = document.querySelector("#pet15").value;
  let cantidad15 = document.querySelector("#cantidad15").value;
  let pet25 = document.querySelector("#pet25").value;
  let cantidad25 = document.querySelector("#cantidad25").value;
  let latas = document.querySelector("#latas").value;
  let cantidadlatas = document.querySelector("#cantidadlatas").value;
  let frutales = document.querySelector("#frutales").value;
  let cantidadfrutales = document.querySelector("#cantidadfrutales").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
                 *🔻Golden © Lisp🥤*🔻%0A
  ====== *_Datos del cliente_* ======%0A
	 *Nombre del cliente*: _${cliente}_%0A
	 *Numero de celular*: _${celular}_%0A
	 *Fecha del pedido*: _${fecha}_%0A
	 *Ciudad*: _${ciudad}_%0A
	 *Tipo de pago*: _${dinero}_%0A
 _____________________________________
   ======== *PEDIDO* ========%0A
   *Pet 250ml*: _${pet250}_%0A
   *Cantidad*: _${cantidad250}_%0A
   *Pet 400ml*: _${pet400}_%0A
   *Cantidad*: _${cantidad400}_%0A
   *Pet 600ml*: _${pet600}_%0A
   *Cantidad*: _${cantidad600}_%0A
   *Pet 1.5lts*: _${pet15}_%0A
   *Cantidad*: _${cantidad15}_%0A
   *Pet 2.5lts*: _${pet25}_%0A
   *Cantidad*: _${cantidad25}_%0A
   *Latas*: _${latas}_%0A
   *Cantidad*: _${cantidadlatas}_%0A
   *Frutales*: _${frutales}_%0A
   *Cantidad*: _${cantidadfrutales}_%0A_______________________________%0A%0A%0A%0A
   
   *ENVIAR PEDIDO AL CHAT SIN MODIFICAR👉🏻*`;

  if (cliente === "" || celular === "" || fecha === "" || pet250 === "" || cantidad250 === "" || pet400 === "" || cantidad400 === "" || pet600 === "" || cantidad600 === "" || latas === "" || cantidadlatas === ""  || frutales === "" || cantidadfrutales === "" || pet15 === "" || cantidad15 === "" || cantidad25 === "" || pet25 === "" || ciudad === "" || dinero === "" ) {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

  window.open(url);
});
