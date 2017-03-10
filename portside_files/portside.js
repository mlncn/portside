$(document).ready(function(){
  $('body').on('show.bs.collapse', '.panel-collapse', function(){
    $(this).parent().find(".glyphicon-plus").toggleClass("glypicon-plug glyphicon-minus");
  });
  $('body').on('hide.bs.collapse', '.panel-collapse', function() {
    $(this).parent().find(".glyphicon-plus").toggleClass("glypicon-plug glyphicon-minus");
  });
});
