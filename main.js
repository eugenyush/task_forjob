$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {

            $('#toTop').fadeIn();

        } else {

            $('#toTop').fadeOut();

        }
    });
    $('#toTop').click(function() {

        $('body,html').animate({scrollTop:0},800);

    });
 });

 function sortItem (){
    let t = $(".elem_filter_select");
    let tVal = t.val();
    if(!tVal.length){
        return false;
    }
    let elements = $(".filtered_item");
    let diskr = $(".elem_filter_select_dis").val();

    if(diskr === "incr"){
        elements.sort(function(a, b){
            let value1=a.dataset[tVal], value2=b.dataset[tVal];
            if (value1 < value2)
                return -1;
            if (value1 > value2)
                return 1;
            return 0;
        });
    }
    
    if(diskr === "decr"){
        elements.sort(function(a, b){
            let value1=a.dataset[tVal], value2=b.dataset[tVal];
            if (value1 > value2)
                return -1;
            if (value1 < value2)
                return 1;
            return 0;
        });
    }

    $(".filtered_container").find(".filtered_item");
    $(".filtered_container").append(elements);
 }

 $(document.body).on("change",".elem_filter_select_dis", sortItem);
 $(document.body).on("change",".elem_filter_select", sortItem);

 $(".icon-like").bind("click", function(){
    let src = ($(this).attr("src") === "./img/like1.png")
                    ? "./img/like2.png"
                    : "./img/like1.png";
    (src === "./img/like2.png")
                ?  alert("Добалвенно в избранное!") 
                :  alert("Удаллено из избранного!");
      $(this).attr("src", src);
 });