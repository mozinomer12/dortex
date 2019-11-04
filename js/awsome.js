$(document).ready(function(e) {
    // adding class active to main selector left side
    $(".main-selector-column ul li a").click(function(e) {
            e.preventDefault();
            $('.main-selector-column ul li').removeClass("active");
            $(this).parent().addClass("active")
        })
        // adding class active to inner selector left side
    $(".inner-selector-column ul li a").click(function(e) {
        e.preventDefault();
        $('.inner-selector-column ul li').removeClass("active nex pre");
        $(this).parent().addClass("active");
        $(this).parent().prev().addClass("pre");
        $(this).parent().next().addClass("nex");
    })
});

// custom selecmenu

    $(".custom-select").each(function() {
        var classes = $(this).attr("class"),
            id = $(this).attr("id"),
            name = $(this).attr("name");
        var template = '<div class="' + classes + '">';
        template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
        template += '<div class="custom-options">';
        $(this).find("option").each(function() {
            template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
        });
        template += '</div></div>';

        $(this).wrap('<div class="custom-select-wrapper"></div>');
        $(this).hide();
        $(this).after(template);
    });
    $(".custom-option:first-of-type").hover(function() {
        $(this).parents(".custom-options").addClass("option-hover");
    }, function() {
        $(this).parents(".custom-options").removeClass("option-hover");
    });
    $(".custom-select-trigger").on("click", function() {
        $('html').one('click', function() {
            $(".custom-select").removeClass("opened");
        });
        $(this).parents(".custom-select").toggleClass("opened");
        event.stopPropagation();
    });
    $(".custom-option").on("click", function() {
        $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
        $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
        $(this).addClass("selection");
        $(this).parents(".custom-select").removeClass("opened");
        $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
    });
// custom selecmenu

// uploading image into preview and in staging area
    $('#upload').change(function(event) {
        $(".uploaded").fadeIn("fast").attr('src', URL.createObjectURL(event.target.files[0]));
        $(".img img").fadeIn("fast").attr('src', URL.createObjectURL(event.target.files[0]));
    });
// uploading image into preview and in staging area

// changing color of text in staging area
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'style') {
                let a = $('.color-oicekr').css("background-color");
                $('.text-container').css('color', '' + a);
            }
        });
    });
    // Notify me of style changes
    var observerConfig = {
        attributes: true,
        attributeFilter: ["style"]
    };
    var targetNode = $('.color-oicekr');
    var target = targetNode[0];
    observer.observe(target, observerConfig);
// changing color of text in staging area

// adding js for active right sidebar
    $('.right-sidebar .configration ul li').click( function(e) {
      e.preventDefault();
      $('.configration ul li').removeClass("active");
      $(this).addClass("active");
    });
    $('.right-sidebar .productioncontainer ul li').click( function(e) {
      e.preventDefault();
      $('.productioncontainer ul li').removeClass("active");
      $(this).addClass("active");
    });
    $('.right-sidebar .quatatity-and-price ul li').click( function(e) {
      e.preventDefault();
      $('.quatatity-and-price ul li').removeClass("active");
      $(this).addClass("active");
    });
    $('.attribute-selector ul li').click( function(e) {
      e.preventDefault();
      $('.attribute-selector ul li').removeClass("active");
      $(this).addClass("active");
    });
    $('#size-container span').click( function(e) {
      e.preventDefault();
      $('#size-container span').removeClass("active");
      $(this).addClass("active");
    });
// adding js for active right sidebar

// adding the script for positoining left right up and down -->
    
        var right_pos = 1;
        var left_pos = 1;
        var top_pos = 1;
        var bottom_pos = 1;
        $(".right-position").click( function(e) {
            e.preventDefault();
            if(right_pos <= 10)
            {
                $(".img img").css({'left' : '+=5px'});
                right_pos += 1;
                left_pos = 0;
                // console.log(right_pos);
            }
        });
        $(".left-position").click( function(e) {
            e.preventDefault();
            if(left_pos <= 10)
            {
                $(".img img").css({'left' : '-=5px'})
                left_pos += 1;
                right_pos = 0;
                // console.log(right_pos);
            }
        });
        $(".bottom-position").click( function(e) {
            e.preventDefault();
            if (bottom_pos <= 10) {
                $(".img img").css({'top' : '+=5px'});
                top_pos = 0;
                bottom_pos += 1;
                console.log(bottom_pos);
            }
        });
        $(".top-position").click( function(e) {
            e.preventDefault();
            if (top_pos <= 10) {
                $(".img img").css({'top' : '-=5px'});
                top_pos += 1;
                bottom_pos = 0;
            }
        });
        $('.plus_size').click( function(e){
            e.preventDefault();
            $(".img img").css({'width' : '+=10%'});
            console.log($(".img img").css("width"));
        });
        $('.minus_size').click( function(){
            $(".img img").css({'width' : '-=10px'});    
            console.log($(".img img").css("width"));
        });
// adding the script for positoining left right up and down -->

// adding a script for inputing a text -->
    $(".text-coding-container").on("input", function(){
        $(".heading-text-container").text($(this).val());
    });
    $(".text-pixel-container").on("input", function(){
        $(".sub-heading-text-container").text($(this).val());
    });
    var currenet_width = 360;
    $("#size_input_custom").change(function() {
        var input_val = $(this).val();
        let a = parseInt(currenet_width);
        let b = parseInt(input_val);
        let new_width = a + b;
        let c = parseInt(new_width);
        console.log(a + ' current width with conversion');
        console.log(b + ' input value with conversion');
        console.log(c + ' new width with conversion');
        $(".main-image-container").css('width', c + 'px');
    });
// adding a script for inputing a text -->

// adding a script for appending input field -->
    
        var text_field =  4;
        $(".addtext").click( function(e) {
            e.preventDefault();
            if (text_field < 6) {
                $(".inscription-tab").append('<div id="myid" class="row"><input type="text" name="" placeholder="Add Text" class="text-pixel-container"><span class="remove"> - </span></div>');
                text_field += 1;
            }
        });
        $(".remove").click( function(e) {
            // e.preventDefault();
            console.log("i was removed so was parent");
            // $(this).parent().remove();
            // text_field -= 1;
        });
// adding a script for appending input field -->

// color addded  -->
    
        new KellyColorPicker({
            place : 'picker',
            input : 'color'
            });
            var method = 'quad';
            var alpha = false;          // is alpha slider enabled
            var drag = false;
            var cursorAnimReady = true; // sets by requestAnimationFrame to limit FPS on events like mousemove etc. when draging
            var events = new Array();
            var userEvents = new Array();
            var canvasHelper = document.createElement("canvas");
            var canvasHelperCtx = false; // used if needed to copy image data throw ctx.drawImage for save alpha channel
            var rendered = false;        // is colorpicecker rendered (without side alpha bar and cursors, rendered image stores in canvasHelperData
            var canvasHelperData = null; // rendered interface without cursors and without alpha slider [wheelBlockSize x wheelBlockSize]
            var input = false;
            var inputColor = true;     // update input color according to picker
            var inputFormat = 'hex'; // mixed | hex | rgba
            var popup = new Object;    // popup block for input
            popup.tag = false;         // Dom element if popup is enabled
            popup.margin = 6;          // margin from input in pixels
            var place = false;
            var handler = this;
            var basePadding = 2;
            var padding;
            var wheelBlockSize = 200;
            var center;
            var hsv;
            var rgb;
            var hex = '#000000';
            var a = 1;
            var wheel = new Object;
            wheel.width = 18;
            wheel.imageData = null; // rendered wheel image data
            wheel.innerRadius;
            wheel.startAngle = 0; // 150
            wheel.outerRadius;
            wheel.outerStrokeStyle = 'rgba(0,0,0,0.2)';
            wheel.innerStrokeStyle = 'rgba(0,0,0,0.2)';
            wheel.pos; // center point; wheel cursor \ hsv quad \ hsv triangle positioned relative that point
// color addded  -->

// motifits background color and text color change  -->
    
        $("#color").on('change', 'input', function() {
            console.log($(this).css("background-color"));
        })
// motifits background color and text color change  -->

// adding font-size and font-family -->
    
        var click_font_size = 1;
        var click_font_size_plus = 1;
        $(".deccrease-font-size").click( function(e) {
            e.preventDefault();
            if (click_font_size <= 5) {
                $('.text-container').css({'font-size' : "-=2px"});
                click_font_size ++;
                console.log(click_font_size);
                click_font_size_plus --;
            }
            else
            {
                return;
            }
        });
        $(".inccrease-font-size").click( function(e) {
            e.preventDefault();
            if (click_font_size_plus <= 5 ) {
                $(".text-container").css({'font-size' : '+=2px'});
                console.log(click_font_size_plus);
                click_font_size_plus ++;
                click_font_size --;
            }
        });
        $(".fonts-family li").click( function(e){
            var font_family = $(this).css("font-family")
            console.log(font_family);
            $('.text-container').css({'font-family' : font_family})
            $('.font-family-container').css({'font-family' : font_family})
        });


        $(".color-oicekr").on( 'change', function(e) {
            var bg_image = $(this).css("background");
            console.log("asd");
            console.log(bg_image);
        })
// adding font-size and font-family-->

// adding size 35m -->
    
        $(".height-value-laebl").click( function(e) {
            e.preventDefault();
            $(this).addClass("active");
            $(".main-image-container").css({'width' : '370px'});
            $(".main-image-container").css({'height' : '165px'});
            $(".heaight").text("35mm");
            $(".widhth").text("55mm");
        });
        $(".height-value-laebl-default").click( function(e) {
            e.preventDefault();
            $(this).addClass("active");
            $(".main-image-container").css({'width' : '270px'});
            $(".main-image-container").css({'height' : '165px'});
            $(".heaight").text("15mm")
            $(".widhth").text("38mm");
        });
// adding size 35m -->

// actvivating tabs upper on same call -->
    
        $(".inner-selector-column nav a").click( function(){
            var id_for_bartop = $(this).attr("data-src");
            // console.log($(this).data("src"));
            $(".tabs-hidden").hide();
            $('#'+id_for_bartop).css({'display' :  'flex'});
        })
// actvivating tabs upper on same call -->

// adding dropdown scripts -->
    
        $(".font-family-container").click( function(){
            $(".fonts-family").slideToggle();
            $(this).toggleClass("icon-roate")
        });
// adding dropdown scripts -->

// adding motifis icons to the mainpsot -->
    
        $(".image-container-more-motifis img").click( function(e) {
            e.preventDefault();
            var motifis_images = $(this).attr("src");
            console.log(motifis_images);
            $(".img img").show();
            $(".img img").attr({'src' : motifis_images});
            $(".polpular-motifis-tab-for-more-icons").fadeOut();
        });
        $("#motifis li").click( function(e) {
            e.preventDefault();
           var tab_id_more_icons = $(this).data("id");
           console.log(tab_id_more_icons);
            $(".popular-motifis-container-more-icon").css({'display' : 'none'});
            $('#'+tab_id_more_icons).css({'display' : 'block'});
            $(".polpular-motifis-tab-for-more-icons").fadeIn();
        });
        $(".more-motifis-close-icons").click( function(e) {
            $(this).parent().parent().fadeOut();
        });
// adding motifis icons to the mainpsot -->

// delete buttons -->
   // motifis delete -->
        
            $(".delete_button").click( function(e) {
                $(".img img").hide();
                $(".uploaded").attr({'src' : './assets/icons/company.png'});
            });
   // motifis delete -->
// delete buttons -->

// adding prev class to nav item -->
    
        $("#nav-tab a").click( function(){
            $('#nav-tab a').removeClass("previous-nav-item")
            $(this).prev().addClass("previous-nav-item")
        })
// adding prev class to nav item -->

// adding background-color to main div


    $(".color-bg").click( function(e){
        $(".main-image-container").css({'background-color' : $(this).css("background-color")});
    });
// adding background-color to main div