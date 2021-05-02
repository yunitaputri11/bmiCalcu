var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
	var satuan	= "cm";
	var berat 	= parseFloat(req.body.txt_berat);
	var tinggi 	= parseFloat(req.body.txt_tinggi);
	var bmi		= 0;
	var kategori= "";
	
	
	if(satuan=="cm"){
		var tinggiMeter = tinggi / 100;
	}
	
	bmi = parseFloat(berat / (tinggiMeter*tinggiMeter)).toFixed(1);
	if(bmi<16){
		kategori = "Kurus Parah";
		
	}else if(bmi<17){
		kategori = "Kurus Sedang";
		
	}else if(bmi<18.5){
		kategori = "Sedikit Kurus";
		
	}else if(bmi<25){
		kategori = "Normal";
		
	}else if(bmi<30){
		kategori = "Kegemukan";
		
	}else if(bmi<35){
		kategori = "Obesitas I";
		
	}else if(bmi<40){
		kategori = "Obesitas II";
		
	}else{
		kategori = "Obesitas III";
		
	}
	
	res.render('index', { 
			result	:true,
			title	: 'KALKULATOR BMI',
			berat	: berat,
			tinggi	: tinggi,
			bmi		: bmi,
			kategori: kategori,
			color	: color,
			baseUrl	: "http://localhost:3000/",
		}
	);
});

module.exports = router;