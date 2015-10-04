
$(document).keyup(function(e){
        
        if(lastKeyAlt)
              {
                   
                     $(".colorMeUp").unbind("mousemove");
                     $(".colorMeUp").css("background-color",'white');
                     $(".colorMeUp").css("color",'black');

               }
        
         return true;
         });
 
  var lastKeyAlt = false;

  $(document).keydown(function(event){
        
               if(event.altKey)
              {
                    lastKeyAlt = true;
                    console.log("ALT pressed");
                   
                     $(".colorMeUp").bind("mousemove", function(event){
                           event.target.style.backgroundColor = "blue";
                           event.target.style.color = "red";
                    });
              }

                else
                {
           
                     lastKeyAlt = false;
                }
 
                return true;
  }); //keydown()
       
             
 

 
$(document).ready(function(){

$("#tblMembers").on('mouseleave',function(){

                     $("#tblMembers").css("background-color",'white');
                     $("#tblMembers").css("color",'black');
});

});
 
 
 
 
 
 
 
 
 var count=0;
function addRow(in_tbl_name)
  {
    var tbody = document.getElementById(in_tbl_name);
    tbody.className = "tableClass";
    //.getElementsByTagName("TBODY")[0];
    // create row
    var row = document.createElement("TR");
    // create table cell 1
    var td1 = document.createElement("TD");
    var strHtml1 = "<INPUT TYPE=\"text\" NAME=\"fn_name\"  MAXLENGTH=\"30\"  STYLE=\"margin:0;\">";
    td1.innerHTML = strHtml1.replace(/!count!/g,count);
    td1.className = "colorMeUp";
    // create table cell 2
    var td2 = document.createElement("TD");
    var strHtml1 = "<INPUT TYPE=\"text\" NAME=\"fn_name\"  MAXLENGTH=\"30\"  STYLE=\"margin:0;\">";
    td2.innerHTML = strHtml1.replace(/!count!/g,count);
    td2.className = "colorMeUp";
   
    // create table cell 3
    var td3 = document.createElement("TD");
    var strHtml3 = "<INPUT TYPE=\"text\" NAME=\"ln_name\"  MAXLENGTH=\"30\"  STYLE=\"margin:0;\">";
    td3.innerHTML = strHtml3.replace(/!count!/g,count);
    td3.className = "colorMeUp";
   
    // create table cell 4
    var td4 = document.createElement("TD");
    var strHtml4 = "<INPUT TYPE=\"text\" NAME=\"Qty\"  MAXLENGTH=\"30\"  STYLE=\"margin:0;\">";
    td4.innerHTML = strHtml4.replace(/!count!/g,count);
    td4.className = "colorMeUp";
  
    
    // create table cell 5
    var td5 = document.createElement("TD");
    var strHtml5 = "<INPUT TYPE=\"Button\" CLASS=\"Button\" onClick=\"delRow()\" VALUE=\"Delete Row\">";
    td5.innerHTML = strHtml5.replace(/!count!/g,count);
    //td5.className = "colorMeUp";
   
    // append data to row
    row.appendChild(td1);
   	row.appendChild(td2);
    row.appendChild(td3);
	row.appendChild(td4);

    row.appendChild(td5);
    // add to count variable
    count = parseInt(count) + 1;
    // append row to table
    tbody.appendChild(row);
  }
      
  function delRow()
  {
  
    var current = window.event.srcElement;
    //here we will delete the line
    while ( (current = current.parentElement)  && current.tagName !="TR");
         current.parentElement.removeChild(current);
  }






