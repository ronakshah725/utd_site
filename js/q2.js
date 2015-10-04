		// $(document).ready(function(){
		//     $("#hide").click(function(){
		//         $("#courses").hide(500);
		//     });
		//     $("#show").click(function(){
		//         $("hide").show();
		//     });
		// });



// function toggle(id) {
//   var e = document.getElementById(id);
//   if(e.style.display == 'none') {

//       '#toggle_block'.show();
//   } else {
//       e.style.display = 'none';
//       '#toggle_block'.hide(500);
//9660
//   }
// }
$(document).ready(function(){
	$("#ms").hide();
    $("#hide").click(function(){
        $("#ms").hide();
    });
    $("#show").click(function(){
        $("#ms").show();
    });
});

$(document).ready(function(){
	$("li.animate").on('mouseenter',function(){
  $(this).animate({"padding-left": "50px"}, "slow");
});
$("li.animate").on('mouseleave',function(){
  $(this).stop(true).animate({"padding-left": "0px"}, "fast");
});

});



$(document).ready(function(){
	$('#show').click(function(){$('#ms').hide();});
	$('#hide').click(function(){$('#ms').show();});

    $("#triangle").click(function(){
    	if($('#triangle').text() == "Show.."){

    		$('#triangle').html("Hide..");
    		$("#toggle_block").toggle();
    		

    	}
    	else{
		$('#triangle').html("Show..");
        $("#toggle_block").toggle();
        


   		}	

    });
    
});


i=0;
$(document).ready(function(){
  $("#t1").keypress(function(){
 $("#s1").text(i+=1);
  $("#p5").fadeToggle().toggle().fadeToggle();
 
});
 }); 

$(document).ready(function(){
  $("#t2").keydown(function(){
     $( "#t2" ).css("background-color","green").animate({
    width:"250px"}, 1000).animate({height:"20px "}).animate({opacity:0.2});
  });
$("#t2").keyup(function(){
$("#t2").stop(true).css("background-color","white");

});

});







