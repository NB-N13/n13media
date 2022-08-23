/*N13 Custom Slider Arrows With Attributes:
Slider: n13-custom-slider-arrow = "n"
Hidden OG Arrows: n13-og-slider-arrow = "left-1"/"right-1"
New Arrows: n13-slider-arrow = "left-1"/"right-1"
*/
$('[n13-slider-arrow]').on('click', function() {
  var sliderarrowid = $(this).attr('n13-slider-arrow');
  var wrapperid = sliderarrowid.match(/\d+/);
  var wrapperattribute = '[n13-custom-slider-arrow='+wrapperid+']';
  var ogarrowid = '[n13-og-slider-arrow='+sliderarrowid+']';
  $(wrapperattribute).find(ogarrowid).click();
});