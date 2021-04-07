$(".close").click(function() {
    $(".c-19").fadeOut("slow", function() {
        // Animation complete.
    });
});
$(".menu").click(function() {
    $(".menu-open").fadeIn("slow", function() {
        // Animation complete.
    });
});
$(".menu-open").click(function() {
    $(".menu-open").fadeOut("slow", function() {
        // Animation complete.
    });
});


$(".zoomIn").click(function() {
    $(".cairo-map").fadeIn("slow", function() {});
    $(".map").fadeOut("slow", function() {});
});
$(".zoomOut").click(function() {
    $(".map").fadeIn("slow", function() {});
    $(".cairo-map").fadeOut("slow", function() {});
});

$(".lang-switcher").click(function() {
    $(".hide-menu").slideToggle("slow", function() {
        $(".lang-switcher").toggleClass('rotate-arrow active')
            // Animation complete.
    });
});

// $(".account").click(function() {
//     $(".user-data").slideToggle("slow", function() {
//         $(".account").toggleClass('rotate-arrow active')
//             // Animation complete.
//     });
// });




var currentExp = "culture-section";
var currentActive = "culture";

function switchExpereince(e, selector) {
    e.preventDefault();

    if (`${selector}-section` == currentExp) {
        return;
    } else {
        document.querySelectorAll(`.${currentExp}`).forEach(function(item) {
            if (item.classList.contains(`${currentExp}-section-bg`)) {
                item.classList.add("fadeOut");
            } else {
                item.classList.add("animate__animated", "animate__fadeOutLeft");
            }
            setTimeout(function() {
                item.classList.add("d-none");
                item.classList.remove("animate__animated", "animate__fadeOutLeft", "fadeOut");
            }, 1000);
        });
        setTimeout(function() {
            document.querySelectorAll(`.${selector}-section`).forEach(function(item) {
                item.classList.remove("d-none");
                if (item.classList.contains(`${selector}-section-bg`)) {
                    item.classList.add("fadeIn");
                } else {
                    item.classList.add("animate__animated", "animate__fadeInRight");
                }
                setTimeout(function() {
                    item.classList.remove("animate__animated", "animate__fadeInRight", "fadeIn");
                }, 1000);

            })
            if (selector == 'kids') {
                document.querySelector('.pyramid').classList.add('kids-pyramid');
            } else {
                document.querySelector('.pyramid').classList.remove('kids-pyramid');
            }
            currentExp = `${selector}-section`;
        }, 1000);
        var target = e.target.closest('a')
        target.classList.add('exp-item-active')
        document.querySelector('.' + currentActive).classList.remove('exp-item-active')
        currentActive = selector;

    }

}

// function toggleClass(list, cls, multiCls) {
//     document.querySelectorAll(list).forEach(function(item) {
//         if (multiCls) {
//             multiCls.forEach(function(i) {
//                 item.classList.toggle(i);
//             });
//         } else {
//             item.classList.toggle(cls);
//         }
//         // item.classList.toggle("animate__animated", "animate__fadeOutLeft", "d-none")
//     })
// }



Number.prototype.format = function(n) {
    var r = new RegExp('\\d(?=(\\d{3})+' + (n > 0 ? '\\.' : '$') + ')', 'g');
    return this.toFixed(Math.max(0, Math.floor(n))).replace(r, '$&,');
};

count()

function count() {
    $(`.count`).each(function() {
        $(this).prop('counter', 0).animate({
            counter: $(this).text()
        }, {
            duration: 10000,
            easing: 'easeOutExpo',
            step: function(step) {
                $(this).text('' + step.format());
            }
        });
    });
}