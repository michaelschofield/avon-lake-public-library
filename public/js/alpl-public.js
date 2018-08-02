(function( $ ) {
	'use strict';

	/**
	 * All of the code for your public-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */

	// https://avon.ent.sirsi.net/client/en_US/public/search/results/?qu=harry
	var searchForm = document.querySelector('form.search-form');
	var searchField = searchForm.querySelector('input.search-field');

	searchForm.setAttribute('action', 'https://avon.ent.sirsi.net/client/public/search/results');
	searchField.setAttribute('name', 'qu');

	//$(searchForm).on('submit', function(e) {
	//	var query = searchField.value;
	//	e.preventDefault();
	//});


})( jQuery );

function catelog_search(){
  var key = document.getElementById('q').value;
  var scat = document.getElementById('searchcat').value;
  if(scat==0){
    key = key.replace(/ /g,"+")+'&te=';
  }else if(scat==1){
    key = key.replace(/ /g,"+")+'&srchfield1=&te=&rt=false|||AUTHOR|||Author';
  }else if(scat==2){
    key = key.replace(/ /g,"+")+'&srchfield1=&te=&rt=false|||TITLE|||Title';
  }else if(scat==3){
    key = key.replace(/ /g,"+")+'&srchfield1=&te=&rt=false|||SUBJECT|||Subject';
  }

  url = 'http://avon.ent.sirsi.net/client/public/search/results?qu='+key;
  window.open(url);
}
