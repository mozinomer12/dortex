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
// uploading image into preview and in staging area
$('#upload').change(function(event) {
    $(".uploaded").fadeIn("fast").attr('src', URL.createObjectURL(event.target.files[0]));
});

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