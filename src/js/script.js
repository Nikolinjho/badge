$(document).ready(function(){
    $(".creation_container > select").on("click", function(){
        $(this).toggleClass("active-up passive-down");
    });
    
    $(".print-name").on("input", function(){       // выбор имени   
        let name = $(this).val();
        if ( name.length > 8)
        $(".result_badge-custom-name").css("font-size", "40px");
        if ( $(this).val() !== ""){
            $(".result_badge-custom-name").text(name);
        } 
        else{
            $(".result_badge-custom-name").text("Солнце");
        }
        enableBtn();
    })

    $(".post-changer").on("change", function(){     // выбор должности
        let post = $(this).children("option:selected").val();
        if (post === "Выберите из списка"){
            $(".result_badge-custom-post").text("Должность");    
            $(".result_brand-logo").css("background-image", "url(./img/05.svg)");
        }
        else
            $(".result_badge-custom-post").text(post);
        enableBtn();
        if (post === "Эксперт"){
            $(".creation_brand").show();
            // switch(){

            // }
        }
        else{
            $(".creation_brand").hide();

        }
    })

    $(".brand-changer").on("change", function(){     // выбор бренда
        let brand = $(this).children("option:selected").val();
        switch (brand) {
            case "Dyson":
                $(".result_brand-logo").css({
                    "width": "65px",
                });
                $(".result_badge").css("border-bottom-color", "#2D2D2D")
                $(".result_badge-custom-name").css("color", "#2D2D2D")
                break;

                case "Huawei":
                    $(".result_brand-logo").css({
                        "width": "105px",
                    });
                    $(".result_badge").css("border-bottom-color", "#E52428")
                    $(".result_badge-custom-name").css("color", "#E52428")
                    break;

                    case "LG":
                        $(".result_brand-logo").css({
                            "width": "59.52px   "
                        });
                        $(".result_badge").css("border-bottom-color", "#C3004D")
                        $(".result_badge-custom-name").css("color", "#C3004D")
                        break;

                        case "Oppo":
                            $(".result_brand-logo").css({
                                "width": "78px",
                            });
                            $(".result_badge").css("border-bottom-color", "#1EA366")
                            $(".result_badge-custom-name").css("color", "#1EA366")
                            break;

                            case "Phillips":
                                $(".result_brand-logo").css({
                                    "width": "98.17px",
                                });
                                $(".result_badge").css("border-bottom-color", "#0B5ED7")
                                $(".result_badge-custom-name").css("color", "#0B5ED7")
                                break;

                                case "Samsung":
                                    $(".result_brand-logo").css({
                                        "width": "98px",
                                    });
                                    $(".result_badge").css("border-bottom-color", "#1E4BC6")
                                    $(".result_badge-custom-name").css("color", "#1E4BC6")
                                    break;
                                    
                                    case "Sony":
                                        $(".result_brand-logo").css({
                                            "width": "102.21px",
                                        });
                                        $(".result_badge").css("border-bottom-color", "#2D2D2D")
                                        $(".result_badge-custom-name").css("color", "#2D2D2D")
                                        break;

            default:
                break;
        }
        $(".result_brand-logo").css("background-image", `url(./img/brands/${brand}.svg)`)
    })


    $(".print").click(function(){
        window.print(); 
    })


    function enableBtn(){                   // отключить кнопки
        if ( $(".print-name").val() !== "" && $(".post-changer").children("option:selected").val() !== "Выберите из списка" ){
            $(".download, .print").attr("disabled", false). css("opacity", "1");
        }
        else
        $(".download, .print").attr("disabled", true). css("opacity", ".5");
    }

})