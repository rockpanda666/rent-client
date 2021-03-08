$(function(){
    console.log("loaded")
})

$('#collapseExample').on('show.bs.collapse', function () {
    $("div.collapse").collapse("hide")
  })

$('#collapseExample1').on('show.bs.collapse', function () {
    $("div.collapse").collapse("hide")
  })

$('#collapseExample2').on('show.bs.collapse', function () {
    $("div.collapse").collapse("hide")
  })

$('#collapseExample3').on('show.bs.collapse', function () {
    $("div.collapse").collapse("hide")
  })

    //下拉框查询组件点击查询栏时不关闭下拉框
$("body").on('click','[data-stopPropagation]',function (e) {
  e.stopPropagation();
});