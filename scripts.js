var windowHeight = $(window).height();
var menuBarHeight = $("#menubar").height();
var codeContainerHeight = windowHeight - menuBarHeight;

$(".codeContainer").height(codeContainerHeight + "px")

$(".toggle").click(function() {
  $(this).toggleClass("active");

  var activeDiv=$(this).html();

  $("#" + activeDiv + "Container").toggle();

  var showingDivs=$(".codeContainer").filter(function() {
    return($(this).css("display")!="none");
  }).length;

  var width=100/showingDivs;

  $(".codeContainer").width(width + "%");
});


$("#runButton").click(function() {
  $("iframe").contents().find("html").html('<style>'+$("#cssCode").val()+'</style>'+$("#htmlCode").val());
});
