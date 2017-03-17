
// 屏幕的宽度小于992时，显示#elements，去掉.hidden
var w_width = $(window).width();
var w_height = $(window).height();
if (parseInt(w_width) < 992) {
		$("#elements").removeClass("hidden");
		$("#elements").addClass("show")
} else {
		$("#elements").removeClass("show");
		$("#elements").addClass("hidden")
}
// //屏幕高度大于body的高度,
// var body_height = $(document.body).height(); //body的高度
// if (parseInt(w_height) > parseInt(body_height)) {
// 		var head_banner_foot_height = parseInt($("#head").height()) + parseInt($("#banner").height()) + parseInt($("#foot").height()) + 22 * 2 + 60;
// 		var content_height = parseInt(w_height) - head_banner_foot_height;
// 		$("#content").css({
// 				"min-height": content_height
// 		});
// }

$(window).resize(function() {
		var w_width = $(window).width();
		var w_height = $(window).height();
		// 监控屏幕的宽度小于992时，显示#elements，去掉.hidden
		if (parseInt(w_width) < 992) {
				$("#elements").removeClass("hidden");
				$("#elements").addClass("show")
		} else {
				$("#elements").removeClass("show");
				$("#elements").addClass("hidden")
		}
		// //监控屏幕高度大于body的高度,
		// if (parseInt(w_height) > parseInt(body_height)) {
		// 		var head_banner_foot_height = parseInt($("#head").height()) + parseInt($("#banner").height()) + parseInt($("#foot").height()) + 22 * 2 + 60;
		// 		// console.log(head_banner_foot_height);
		// 		var content_height = parseInt(w_height) - head_banner_foot_height;
		// 		$("#content").css({
		// 				"min-height": content_height
		// 		});
		// }
});
