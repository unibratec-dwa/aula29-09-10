var APP = APP || {};


APP.DestaquesDoMes = {
	_url: "destaquesDoMes.php",
	_contentId: "#funcionarios",

	setUp: function() {
		console.log("O módulo DestaquesDoMes foi iniciado");
		this.carregar();
	},

	carregar: function(){

		//APP.chamadaAjax(this);

		var delegate, carregando, carregou, naoCarregou;

			delegate 	= APP.delegate;

			carregando	= delegate(this, this.carregando);
			carregou 	= delegate(this, this.carregou);
			naoCarregou = delegate(this, this.naoCarregou);


		$(this._contentId)
			.removeClass('erro')
			.removeClass('carregando');

		jQuery.ajax({
			url: this._url,
			dataType: "JSON",
			beforeSend: carregando,
			success: carregou,
			error: naoCarregou
		});

	},


	carregando: function() {
		$(this._contentId)
			.removeClass('erro')
			.addClass('carregando');
	},

	carregou: function(retorno){


		if(retorno.status === true) {
			$(this._contentId).empty();

			var criarDado = APP.delegate(this, function(indice, nome){
				$("<img>")
					.addClass('avatar')
					.attr('src', 'avatar/'+nome+".jpg")
					.appendTo(this._contentId);
			})

			$(retorno.dados).each(criarDado);
		} else {
			$(this._contentId).empty().text(retorno.message);
		}

		// $(this._contentId)
		// 	.removeClass('erro')
		// 	.removeClass('carregando')
		// 	.empty()
		// 	.html(dados);
	},

	naoCarregou: function() {
		console.log("Não carregou");
		$(this._contentId)
			.addClass('erro')
			.removeClass('carregando')
			.empty()
			.text("Não foi possível carregar os dados. Verifique se o seu dispositivo está conectado a internet.");
	}
}