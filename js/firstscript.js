
		function submitForm() {
	    	var doNothing = document.getElementById("myForm");

		}

	    function resetForm() {

	    	document.getElementById("myForm").reset();
		}

		
		

		function getLocation() {
		    if (navigator.geolocation) {
		        navigator.geolocation.getCurrentPosition(showPosition);
		    } else { 
		       document.getElementById('loc').innerHTML = "Unsupported.";
		    }
		}

		function showPosition(position) {
		    document.getElementById("loc").innerHTML = "Latitude: " + position.coords.latitude + 
		    "<br>Longitude: " + position.coords.longitude;	
		}

		function allowDrop(ev) {
		    ev.preventDefault();
		}

		function drag(ev) {
		    ev.dataTransfer.setData("text", ev.target.id);
		}

		function drop(ev) {
		    ev.preventDefault();
		    var data = ev.dataTransfer.getData("text");
		    ev.target.appendChild(document.getElementById(data));
		}		

		function clickCounter() {
			
			
		    if(typeof(Storage) !== "undefined") {
		        if (sessionStorage.clickcount) {
		            sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
		        } 
		        else {
		            sessionStorage.clickcount = 1;
		        }
		        document.getElementById("result").innerHTML = "View Count = " + sessionStorage.clickcount;
		    } 
		}

