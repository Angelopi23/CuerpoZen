function enviarMensajeWhatsApp() {
    var numeroTelefono = "922178554";
    var mensajeTexto = encodeURIComponent("Hola he visto tu publicacion, me encantaria reservar una cita");
    var url = "https://api.whatsapp.com/send?phone=" + numeroTelefono + "&text=" + mensajeTexto;
    window.open(url, "_blank");
  }


  function redirigirInstagram() {
    window.open("https://www.instagram.com/cuerpozen_surco/", "_blank");
  }



  function redirigirFacebook() {
    window.open("https://www.facebook.com/people/Cuerpo-Zen/100091441398409/?mibextid=ZbWKwL", "_blank");
  }


 