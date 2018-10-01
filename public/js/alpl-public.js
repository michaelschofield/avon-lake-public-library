setTimeout(function() {
  var searchForm = document.querySelector('form.search-form');
  var searchField = searchForm.querySelector('input.search-field');

  searchForm.setAttribute('action', 'https://avon.ent.sirsi.net/client/public/search/results');
  searchField.setAttribute('name', 'qu');
}, 1000);

/**
 * Here is the original ALPL.org's catalog search URL replacement method
 * for reference if we want to add additional author, title, subject searches.
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
*/
