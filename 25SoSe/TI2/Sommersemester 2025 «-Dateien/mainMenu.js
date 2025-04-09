jQuery(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    jQuery(window).resize(checkSize);
});
function checkSize(){
    
    if (jQuery(".main_menu > li > a").css("padding-top") === "15px" ){
		var settings = {
				//sensitivity: 4,
				interval: 100,
				timeout: 250,
				over: expandMenu,
				out: resetMenu
			};
		if (!jQuery("ul.main_menu li").hasClass("hover") && jQuery("ul.main_menu li").hasClass("dropdown")){
			jQuery("ul.main_menu li").addClass("hover")
		}
        jQuery("ul.main_menu li.hover").hoverIntent(settings);
    } else {
		if (jQuery("ul.main_menu li").hasClass("hover") && jQuery("ul.main_menu li").hasClass("dropdown")){
			jQuery("ul.main_menu li").removeClass("hover")
		}
				//jQuery("ul.main_menu li").unbind("mouseenter").unbind("mouseleave");
		//jQuery("ul.main_menu li").removeProp('hovertent_t');
		//jQuery("ul.main_menu li").removeProp('hovertent_s');
		//jQuery(".dropdown-toggle").click(function() {
		//	jQuery(this).toggleClass(".dropdown-toggle");
		//});
				//jQuery("ul.main_menu li").unbind();
		//if (typeof jQuery.fn.hovertent === 'undefined') {
			//jQuery("ul.main_menu li").unbind("mouseenter").unbind("mouseleave");
			//jQuery("ul.main_menu li").removeProp('hovertent_t');
		 	//jQuery("ul.main_menu li").removeProp('hovertent_s');
			//jQuery(".dropdown-toggle").dropdown();
		//}
	}
}
// expand the height of the container
function expandMenu(){
	if (jQuery("ul.main_menu li").hasClass("hover")) {
    	jQuery(this).find("ul.dropdown-menu").slideDown(90).show();
	}
}
// reset the height of the container
function resetMenu() {
	if (jQuery("ul.main_menu li").hasClass("hover")) {
	    jQuery(this).find("ul.dropdown-menu").slideUp(90);
	}
}
