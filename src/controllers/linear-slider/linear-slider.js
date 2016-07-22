(function (fluid) {
    "use strict";

    fluid.defaults("sisiliano.linearSlider", {
        gradeNames: ["sisiliano.slider"],
        defaultViewBox: [0 ,0, 500, 50],
        ariaDescription: "Linear slider, the value can be adjusted by arrow keys. If you are using the mouse, drag along the slider",
        model: {
            padding: {
                top: 2,
                bottom: 2,
                left: 2,
                right: 2
            },
            color: "green",
            orientation: "vertical", // vertical or horizontal
            title: "linearSlider Controller",
            description: ""
        },
        selectors: {
            controller: ".sisiliano",
            svg: "svg",
            valueLabel: ".sisiliano-linear-slider-value-text",
            valueLabelRect: ".sisiliano-linear-slider-value-label",
            valueRect: ".sisiliano-linear-slider-value-rect",
            backgroundRect: ".sisiliano-linear-slider-background-rect",
            rects: ".sisiliano-linear-slider-rect",
            valueCircle: ".sisiliano-linear-slider-value-circle",
            valueCircleHover: ".sisiliano-linear-slider-value-circle-hover"
        },
        listeners: {
            onCreate: {
                func: "sisiliano.linearSlider.onCreate",
                args: ["{that}"]
            },
            onValueChange: {
                func: "sisiliano.linearSlider.onValueChange",
                args: ["{arguments}.0", "{arguments}.1"]
            },
            onColorChange: {
                func: "sisiliano.linearSlider.onColorChange",
                args: ["{that}", "{that}.model.color"]
            },
            onStatusChange: {
                func: "sisiliano.knob.onStatusChange",
                args: ["{that}", "{that}.model.status.isActive"]
            }
        },
        modelListeners: {
        }
    });

    sisiliano.knob.onStatusChange = function (that, isActive) {
        that.locate("valueCircleHover").css("display", isActive ? "block" : "none");
    };

    sisiliano.linearSlider.onValueChange = function (that, obviousValue) {
        var valueRange = that.model.size;
        var maxWidth = parseInt(that.locate("backgroundRect").attr("width"), null);
        var leftPadding = parseInt(that.locate("backgroundRect").attr("x"), null);
        var newWidth = maxWidth * (obviousValue / valueRange);
        that.locate("valueRect").attr("width", newWidth);
        that.locate("valueCircle").attr("cx", newWidth + leftPadding);
        that.locate("valueLabelRect").attr("x", newWidth + leftPadding - 25);
        that.locate("valueLabel").attr("x", newWidth + 3 + leftPadding - 25);
    };

    sisiliano.linearSlider.onColorChange = function (that, newColor) {
        that.locate("rects").attr("fill", newColor);
        that.locate("valueLabel").attr("fill", "white");
        that.locate("valueCircle").attr("fill", newColor);
    };

    sisiliano.linearSlider.onCreate = function (that) {
        sisiliano.util.getTemplate(function (template) {
            var html = template(that.model);
            that.container.html(html);
            that.events.onReady.fire();
            sisiliano.linearSlider.addListeners(that);
        }, "src/controllers/linear-slider/linear-slider.html");
    };

    sisiliano.linearSlider.setValueByPosition = function (that, clickedPosition) {
        var maxWidth = parseInt(that.locate("backgroundRect").attr("width"), null);
        var leftPadding = parseInt(that.locate("valueRect").attr("x"), null);
        var value = ((clickedPosition.x - leftPadding) / maxWidth) * that.model.size;
        if (that.model.value !== value) {
            that.applier.change("value", value + that.model.min);
        }
    };

    sisiliano.linearSlider.addListeners = function (that) {
        var mouseMoveHandler = function () {
            var position = d3.mouse(that.container.find("svg").eq(0).get(0));
            var clickedPosition = {x: position[0], y: position[1]};
            if (that.model.status.isActive) {
                sisiliano.linearSlider.setValueByPosition(that, clickedPosition);
                d3.event.preventDefault();
            }
        };

        d3.select(that.container.get(0))
            .on("touchmove", mouseMoveHandler)
            .on("mousemove", mouseMoveHandler);
    };
})(fluid);