//var colors = [
//  ['#D3B6C6', '#4B253A'], ['#FCE6A4', '#EFB917'], ['#BEE3F7', '#45AEEA'], ['#F8F9B6', '#D2D558'], ['#F4BCBF', '#D43A43']
//], circles = [], percentage_values = [30,70,70];
jQuery(document).ready(function(){
  var circles = [], percentage_values = [80,70,30,60], hasCreatedObjects = false;

  for (var i = 1; i <= 4; i++) {
    var child = document.getElementById('circles-' + i);

    jQuery('#circles-' + i).circliful({
      animation: 1,
      animationStep: 5,
      foregroundBorderWidth:10,
      backgroundBorderWidth:10,
      fontColor: '#333',
      textSize: 28,
      textStyle: 'font-size: 14px;',
      textColor: '#666',
      foregroundColor: '#de3814',
      multiPercentage: 1,
      animateInView: 'true',
      percent: percentage_values[i-1]
    });
  }
//---------------------------------------
var scroll_start = 0;
var offset = 70;
  jQuery(document).scroll(function() {
    scroll_start = jQuery(this).scrollTop();
    if(scroll_start > offset.top) {
      jQuery(".navbar-default").css('background-color', '#fff');
      jQuery('.navbar-default .navbar-nav > li > a ').css('color','#777');
    } else if (scroll_start == 0) {
      jQuery('.navbar-default').css('background-color', 'rgba(248, 248, 248, 0.84)');
    } else{
      jQuery(".navbar-default").css('background-color', '#fff');
      jQuery('.navbar-default .navbar-nav > li > a ').css('color','#777');
    }
  });

});
