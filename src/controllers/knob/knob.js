(function (fluid) {
    "use strict";

    fluid.defaults("sisiliano.knob", {
        gradeNames: ["fluid.viewComponent"],
        model: {
            min: 0,
            max: 100,
            color: "#009688",
            value: null,
            tickValue: 1,
            status: {
                isActive: false
            },
            formatValue: function (value) {
                return Math.round(value * 100) / 100.0;
            },
            title: "Knob Controoler",
            description: "Use up and down keys to increase and decrease the value. If you are using the mouse, Drag around the center to adjust the value"
        },
        selectors: {
            controller: ".sisiliano",
            svg: "svg",
            valueLabel: ".sisiliano-knob-value-text",
            valueCircle: ".sisiliano-knob-value-circle",
            knobBackgroundCircle: ".sisiliano-knob-background-circle",
            borderCircle: "sisiliano-knob-circle sisiliano-knob-border-circle",
            circles: ".sisiliano-knob-circle"
        },
        events: {
            onChange: null
        },
        listeners: {
            onCreate: {
                func: "sisiliano.knob.onCreate",
                args: ["{that}"]
            }
        },
        modelListeners: {
            "value": {
                func: "sisiliano.knob.onValueChange",
                args: ["{that}", "{that}.model.value"]
            },
            "formatValue": {
                func: "sisiliano.knob.onValueChange",
                args: ["{that}", "{that}.model.value"]
            },
            "color": {
                func: "sisiliano.knob.onColorChange",
                args: ["{that}", "{that}.model.color"]
            },
            "status.isActive": {
                func: "sisiliano.knob.onStatusChange",
                args: ["{that}", "{that}.model.status.isActive"]
            },
            "min": {
                func: "sisiliano.knob.onMinValueChange",
                args: ["{that}", "{that}.model.min"]
            },
            "max": {
                func: "sisiliano.knob.onMaxValueChange",
                args: ["{that}", "{that}.model.max"]
            }
        }
    });

    sisiliano.knob.onMinValueChange = function (that, min) {
        that.locate("controller").attr("aria-valuemin", min);
        sisiliano.knob.onValueChange(that, that.model.value);
    };

    sisiliano.knob.onMaxValueChange = function (that, max) {
        that.locate("controller").attr("aria-valuemax", max);
        sisiliano.knob.onValueChange(that, that.model.value);
    };

    sisiliano.knob.onStatusChange = function (that, isActive) {
        var className = "sisiliano-knob" + (isActive ? " sisiliano-active" : "");
        d3.select(that.container.get(0)).select(".sisiliano-knob").attr("class", className);
    };

    sisiliano.knob.onValueChange = function (that, newValue) {
        if (typeof newValue !== "number") {
            sisiliano.knob.updateTheValueInUI(that, that.model.min);
        } if (newValue < that.model.min) {
            newValue = that.model.min;
            that.applier.change("value", newValue);
        } else if (newValue > that.model.max) {
            newValue = that.model.max;
            that.applier.change("value", newValue);
        } else {
            sisiliano.knob.updateTheValueInUI(that, newValue);
        }
    };

    sisiliano.knob.updateTheValueInUI = function (that, newValue) {
        var formatedValue = newValue;
        if (that.model.formatValue && typeof that.model.formatValue === "function") {
            formatedValue = that.model.formatValue(newValue);
        }

        //Update the aria-valuenow
        that.container.attr("aria-valuenow", formatedValue);

        //Update the value in the UI
        that.locate("valueLabel").text(formatedValue);

        //Update the ring arc according to the value
        var valueRange = sisiliano.knob.getSize(that);
        var obviousValue = sisiliano.knob.getObviousValue(that, newValue);
        var offset = ((that.model.circumference / valueRange) * (valueRange - obviousValue)) + "px";
        that.locate("valueCircle").attr("stroke-dashoffset", offset);
    };

    sisiliano.knob.onColorChange = function (that, newColor) {
        that.locate("valueCircle").css("stroke", newColor);
        that.locate("knobBackgroundCircle").css("stroke", newColor);
        that.locate("valueCircle").css("fill", newColor);
        that.locate("knobBackgroundCircle").css("fill", newColor);
        that.locate("valueLabel").css("fill", newColor);
    };

    sisiliano.knob.init = function (that) {
        var circleRadius = 130;
        that.applier.change("radius", circleRadius);
        that.applier.change("circumference", 2 * that.model.radius * Math.PI);

        that.container.empty();
        that.container.addClass("sisiliano");
        that.container.attr("tabindex", "0");
        that.container.attr("role", "slider");
        that.container.attr("aria-label", that.model.title);
        that.container.attr("aria-describedby", that.model.description);
        that.container.attr("aria-valuenow", "");
        that.container.attr("aria-valuemax", that.model.max);
        that.container.attr("aria-valuemin", that.model.min);

        var svg = d3.select(that.container.get(0)).append("svg")
            .attr("viewBox", "0 0 300 300")
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("class", "sisiliano-knob");

        var defs = svg.append("defs");

        var filter6244 = defs.append("filter")
            .attr("id", "filter6244")
            .attr("style", "color-interpolation-filters:sRGB;");

        filter6244.append("feFlood")
            .attr("flood-opacity", "0.4")
            .attr("flood-color", "black")
            .attr("result", "flood")
            .attr("id", "feFlood6246");

        filter6244.append("feComposite")
            .attr("in", "flood")
            .attr("in2", "SourceGraphic")
            .attr("operator", "in")
            .attr("result", "composite1")
            .attr("id", "feComposite6248");

        filter6244.append("feGaussianBlur")
            .attr("in", "composite1")
            .attr("stdDeviation", "3")
            .attr("result", "blur")
            .attr("id", "feGaussianBlur6250");

        filter6244.append("feOffset")
            .attr("dx", "-1")
            .attr("dy", "1")
            .attr("result", "offset")
            .attr("id", "feOffset6252");

        filter6244.append("feComposite")
            .attr("in", "SourceGraphic")
            .attr("in2", "offset")
            .attr("operator", "over")
            .attr("result", "composite2")
            .attr("id", "feComposite6254");

        var filter6245 = defs.append("filter")
            .attr("id", "filter6245")
            .attr("style", "color-interpolation-filters:sRGB;");

        filter6245.append("feFlood")
            .attr("flood-opacity", "0.5")
            .attr("flood-color", "black")
            .attr("result", "flood")
            .attr("id", "feFlood6246");

        filter6245.append("feComposite")
            .attr("in", "flood")
            .attr("in2", "SourceGraphic")
            .attr("operator", "in")
            .attr("result", "composite1")
            .attr("id", "feComposite6248");

        filter6245.append("feGaussianBlur")
            .attr("in", "composite1")
            .attr("stdDeviation", "3.5")
            .attr("result", "blur")
            .attr("id", "feGaussianBlur6250");

        filter6245.append("feOffset")
            .attr("dx", "2")
            .attr("dy", "-2")
            .attr("result", "offset")
            .attr("id", "feOffset6252");

        filter6245.append("feComposite")
            .attr("in", "SourceGraphic")
            .attr("in2", "offset")
            .attr("operator", "over")
            .attr("result", "composite2")
            .attr("id", "feComposite6254");

        //Style
        svg.append("style")
            .text(".sisiliano-knob-circle { filter: url('#filter6244'); } " +
                ".sisiliano-border, .sisiliano:focus .sisiliano-knob-circle { filter: url('#filter6245'); });");

        //borderCircle
        svg.append("circle")
            .attr("class", "sisiliano-border")
            .attr("r", "147")
            .attr("cx", "150")
            .attr("cy", "150")
            .attr("stroke-dasharray", that.model.circumference + "px");

        //backgroundCircle
        svg.append("circle")
            .attr("class", "sisiliano-knob-circle sisiliano-knob-background-circle")
            .attr("id", "circle5634")
            .attr("r", "130")
            .attr("cx", "150")
            .attr("cy", "150")
            .attr("stroke-dasharray", that.model.circumference + "px");

        //valueLabel
        svg.append("text")
            .attr("x", "40")
            .attr("y", "170")
            .attr("class", "unselectable sisiliano-knob-value-text");

        //valueCircle
        svg.append("circle")
            .attr("class", "sisiliano-knob-circle sisiliano-knob-value-circle")
            .attr("fill", "transparent")
            .attr("id", "circle5636")
            .attr("r", "130")
            .attr("cx", "150")
            .attr("cy", "150")
            .attr("transform", "rotate(90, 150, 150)")
            .attr("stroke-width", "20")
            .attr("stroke-dasharray", that.model.circumference + "px");
    };

    sisiliano.knob.onCreate = function (that) {
        sisiliano.knob.validateInputs(that);
        sisiliano.knob.init(that);
        sisiliano.knob.onColorChange(that, that.model.color);
        sisiliano.knob.onValueChange(that, that.model.value);
        sisiliano.knob.addListeners(that);
    };

    sisiliano.knob.validateInputs = function (that) {
        //TODO modified according to the standards of infusion
        if (that.model.min >= that.model.max) {
            throw new Error("Min should be less than max");
        }
    };

    sisiliano.knob.addListeners = function (that) {
        var mouseMoveHandler = function () {
            var position = d3.mouse(that.container.find("svg").eq(0).get(0));
            var center = {x: 150, y: 150};
            var clickedPosition = {x: position[0], y: position[1]};
            if (that.model.status.isActive) {
                sisiliano.knob.setValueByAngle(that, center, clickedPosition);
                d3.event.preventDefault();
            }
        };
        var keyDownHandler = function () {
            var currentValue = sisiliano.knob.getValue(that);
            if (d3.event.keyCode === 38) {
                that.applier.change("value", currentValue + that.model.tickValue);
                d3.event.preventDefault();
            } else if (d3.event.keyCode === 40) {
                that.applier.change("value", currentValue - that.model.tickValue);
                d3.event.preventDefault();
            }
        };

        document.addEventListener("mousemove", function (evt) {
            var svgElm = that.locate("svg");
            if (svgElm && svgElm.length > 0) {
                var svgPosition = svgElm.position();
                var center = {x: svgPosition.left + (svgElm.width() / 2), y: svgPosition.top + (svgElm.height() / 2)};
                var clickedPosition = {x: evt.pageX, y: evt.pageY};
                if (that.model.status.isActive) {
                    sisiliano.knob.setValueByAngle(that, center, clickedPosition);

                    return false;
                }
            }
        });
        document.addEventListener("mouseup", sisiliano.knob.setKnobActiveStatus.bind(this, that, false));

        d3.select(that.container.get(0))
            .on("keydown", keyDownHandler)
            .on("mousedown", sisiliano.knob.setKnobActiveStatus.bind(this, that, true))
            .on("touchstart", sisiliano.knob.setKnobActiveStatus.bind(this, that, true))
            .on("touchmove", mouseMoveHandler)
            .on("mousemove", mouseMoveHandler)
            .on("mouseup", sisiliano.knob.setKnobActiveStatus.bind(this, that, false))
            .on("touchend", sisiliano.knob.setKnobActiveStatus.bind(this, that, false));
    };

    sisiliano.knob.setKnobActiveStatus = function (that, status) {
        that.applier.change("status.isActive", status);
    };

    sisiliano.knob.setValueByAngle = function (that, center, clickedPosition) {
        var value = sisiliano.util.getAngle(center, clickedPosition) * sisiliano.knob.getSize(that);
        if (that.model.value !== value) {
            that.applier.change("value", value + that.model.min);
        }
    };

    sisiliano.knob.getSize = function (that) {
        return Math.abs(that.model.max - that.model.min);
    };

    sisiliano.knob.getValue = function (that) {
        if (typeof that.model.value === "number") {
            return that.model.value;
        } else {
            return that.model.min;
        }
    };

    sisiliano.knob.getObviousValue = function (that, value) {
        return value - that.model.min;
    };
})(fluid);