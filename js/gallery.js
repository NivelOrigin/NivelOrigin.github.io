/*	gallery */
$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }

	        	if ($(".filter-button").removeClass("active")) {
			$(this).removeClass("active");
		    }
		    	$(this).addClass("active");
	    	});
});
/*	end gallery */


/*     gallery-filter   */

const buttons = document.querySelectorAll(".filter-button")
const images = document.querySelectorAll(".gallery_product")

function imagesCheck(){
    for (let i = 0; i < images.length; i++) {
        if (images[i].style.display !== "none") {
            console.log("talalt")
        } else {
            console.log("nem")
        }
      
}}

/*if (images.hasOwnProperty)
images[i].getAttribute(data-lightbox)
*/