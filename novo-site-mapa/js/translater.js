var arrLang = {
  ptbr,
  en,
  es
};
$(function () {
  $('.translate').click(function () {
    var idiomaEscolhido = $(this).attr('key');
    $('[translate]').each(function (index, element) {
      $(this).text(arrLang[idiomaEscolhido][$(this).attr('translate')]);
    });
    mudarBandeira(this);
  });
});

function mudarBandeira (tagBandClicada){

  console.log($(tagBandClicada).attr('key'));

  switch ($(tagBandClicada).attr('key')) {
    case "ptbr":
        $('#band1').attr({"href":"#pt-br", "key":"ptbr"});
        $('#band2').attr({"href":"#en", "key":"en"});
        $('#band3').attr({"href":"#es", "key":"es"});
    
        $('#image-band1').attr("src","img/icons/flag-brazil.png");
        $('#image-band2').attr("src","img/icons/flag-united.png");
        $('#image-band3').attr("src","img/icons/flag-spain.png");

        //tradução do formulario
        $('#name').attr("placeholder","Nome");
        $('#phone').attr("placeholder","Telefone");
        $('#email').attr("placeholder","E-mail");
        $('#subject').attr("placeholder","Assunto");
        $('#message').attr("placeholder","Mensagem");

        break;
    case "en":
        $('#band1').attr({"href":"#en", "key":"en"});
        $('#band2').attr({"href":"#pt-br", "key":"ptbr"});
        $('#band3').attr({"href":"#es", "key":"es"});
    
        $('#image-band1').attr("src","img/icons/flag-united.png");
        $('#image-band2').attr("src","img/icons/flag-brazil.png");
        $('#image-band3').attr("src","img/icons/flag-spain.png");

        //tradução do formulario
        $('#name').attr("placeholder","Name");
        $('#phone').attr("placeholder","Phone");
        $('#email').attr("placeholder","E-mail");
        $('#subject').attr("placeholder","Subject");
        $('#message').attr("placeholder","Message");

        break;
    case "es":
        $('#band1').attr({"href":"#es", "key":"es"});
        $('#band2').attr({"href":"#pt-br", "key":"ptbr"});
        $('#band3').attr({"href":"#en", "key":"en"});
    
        $('#image-band1').attr("src","img/icons/flag-spain.png");
        $('#image-band2').attr("src","img/icons/flag-brazil.png");
        $('#image-band3').attr("src","img/icons/flag-united.png");

        //tradução do formulario
        $('#name').attr("placeholder","Nombre");
        $('#phone').attr("placeholder","Telefono");
        $('#email').attr("placeholder","E-mail");
        $('#subject').attr("placeholder","Asunto");
        $('#message').attr("placeholder","Mensaje");
        
        break;

  }
}








/*
  if($(tagBandClicada).attr('key') == ){
    $('#band1').attr({"href":"#pt-br", "key":"ptbr"});
    $('#band2').attr({"href":"#en", "key":"en"});
    $('#band3').attr({"href":"#es", "key":"es"});

    $('#image-band1').attr("src","img/icons/flag-brazil.png");
    $('#image-band2').attr("src","img/icons/flag-united.png");
    $('#image-band3').attr("src","img/icons/flag-spain.png");
  }

  if($(tagBandClicada).attr('key') == "en"){
    $('#band1').attr({"href":"#en", "key":"en"});
    $('#band2').attr({"href":"#pt-br", "key":"ptbr"});
    $('#band3').attr({"href":"#es", "key":"es"});

    $('#image-band1').attr("src","img/icons/flag-united.png");
    $('#image-band2').attr("src","img/icons/flag-brazil.png");
    $('#image-band3').attr("src","img/icons/flag-spain.png");
  }

  if($(tagBandClicada).attr('key') == "es"){
    $('#band1').attr({"href":"#es", "key":"es"});
    $('#band2').attr({"href":"#pt-br", "key":"ptbr"});
    $('#band3').attr({"href":"#en", "key":"en"});

    $('#image-band1').attr("src","img/icons/flag-spain.png");
    $('#image-band2').attr("src","img/icons/flag-brazil.png");
    $('#image-band3').attr("src","img/icons/flag-united.png");
  }*/


    /**
     * cria Array de bandeiras
     
    var bandeiras = new Array();
/*
    if($(tagBandClicada).attr('id') === "ptbr"){
      document.getElementById('#band1').innerHTML = `<a href="#pt-br" class="translate" id="ptbr"><img src="img/icons/flag-brazil.png"></a>`;
      document.getElementById('#band2').innerHTML = `<a href="#en" class="translate" id="en"><img src="img/icons/flag-united.png"></a>`;
      document.getElementById('#band3').innerHTML = `<a href="#es" class="translate" id="es"><img src="img/icons/flag-spain.png"></a>`;
    }

    if($(tagBandClicada).attr('id') === "en"){
      document.getElementById('#band1').innerHTML = `<a href="#en" class="translate" id="en"><img src="img/icons/flag-united.png"></a>`;
      document.getElementById('#band2').innerHTML = `<a href="#pt-br" class="translate" id="ptbr"><img src="img/icons/flag-brazil.png"></a>`;
      document.getElementById('#band3').innerHTML = `<a href="#es" class="translate" id="es"><img src="img/icons/flag-spain.png"></a>`;
    }

    if($(tagBandClicada).attr('id') === "es"){
      document.getElementById('#band1').innerHTML = `<a href="#es" class="translate" id="es"><img src="img/icons/flag-spain.png"></a>`;
      document.getElementById('#band2').innerHTML = `<a href="#en" class="translate" id="en"><img src="img/icons/flag-united.png"></a>`;
      document.getElementById('#band3').innerHTML = `<a href="#pt-br" class="translate" id="ptbr"><img src="img/icons/flag-brazil.png"></a>`;
    }*/





    /**
     * Remove a classe sf-with-ul que atrapalha no filtro
     * Depois adiciona a string com o elemento html necessario
     
    $(tagBandClicada).removeClass("sf-with-ul");
    bandeiras.push(tagBandClicada);

    $('.translate').each(function (index, element){
        /**
         * Remove a classe sf-with-ul que atrapalha no filtro
         * verifica se o elemento não existe no array, se true adiciona
              
        $(element).removeClass("sf-with-ul");
        if(bandeiras.some(bandeira => $(element).attr('id') !== $(bandeira).attr('id') )){
          bandeiras.push(element);
        }
    });

    bandeiras.forEach(x => {
      console.log(x.outerHTML);
    });

    /**
     * Devolve a classe "sf-with-ul" pro primeiro elemento
     
    $(bandeiras[0]).addClass("sf-with-ul");

    //$('#band-principal').html(bandeiras[0].outerHTML+"<ul><li>"+bandeiras[1].outerHTML+"</li><li>"+bandeiras[2].outerHTML+"</li></ul>");

    document.getElementById('band1').innerHTML = $(bandeiras[0]).html();
    document.getElementById('band2').innerHTML = $(bandeiras[1]).html();
    document.getElementById('band3').innerHTML = $(bandeiras[2]).html();*/