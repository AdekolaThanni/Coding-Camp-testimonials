function nextSlide(){
    const currentSlideId = $(".current-slide").attr("id");
    const slideNumber = Number(currentSlideId.substr(-1));

    if(slideNumber !== 2){
        $(".current-slide").removeClass("current-slide");
        $("#slider-" + (slideNumber+1) + "").addClass("current-slide");
    }
}

function prevSlide(){
    const currentSlideId = $(".current-slide").attr("id");
    const slideNumber = Number(currentSlideId.substr(-1));

    if(slideNumber !== 1){
        $(".current-slide").removeClass("current-slide");
        $("#slider-" + (slideNumber-1) + "").addClass("current-slide");
    }
}