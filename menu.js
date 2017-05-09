$.ajax({
	url: "items.json",
	//force to handle it as text
	dataType: "text",
	success: function(data) {
		
		//data downloaded so we call parseJSON function 
		//and pass downloaded data
		var json = JSON.parse(data);
		//now json variable contains data in json format
		
		for (var i = 0; i < json.items.length; i++){
			var obj = json.items[i];
			$("#item" + i).html(obj.item);
			$("#desc" + i).html(obj.desc);
			$("#price" + i).html("Price: $" + obj.price);
		}
	}
});