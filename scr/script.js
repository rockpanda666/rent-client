$(function(){
    console.log("loaded")
})

$('#collapseExample').on('show.bs.collapse', function () {
    // do something…
    // $("#collapseExample1").collapse('hide');
    // $("#collapseExample2").collapse('hide');
    $("div.collapse").collapse("hide")
  })

$('#collapseExample1').on('show.bs.collapse', function () {
    // do something…
    // $("#collapseExample").collapse('hide');
    // $("#collapseExample2").collapse('hide');
    $("div.collapse").collapse("hide")
  })

$('#collapseExample2').on('show.bs.collapse', function () {
    // do something…
    // $("#collapseExample1").collapse('hide');
    // $("#collapseExample").collapse('hide');
    $("div.collapse").collapse("hide")
  })

