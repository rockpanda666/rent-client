$(function () {
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
$("body").on('click', '[data-stopPropagation]', function (e) {
  e.stopPropagation();
});


//自适应
$(function () {
  changeClass();
});

//浏览器的窗口大小发生改变时执行
$(window).resize(function () {
  changeClass();
});

//当屏幕小于615时添加一个属性，大于的时候删除属性
function changeClass() {
  let ww = $(window).width();
  if (ww > 615) {
    for (var x = 0; x < $("div.btn-group").length; x++) {
      $("div.btn-group")[x].classList.remove('dropright')
    }
  } else if (ww < 615) {
    for (var x = 0; x < $("div.btn-group").length; x++) {
      if ($("div.btn-group")[x].className.indexOf("dropright") === -1) {
        $("div.btn-group")[x].classList.add("dropright")
      }
    }
  }
}