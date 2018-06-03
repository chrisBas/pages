var pg
$(document).ready(function () {
    pg = new Pg();
})

function Pg() {
    var SIL = "inLeft";
    var SIR = "inRight";
    var SOL = "outLeft";
    var SOR = "outRight";
    var IN = SIL + " " + SIR;
    var OUT = SOL + " " + SOR;
    var PGS = $($(".pages")[0]);

    this.setPg = function (element) {
        var el = $($(element)[0]);
        if ($(el).hasClass('pages')) {
            PGS = el;
        } else {
            console.error("The specified element does not contain the class 'pages'.");
        }
    }

    this.prev = function () {
        var current = PGS.children(".page." + SIR + ",.page." + SIL);
        var next = current.prev(".page");
        if (next.length != 0) {
            current.removeClass(IN);
            current.addClass(SOR);
            next.removeClass(OUT);
            next.addClass(SIL);
            next.closest(".pages").height(next.height());
        }
    }
    
    this.next = function () {
        var current = PGS.children(".page." + SIR + ",.page." + SIL);
        var next = current.next(".page");
        if (next.length != 0) {
            current.removeClass(IN);
            current.addClass(SOL);
            next.removeClass(OUT);
            next.addClass(SIR);
            next.closest(".pages").height(next.height());
        }
    }

    this.goTo = function (index) {
        // validate input
        var errors = [];
        if (!Number.isInteger(index)) {
            errors.push("The supplied index is not a valid integer.");
        } else if (index < 0 || index >= $(PGS).children(".page").length) {
            errors.push("The supplied index is out of bounds.")
        }
        if (errors.length > 0) {
            for (var i = 0; i < errors.length; i++) {
                console.error(errors[i]);
            }
            return;
        }

        // execution
        var pages = $(PGS).children(".page");
        var current = $(PGS).children(".page." + SIR + ",.page." + SIL);
        var next = $(pages[index]);
        for (var i = 0; i < pages.length; i++) {
            if (pages[i] == current[0]) {
                if (i > index) {
                    current.removeClass(IN);
                    current.addClass(SOR);
                    next.removeClass(OUT);
                    next.addClass(SIL);
                    next.closest(".pages").height(next.height());
                } else if (i < index) {
                    current.removeClass(IN);
                    current.addClass(SOL);
                    next.removeClass(OUT);
                    next.addClass(SIR);
                    next.closest(".pages").height(next.height());
                }
            }
        }

    }

    function setupPages() {
        $(".pages").children(".page:not(:first-child)").addClass(SOR);
        $(".pages").children(".page:first-child").addClass(SIL);
        $(".pages").each(function (n, el) {
            $(el).height($(el).children(".page:first-child").height())
        });
    }

    setupPages()
};