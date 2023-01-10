$(document).ready(function(){
	let switch_number = 0
	let switch_number_comments = 0
	const switch_px = 380
	const switch_px_comments = $(".comments_item").width() + 50


	$(".cart").each(function(index){
		$(this).attr("id",index)
	})

	$(".comments_item").each(function(index){
		$(this).attr("id","comments_item-"+index)
	})

	$(".burger__bg").on("click",function(){
		$(this).children().toggleClass("active")
		$(".navigation-section").toggleClass("active")
	})

	$(".navigation__list-item a").on("click",function(e){
		e.preventDefault()
		$(".navigation__list-item").removeClass("active")
		$(this).parent().addClass("active")
	})

	$(".button-catalog").on("click",function(){
		$(".button-catalog").removeClass("active")
		$(this).toggleClass("active")
	})


	$(".button-switch-slider.switch-right").on("click",function () {

		if($(".cart.active").next().length){
			switch_number -= 380;
			$(".button-switch-slider.switch-left").prop("disabled",false)

			let id = Number($(".cart.active").attr("id"))
			$(".cart.active").removeClass("active")
			$(".cart#"+(id+1)).addClass("active")

			$(".cart").each(function(){
				$(this).css({"transform":"translateX("+switch_number+"px)"})
			})

			if(!$(".cart.active").next().next().length){
				$(this).prop("disabled",true)
			}
		}

		
	})

	$(".button-switch-slider.switch-left").on("click",function () {
		

		if($(".cart.active").prev().length){
			switch_number += 380;

			$(".button-switch-slider.switch-right").prop("disabled",false)

			let id = Number($(".cart.active").attr("id"))
			$(".cart.active").removeClass("active")
			$(".cart#"+(id-1)).addClass("active")

			$(".cart").each(function(){
				$(this).css({"transform":"translateX("+switch_number+"px)"})
			})
			if(!$(".cart.active").prev().prev().length){
				$(this).prop("disabled",true)
			}
		}
	})




	$(".button-switch-slider.switch-right-comment").on("click",function () {

		if($(".comments_item.active").next().length){
			switch_number_comments -= switch_px_comments;
			$(".button-switch-slider.switch-left-comment").prop("disabled",false)

			let id = Number($(".comments_item.active").attr("id").slice(-1))
			$(".comments_item.active").removeClass("active")
			$(".comments_item#comments_item-"+(id+1)).addClass("active")

			$(".comments_item").each(function(){
				$(this).css({"transform":"translateX("+switch_number_comments+"px)"})
			})

			if(!$(".comments_item.active").next().length){
				$(this).prop("disabled",true)
			}
		}

		
	})

	$(".button-switch-slider.switch-left-comment").on("click",function () {
		if($(".comments_item.active").prev().length){
			switch_number_comments += switch_px_comments;

			$(".button-switch-slider.switch-right-comment").prop("disabled",false)

			let id = Number($(".comments_item.active").attr("id").slice(-1))
			$(".comments_item.active").removeClass("active")
			$(".comments_item#comments_item-"+(id-1)).addClass("active")

			$(".comments_item").each(function(){
				$(this).css({"transform":"translateX("+switch_number_comments+"px)"})
			})
			if(!$(".comments_item.active").prev().length){
				$(this).prop("disabled",true)
			}
		}
	})
})