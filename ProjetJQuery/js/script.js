$(document).ready(function() {
    var $mainMenuItems = $("#main-menu ul").children("li"),
        totalMainMenuItems = $mainMenuItems.length,
        openedIndex = 2,

        init = function(){
           bindEvents();
           if(validIndex(openedIndex)){
               animateItem($mainMenuItems.eq(openedIndex),true,700);
           }
        },
        bindEvents = function(){
            $mainMenuItems.children(".images").click(function(){
                var newIndex = $(this).parent().index();
                checkAndAnimateItem(newIndex);
            });

            $(".button").hover(
                function() {
                    $(this).addClass("hover");
                },
                function () {
                    $(this).removeClass("hover");
                }
            );
            $(".button").click(function() {
                var newItem = $(this).index();
                checkAndAnimateItem(newItem);
            })

        },
        validIndex = function (indexToCheck) {
            return(indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
        },
        animateItem = function($item,toOpen,speed) {
            var $colorImage = $item.find(".color"),
            itemParam = toOpen?{width:"380px"}:{width:"140px"},
            colorImageParam = toOpen?{left:"0px"}:{left:"140px"};
            $colorImage.animate(colorImageParam,speed);
            $item.animate(itemParam,speed);
        },
        checkAndAnimateItem = function(indexToCheckAnAnimate){
                if (openedIndex===indexToCheckAnAnimate) {//gestion de fermer l'item ouvert lorsque le nouveau est cliquer
                    animateItem($mainMenuItems.eq(indexToCheckAnAnimate),false,250);
                    openedIndex = -1;
                }else{
                    if(validIndex(indexToCheckAnAnimate)){
                        animateItem($mainMenuItems.eq(openedIndex),false,250);
                        openedIndex = indexToCheckAnAnimate;
                        animateItem($mainMenuItems.eq(openedIndex),true,250);
                    }
                }
        };

    init();
});