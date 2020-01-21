var express = require('express');
var router = express.Router();
const yelp = require('yelp-fusion');
const token = 'Y8s6dW3uAs-TZ34YRekghk7llJxJuj3JjNAcLtADi-OZ02Dl66_soagZHv-eTyQFHC8fGWfxblXrZxyW3msB1GARItcv2KG0qhzgowweVi4qxdw3fijzXeIyKKd2XXYx';
const client = yelp.client(token);

router.use(function(req, res, next){
	client.search({
  		location: 'Alpharetta',
  		categories: 'icecream',
  		sort_by: 'review_count'
	}).then(response => {
  		res.data = response.jsonBody.businesses;
  		next();
	}).catch(e => {
  		console.log(e);
	});
})

//Sort top five businesses algorithm
router.use(function(req, res, next){
	let data = res.data;
	let countCriteria = 5; 
	let topFiveBusinesses = [];
	if(data.length > 50){
		data.length = 50;
	}

	while(countCriteria !== 3){
		if(topFiveBusinesses.length === 5 ){
			break;
		}else{
			for (var i=0; i<=data.length-1; i++){
				if(data[i].rating === countCriteria){
					topFiveBusinesses.push(data[i]);
				}
				if(topFiveBusinesses.length === 5 ){
					break;
				}
			}
			countCriteria = countCriteria - 0.5;
		}
		
	}
	res.data = topFiveBusinesses;
	next();

})

router.get('/', function(req, res, next) {
	console.log(res.data);
	res.send(res.data);
});

router.get('/details/:id', function(req, res, next) {
	console.log(req.params.id);
	client.business(req.params.id).then(response => {
  		console.log(response.jsonBody);
  		  res.send(response.jsonBody);
	}).catch(e => {
  		console.log(e);
	});
});


router.get('/reviews/:id', function(req, res, next) {
	console.log(req.params);
	client.reviews(req.params.id).then(response => {
 	console.log(response.jsonBody.reviews);
 	res.send(response.jsonBody.reviews);
	}).catch(e => {
  		console.log(e);
	});

});


module.exports = router;
