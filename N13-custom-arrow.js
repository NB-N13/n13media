$('[n13-slider-arrow]').on('click', function() {
  var sliderarrowid = $(this).attr('n13-slider-arrow');
  var wrapperid = sliderarrowid.match(/\d+/);
  var wrapperattribute = '[n13-custom-slider-arrow='+wrapperid+']';
  var ogarrowid = '[n13-og-slider-arrow='+sliderarrowid+']';
  $(wrapperattribute).find(ogarrowid).click();
});
//N13 MEDIA custom code