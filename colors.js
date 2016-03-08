
for(var i=0; i<10; i++) {
	db.points.insert({
		"coordinates" : {
			"x": Math.floor(Math.random()*100),
		"y": Math.floor(Math.random()*100)},
		
			"color" : 5
	})
}

