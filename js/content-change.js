var pageID = null;
var nextPage = null;
var prevPage = null;

var i = null;

$(document).ready(function() {
	pageID = Number(getQueryVariable("id"));

});


//Index page

function changeText(pDetail, indexType) {


	// Page content
	$(".image-title").text(pDetail[pageID].title);
	$(".image-desc").text(pDetail[pageID].desc);
	$(".indiv-image").attr("alt", pDetail[pageID].title );
	
	if ($(window).width() <= 560) {
	$(".indiv-image").attr("src", ("img/" + pDetail[pageID].href + "-medium.jpg" ));
	}
	else {
	$(".indiv-image").attr("src", ("img/" + pDetail[pageID].href + "-large.jpg" ));	
	}
	
	// Links
	$(".previous").attr("href", indexType + ".html?id=" + prevPage  );
	$(".next").attr("href", indexType + ".html?id=" + nextPage );


}

function getQueryVariable(variable){
	var query = window.location.search.substring(1);
	var vars = query.split("&"); 
	for (var i=0;i<vars.length;i++) { 
		 var pair = vars[i].split("="); 
		 if(pair[0] == variable){return pair[1];} 
		 } 
	return(false);
}
		 

	

function pagination(pDetail){
	if (pageID >= pDetail.length || (isNaN(pageID))){
		pageID = 0;
	}
		
	if (pageID == pDetail.length - 1){
		nextPage = 0;
		prevPage = pageID - 1;
	}else if(pageID == 0){
		prevPage = pDetail.length - 1;
		nextPage = pageID + 1;	
	}else{
		nextPage = pageID + 1;
		prevPage = pageID - 1;
		}
}


	
// Gallery page


function gallery(pDetail, indexType){
	for (var i = 0 ; i < pDetail.length ; i++){
		$('.gallery').append(
		'<a href="' + indexType + '.html?id=' + i +'">' +
		'<div class="imgwrap" id=' + '"thumb-' + i + '">' +
		'<img class="gallery-img" src="' + 'img/' + pDetail[i].href + '-thumb.jpg"' + ' alt="' + pDetail[i].title + '" />' +
		'</div>' +
		'</a>'
		); 
	}
	
	$("img.gallery-img").hide();
	$("img.gallery-img").bind("load", function () { 
    $("img.gallery-img").fadeIn("slow"); 
			 });	
	
	
};

