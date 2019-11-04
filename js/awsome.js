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
            $(".img img").css({'min-width' : '+=10px'});
            $(".img img").css({'max-width' : '+=10px'});
            console.log($(".img img").css("width"));
        });
        $('.minus_size').click( function(){
            $(".img img").css({'max-width' : '-=10px'});    
            $(".img img").css({'min-width' : '-=10px'});    
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
    new KellyColorPicker({place : 'picker1', input : 'color1', size : 150});
    $(".color-bg").click( function(e){
        $(".img").css({'background-color' : $(this).css("background-color")});
    });
    
    var observers = new MutationObserver(function(mutation) {
        mutation.forEach(function(mutationw) {
            if (mutationw.attributeName === 'style') {
                let a = $('#color1').css("background-color");
                $('.img').css('background-color', '' + a);
            }
        });
    });
    // Notify me of style changes
    var observerConfig = {
        attributes: true,
        attributeFilter: ["style"]
    };
    var targetNode = $('#color1');
    var target = targetNode[0];
    observers.observe(target, observerConfig);
// adding background-color to main div

// main div to canvas
    $(function() { 
        $("#btnSave").click(function() { 
            html2canvas($(".img"), {
                onrendered: function(canvas) {
                    theCanvas = canvas;
                    document.body.appendChild(canvas);

                    // Convert and download as image 
                    Canvas2Image.saveAsPNG(canvas); 
                    $(".image-container-modal-poppu").append(canvas);
                    // Clean up 
                    //document.body.removeChild(canvas);
                }
            });
        });
    });
// main div to canvas


// canavas to image 

    var Canvas2Image = function () {

        // check if support sth.
        var $support = function () {
            var canvas = document.createElement('canvas'),
                ctx = canvas.getContext('2d');

            return {
                canvas: !!ctx,
                imageData: !!ctx.getImageData,
                dataURL: !!canvas.toDataURL,
                btoa: !!window.btoa
            };
        }();

        var downloadMime = 'image/octet-stream';

        function scaleCanvas (canvas, width, height) {
            var w = canvas.width,
                h = canvas.height;
            if (width == undefined) {
                width = w;
            }
            if (height == undefined) {
                height = h;
            }

            var retCanvas = document.createElement('canvas');
            var retCtx = retCanvas.getContext('2d');
            retCanvas.width = width;
            retCanvas.height = height;
            retCtx.drawImage(canvas, 0, 0, w, h, 0, 0, width, height);
            return retCanvas;
        }

        function getDataURL (canvas, type, width, height) {
            canvas = scaleCanvas(canvas, width, height);
            return canvas.toDataURL(type);
        }

        function saveFile (strData) {
            document.location.href = strData;
        }

        function genImage(strData) {
            var img = document.createElement('img');
            img.src = strData;
            return img;
        }
        function fixType (type) {
            type = type.toLowerCase().replace(/jpg/i, 'jpeg');
            var r = type.match(/png|jpeg|bmp|gif/)[0];
            return 'image/' + r;
        }
        function encodeData (data) {
            if (!window.btoa) { throw 'btoa undefined' }
            var str = '';
            if (typeof data == 'string') {
                str = data;
            } else {
                for (var i = 0; i < data.length; i ++) {
                    str += String.fromCharCode(data[i]);
                }
            }

            return btoa(str);
        }
        function getImageData (canvas) {
            var w = canvas.width,
                h = canvas.height;
            return canvas.getContext('2d').getImageData(0, 0, w, h);
        }
        function makeURI (strData, type) {
            return 'data:' + type + ';base64,' + strData;
        }


        /**
         * create bitmap image
         * 按照规则生成图片响应头和响应体
         */
        var genBitmapImage = function (oData) {

            //
            // BITMAPFILEHEADER: http://msdn.microsoft.com/en-us/library/windows/desktop/dd183374(v=vs.85).aspx
            // BITMAPINFOHEADER: http://msdn.microsoft.com/en-us/library/dd183376.aspx
            //

            var biWidth  = oData.width;
            var biHeight    = oData.height;
            var biSizeImage = biWidth * biHeight * 3;
            var bfSize  = biSizeImage + 54; // total header size = 54 bytes

            //
            //  typedef struct tagBITMAPFILEHEADER {
            //      WORD bfType;
            //      DWORD bfSize;
            //      WORD bfReserved1;
            //      WORD bfReserved2;
            //      DWORD bfOffBits;
            //  } BITMAPFILEHEADER;
            //
            var BITMAPFILEHEADER = [
                // WORD bfType -- The file type signature; must be "BM"
                0x42, 0x4D,
                // DWORD bfSize -- The size, in bytes, of the bitmap file
                bfSize & 0xff, bfSize >> 8 & 0xff, bfSize >> 16 & 0xff, bfSize >> 24 & 0xff,
                // WORD bfReserved1 -- Reserved; must be zero
                0, 0,
                // WORD bfReserved2 -- Reserved; must be zero
                0, 0,
                // DWORD bfOffBits -- The offset, in bytes, from the beginning of the BITMAPFILEHEADER structure to the bitmap bits.
                54, 0, 0, 0
            ];

            //
            //  typedef struct tagBITMAPINFOHEADER {
            //      DWORD biSize;
            //      LONG  biWidth;
            //      LONG  biHeight;
            //      WORD  biPlanes;
            //      WORD  biBitCount;
            //      DWORD biCompression;
            //      DWORD biSizeImage;
            //      LONG  biXPelsPerMeter;
            //      LONG  biYPelsPerMeter;
            //      DWORD biClrUsed;
            //      DWORD biClrImportant;
            //  } BITMAPINFOHEADER, *PBITMAPINFOHEADER;
            //
            var BITMAPINFOHEADER = [
                // DWORD biSize -- The number of bytes required by the structure
                40, 0, 0, 0,
                // LONG biWidth -- The width of the bitmap, in pixels
                biWidth & 0xff, biWidth >> 8 & 0xff, biWidth >> 16 & 0xff, biWidth >> 24 & 0xff,
                // LONG biHeight -- The height of the bitmap, in pixels
                biHeight & 0xff, biHeight >> 8  & 0xff, biHeight >> 16 & 0xff, biHeight >> 24 & 0xff,
                // WORD biPlanes -- The number of planes for the target device. This value must be set to 1
                1, 0,
                // WORD biBitCount -- The number of bits-per-pixel, 24 bits-per-pixel -- the bitmap
                // has a maximum of 2^24 colors (16777216, Truecolor)
                24, 0,
                // DWORD biCompression -- The type of compression, BI_RGB (code 0) -- uncompressed
                0, 0, 0, 0,
                // DWORD biSizeImage -- The size, in bytes, of the image. This may be set to zero for BI_RGB bitmaps
                biSizeImage & 0xff, biSizeImage >> 8 & 0xff, biSizeImage >> 16 & 0xff, biSizeImage >> 24 & 0xff,
                // LONG biXPelsPerMeter, unused
                0,0,0,0,
                // LONG biYPelsPerMeter, unused
                0,0,0,0,
                // DWORD biClrUsed, the number of color indexes of palette, unused
                0,0,0,0,
                // DWORD biClrImportant, unused
                0,0,0,0
            ];

            var iPadding = (4 - ((biWidth * 3) % 4)) % 4;

            var aImgData = oData.data;

            var strPixelData = '';
            var biWidth4 = biWidth<<2;
            var y = biHeight;
            var fromCharCode = String.fromCharCode;

            do {
                var iOffsetY = biWidth4*(y-1);
                var strPixelRow = '';
                for (var x = 0; x < biWidth; x++) {
                    var iOffsetX = x<<2;
                    strPixelRow += fromCharCode(aImgData[iOffsetY+iOffsetX+2]) +
                                   fromCharCode(aImgData[iOffsetY+iOffsetX+1]) +
                                   fromCharCode(aImgData[iOffsetY+iOffsetX]);
                }

                for (var c = 0; c < iPadding; c++) {
                    strPixelRow += String.fromCharCode(0);
                }

                strPixelData += strPixelRow;
            } while (--y);

            var strEncoded = encodeData(BITMAPFILEHEADER.concat(BITMAPINFOHEADER)) + encodeData(strPixelData);

            return strEncoded;
        };

        /**
         * saveAsImage
         * @param canvasElement
         * @param {String} image type
         * @param {Number} [optional] png width
         * @param {Number} [optional] png height
         */
        var saveAsImage = function (canvas, width, height, type) {
            if ($support.canvas && $support.dataURL) {
                if (typeof canvas == "string") { canvas = document.getElementById(canvas); }
                if (type == undefined) { type = 'png'; }
                type = fixType(type);
                if (/bmp/.test(type)) {
                    var data = getImageData(scaleCanvas(canvas, width, height));
                    var strData = genBitmapImage(data);
                    saveFile(makeURI(strData, downloadMime));
                } else {
                    var strData = getDataURL(canvas, type, width, height);
                    saveFile(strData.replace(type, downloadMime));
                }
            }
        };

        var convertToImage = function (canvas, width, height, type) {
            if ($support.canvas && $support.dataURL) {
                if (typeof canvas == "string") { canvas = document.getElementById(canvas); }
                if (type == undefined) { type = 'png'; }
                type = fixType(type);

                if (/bmp/.test(type)) {
                    var data = getImageData(scaleCanvas(canvas, width, height));
                    var strData = genBitmapImage(data);
                    return genImage(makeURI(strData, 'image/bmp'));
                } else {
                    var strData = getDataURL(canvas, type, width, height);
                    return genImage(strData);
                }
            }
        };



        return {
            saveAsImage: saveAsImage,
            saveAsPNG: function (canvas, width, height) {
                return saveAsImage(canvas, width, height, 'png');
            },
            saveAsJPEG: function (canvas, width, height) {
                return saveAsImage(canvas, width, height, 'jpeg');
            },
            saveAsGIF: function (canvas, width, height) {
                return saveAsImage(canvas, width, height, 'gif');
            },
            saveAsBMP: function (canvas, width, height) {
                return saveAsImage(canvas, width, height, 'bmp');
            },

            convertToImage: convertToImage,
            convertToPNG: function (canvas, width, height) {
                return convertToImage(canvas, width, height, 'png');
            },
            convertToJPEG: function (canvas, width, height) {
                return convertToImage(canvas, width, height, 'jpeg');
            },
            convertToGIF: function (canvas, width, height) {
                return convertToImage(canvas, width, height, 'gif');
            },
            convertToBMP: function (canvas, width, height) {
                return convertToImage(canvas, width, height, 'bmp');
            }
        };

    }();
// canavas to image 