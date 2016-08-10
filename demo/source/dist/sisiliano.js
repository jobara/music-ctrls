/*! sisiliano - v1.0.0 - 2016-08-10 

*/var htmlTempl = htmlTempl || {};
htmlTempl["templates"] = {"src/controllers/knob/knob.html":"<svg\r\n        id=\"{{id}}\"\r\n        aria-hidden=\"true\"\r\n        viewBox=\"0 0 300 300\"\r\n        width=\"100%\"\r\n        height=\"100%\"\r\n        class=\"sisiliano-knob\">\r\n    <defs\r\n            id=\"defs4\">\r\n        <filter style=\"color-interpolation-filters:sRGB;\" id=\"{{id}}-drop-shadow\" x=\"-100%\" y=\"-100%\" width=\"300%\" height=\"400%\">\r\n            <feFlood flood-opacity=\"0.5\" flood-color=\"{{color.[1]}}\" result=\"flood\"></feFlood>\r\n            <feComposite in=\"flood\" in2=\"SourceGraphic\" operator=\"in\" result=\"comp\"></feComposite>\r\n            <feOffset dx=\"0\" dy=\"0\" result=\"offset\"></feOffset>\r\n            <feGaussianBlur in=\"offset\" stdDeviation=\"4\" result=\"blur\"></feGaussianBlur>\r\n            <feBlend in=\"SourceGraphic\" in2=\"blur\" mode=\"normal\"></feBlend>\r\n        </filter>\r\n        <filter style=\"color-interpolation-filters:sRGB;\" id=\"{{id}}-hover-drop-shadow\" x=\"-100%\" y=\"-100%\" width=\"300%\" height=\"400%\">\r\n            <feFlood flood-opacity=\"0.5\" flood-color=\"{{color.[1]}}\" result=\"flood\"></feFlood>\r\n            <feComposite in=\"flood\" in2=\"SourceGraphic\" operator=\"in\" result=\"comp\"></feComposite>\r\n            <feOffset dx=\"0\" dy=\"0\" result=\"offset\"></feOffset>\r\n            <feGaussianBlur in=\"offset\" stdDeviation=\"6\" result=\"blur\"></feGaussianBlur>\r\n            <feBlend in=\"SourceGraphic\" in2=\"blur\" mode=\"normal\"></feBlend>\r\n        </filter>\r\n    </defs>\r\n\r\n    <style>\r\n        #{{id}} .sisiliano-knob-circle,\r\n        #{{id}} .sisiliano-border {\r\n            filter: url(\"#{{id}}-drop-shadow\");\r\n        }\r\n\r\n        #{{id}} .sisiliano:focus .sisiliano-knob-circle {\r\n            filter: url(\"#{{id}}-hover-drop-shadow\");\r\n        }\r\n    </style>\r\n\r\n    <rect\r\n            class=\"sisiliano-border-div sisiliano-border\"\r\n            width=\"100%\"\r\n            height=\"100%\"\r\n            rx=\"50%\"\r\n            ry=\"50%\"\r\n            x=\"0\"\r\n            y=\"0\">\r\n    </rect>\r\n\r\n    <g class=\"sisiliano-controller-div\">\r\n        <circle\r\n                class=\"sisiliano-knob-circle sisiliano-knob-background-circle\"\r\n                id=\"circle5634\"\r\n                r=\"130\"\r\n                cx=\"150\"\r\n                cy=\"150\"/>\r\n        <text xmlns=\"http://www.w3.org/2000/svg\" x=\"40\" y=\"170\"\r\n              class=\"unselectable sisiliano-knob-value-text\">\r\n            100\r\n        </text>\r\n        <circle\r\n                class=\"sisiliano-knob-circle sisiliano-knob-value-circle\"\r\n                fill=\"transparent\"\r\n                id=\"circle5636\"\r\n                r=\"130\"\r\n                cx=\"150\"\r\n                cy=\"150\"\r\n                transform=\"rotate(90, 150, 150)\"\r\n                stroke-width=\"20\"/>\r\n    </g>\r\n</svg>","src/controllers/linear-slider/linear-slider.html":"<svg\r\n        id=\"{{id}}\"\r\n        aria-hidden=\"true\"\r\n        width=\"100%\"\r\n        height=\"100%\"\r\n        class=\"sisiliano-linear-slider\">\r\n    <defs\r\n            id=\"defs4\">\r\n        <filter style=\"color-interpolation-filters:sRGB;\" id=\"{{id}}-drop-shadow\" x=\"-100%\" y=\"-100%\" width=\"300%\" height=\"400%\">\r\n            <feFlood flood-opacity=\"0.5\" flood-color=\"{{color.[1]}}\" result=\"flood\"></feFlood>\r\n            <feComposite in=\"flood\" in2=\"SourceGraphic\" operator=\"in\" result=\"comp\"></feComposite>\r\n            <feOffset dx=\"0\" dy=\"0\" result=\"offset\"></feOffset>\r\n            <feGaussianBlur in=\"offset\" stdDeviation=\"4\" result=\"blur\"></feGaussianBlur>\r\n            <feBlend in=\"SourceGraphic\" in2=\"blur\" mode=\"normal\"></feBlend>\r\n        </filter>\r\n        <filter style=\"color-interpolation-filters:sRGB;\" id=\"{{id}}-hover-drop-shadow\" x=\"-100%\" y=\"-100%\" width=\"300%\" height=\"400%\">\r\n            <feFlood flood-opacity=\"0.5\" flood-color=\"{{color.[1]}}\" result=\"flood\"></feFlood>\r\n            <feComposite in=\"flood\" in2=\"SourceGraphic\" operator=\"in\" result=\"comp\"></feComposite>\r\n            <feOffset dx=\"0\" dy=\"0\" result=\"offset\"></feOffset>\r\n            <feGaussianBlur in=\"offset\" stdDeviation=\"6\" result=\"blur\"></feGaussianBlur>\r\n            <feBlend in=\"SourceGraphic\" in2=\"blur\" mode=\"normal\"></feBlend>\r\n        </filter>\r\n    </defs>\r\n\r\n    <style>\r\n        #{{id}}.sisiliano-linear-slider .sisiliano-linear-slider-background-rect,\r\n        #{{id}}.sisiliano-linear-slider .sisiliano-linear-slider-value-rect,\r\n        #{{id}}.sisiliano-linear-slider .sisiliano-linear-slider-value-pointer,\r\n        #{{id}}.sisiliano-linear-slider .sisiliano-linear-slider-value-pointer-hover,\r\n        #{{id}}.sisiliano-linear-slider .sisiliano-linear-slider-value-label,\r\n        #{{id}}.sisiliano-linear-slider .sisiliano-border {\r\n            filter: url(\"#{{id}}-drop-shadow\");\r\n        }\r\n\r\n        .sisiliano:focus #{{id}}.sisiliano-linear-slider .sisiliano-linear-slider-background-rect,\r\n        .sisiliano:focus #{{id}}.sisiliano-linear-slider .sisiliano-linear-slider-value-rect {\r\n            filter: url(\"#{{id}}-hover-drop-shadow\");\r\n        }\r\n    </style>\r\n\r\n    <rect\r\n            class=\"sisiliano-border-div sisiliano-border\"\r\n            width=\"100%\"\r\n            height=\"100%\"\r\n            x=\"0\"\r\n            y=\"0\">\r\n    </rect>\r\n\r\n    <g class=\"sisiliano-controller-div\">\r\n        <rect\r\n                class=\"sisiliano-linear-slider-rect sisiliano-linear-slider-background-rect\"\r\n                height=\"8\"\r\n                width=\"10\"\r\n                x=\"40\"\r\n                y=\"37\"/>\r\n        <rect\r\n                class=\"sisiliano-linear-slider-rect sisiliano-linear-slider-value-rect\"\r\n                height=\"10\"\r\n                width=\"200\"\r\n                x=\"40\"\r\n                y=\"36\"/>\r\n        <g class=\"sisiliano-linear-slider-ruler\"></g>\r\n        <rect\r\n                class=\"sisiliano-linear-slider-value-pointer sisiliano-linear-slider-value-pointer-hover\"\r\n                width=\"30\"\r\n                height=\"30\"\r\n                rx=\"50%\"\r\n                ry=\"50%\"\r\n                x=\"90\"\r\n                y=\"26\">\r\n        </rect>\r\n        <rect\r\n                class=\"sisiliano-linear-slider-value-pointer sisiliano-linear-slider-value-pointer\"\r\n                width=\"20\"\r\n                height=\"20\"\r\n                rx=\"50%\"\r\n                ry=\"50%\"\r\n                x=\"90\"\r\n                y=\"31\">\r\n        </rect>\r\n        <rect\r\n                class=\"sisiliano-linear-slider-value-label\"\r\n                x=\"10\"\r\n                y=\"0\"\r\n                fill=\"{{color}}\"\r\n                width=\"50\"\r\n                height=\"20\"\r\n                rx=\"2\"\r\n                ry=\"2\">\r\n        </rect>\r\n        <text text-anchor=\"middle\"\r\n              x=\"10\"\r\n              y=\"15\"\r\n              class=\"unselectable sisiliano-linear-slider-value-text\">\r\n            100\r\n        </text>\r\n    </g>\r\n</svg>","src/controllers/piano/piano.html":"<div tabindex=\"0\" class=\"sisiliano\" aria-label=\"{{title}} ,{{description}}\" id=\"{{id}}\">\r\n    <svg\r\n            class=\"sisiliano-piano\"\r\n            width=\"100%\"\r\n            height=\"100%\"\r\n            viewBox=\"0 0 {{viewBox.width}} {{viewBox.height}}\">\r\n        <defs\r\n                id=\"defs4\">\r\n            <filter style=\"color-interpolation-filters:sRGB;\" id=\"{{id}}-drop-shadow\" x=\"-100%\" y=\"-100%\" width=\"300%\" height=\"400%\">\r\n                <feFlood flood-opacity=\"0.5\" flood-color=\"{{color.[1]}}\" result=\"flood\"></feFlood>\r\n                <feComposite in=\"flood\" in2=\"SourceGraphic\" operator=\"in\" result=\"comp\"></feComposite>\r\n                <feOffset dx=\"0\" dy=\"0\" result=\"offset\"></feOffset>\r\n                <feGaussianBlur in=\"offset\" stdDeviation=\"4\" result=\"blur\"></feGaussianBlur>\r\n                <feBlend in=\"SourceGraphic\" in2=\"blur\" mode=\"normal\"></feBlend>\r\n            </filter>\r\n            <filter style=\"color-interpolation-filters:sRGB;\" id=\"{{id}}-hover-drop-shadow\" x=\"-100%\" y=\"-100%\" width=\"300%\" height=\"400%\">\r\n                <feFlood flood-opacity=\"0.5\" flood-color=\"{{color.[1]}}\" result=\"flood\"></feFlood>\r\n                <feComposite in=\"flood\" in2=\"SourceGraphic\" operator=\"in\" result=\"comp\"></feComposite>\r\n                <feOffset dx=\"0\" dy=\"0\" result=\"offset\"></feOffset>\r\n                <feGaussianBlur in=\"offset\" stdDeviation=\"6\" result=\"blur\"></feGaussianBlur>\r\n                <feBlend in=\"SourceGraphic\" in2=\"blur\" mode=\"normal\"></feBlend>\r\n            </filter>\r\n        </defs>\r\n\r\n        <style>\r\n            /* These styles have been added seperately as a fix for firefox and IE */\r\n            #{{id}}.sisiliano .sisiliano-piano .sisiliano-piano-white-key {\r\n                filter: url('#{{id}}-drop-shadow');\r\n            }\r\n\r\n            #{{id}}.sisiliano .sisiliano-piano .sisiliano-piano-black-key {\r\n                filter: url('#{{id}}-drop-shadow');\r\n            }\r\n\r\n            #{{id}}.sisiliano-border {\r\n                filter: url(\"#{{id}}-hover-drop-shadow\");\r\n            }\r\n\r\n            #{{id}}.sisiliano .sisiliano-piano .sisiliano-piano-key-pressed {\r\n                fill: {{color.[0]}};\r\n                stroke: {{color.[0]}};\r\n            }\r\n        </style>\r\n        <rect\r\n                class=\"sisiliano-border-div sisiliano-border\"\r\n                width=\"100%\"\r\n                height=\"100%\"\r\n                x=\"0\"\r\n                y=\"0\">\r\n        </rect>\r\n        <g style=\"display:inline\" class=\"sisiliano-piano-key-board sisiliano-controller-div\">\r\n        </g>\r\n    </svg>\r\n</div>\r\n"};
(function (fluid) {
    "use strict";

    fluid.registerNamespace("sisiliano");

    sisiliano.templates = htmlTempl.templates;

    fluid.registerNamespace("sisiliano.util");
    sisiliano.util.templateCache = {};
    sisiliano.util.getTemplate = function (callback, url) {
        var template = sisiliano.util.templateCache[url];
        if (!template) {
            var source = htmlTempl.templates[url];
            template = Handlebars.compile(source);
            sisiliano.util.templateCache[url] = template;
            callback(template);
        } else {
            callback(template);
        }
    };

    sisiliano.util.addClass = function(elm, className) {
        sisiliano.util.removeClass(elm, className);
        var oldClass = $(elm).attr("class");
        var newClass = oldClass + " " + className;
        $(elm).attr("class", newClass);
    };

    sisiliano.util.removeClass = function(elm, className) {
        var oldClass = $(elm).attr("class");
        var newClass = oldClass.replace(new RegExp(" " + className, "g"), "").replace(new RegExp(className, "g"), "");
        $(elm).attr("class", newClass);
    };

    sisiliano.util.getAngle = function(center, point) {
        var angle = Math.atan(Math.abs((point.x - center.x) / (point.y - center.y))) / (2 * Math.PI);
        if (center.x > point.x) {
            if (center.y > point.y) {
                angle = 0.5 - angle;
            }
        } else {
            if (center.y < point.y) {
                angle = 0.5 - angle;
            }

            angle += 0.5;
        }

        return angle;
    };

    sisiliano.util.isInsideTheCircle = function(center, radius, point) {
        var distanceFromTheCenter = Math.sqrt(Math.pow(point.x - center.x, 2) + Math.pow(point.y - center.y, 2));
        return distanceFromTheCenter <= radius;
    };

    sisiliano.util.applyStyles = function (element, styles, restrictedStyles) {
        var stylesString = "";
        fluid.each(styles, function (value, key) {
            if (!restrictedStyles || restrictedStyles.indexOf(key.toLowerCase()) < 0) {
                stylesString += key + ":" + value + ";";
            }
        });
        element.attr("style", stylesString);
    };

    sisiliano.util.applyStylesToTheElement = function (element, styles, rules) {
        fluid.each(styles, function (value, key) {
            if (typeof value !== "object") {
                if (rules.attributes.indexOf(key) >= 0) {
                    if (key === "class") {
                        element.attr(key, element.attr(key) + " " + value);
                    } else {
                        element.attr(key, value);
                    }
                } else {
                    element.css(key, value);
                }
            }
        });

        if (styles.status) {
            var status = styles.status;
            if (typeof value !== "object") {
                status = [status];
            }

            fluid.each(status, function (statusKey) {
                sisiliano.util.applyStylesToTheElement(element, styles.statuses[statusKey], rules);
            });
        }
    };
})(fluid);

(function (fluid) {
    "use strict";
    fluid.defaults("sisiliano.util.ariaDescription", {
        gradeNames: "fluid.component",
        ariaDescription: "",
        listeners: {
            onCreate: {
                func: "sisiliano.util.ariaDescription.onCreate",
                args: ["{that}"]
            }
        }
    });

    sisiliano.util.ariaDescription.onCreate = function (that) {
        var descriptionsPane = $("#sisiliano-component-guide-descriptions");
        if (descriptionsPane.length === 0) {
            descriptionsPane = $("<div id='sisiliano-component-guide-descriptions' style='visibility: hidden'></div>");
            $("body").append(descriptionsPane);
        }

        var descriptionElementIdOfTheComponent = (that.typeName.replace(/\./g, "-") + "-guide-description").toLowerCase();
        var descriptionElementOfTheComponent = $("#" + descriptionElementIdOfTheComponent);
        if (descriptionElementOfTheComponent.length === 0) {
            descriptionElementOfTheComponent = $("<div id='" + descriptionElementIdOfTheComponent + "'>" + that.options.ariaDescription + "</div>");
            descriptionsPane.append(descriptionElementOfTheComponent);
        }

        that.container.attr("aria-describedby", descriptionElementIdOfTheComponent);
    };
})(fluid);

(function (fluid) {
    "use strict";
    
    fluid.defaults("sisiliano.util.colorable", {
        gradeNames: "fluid.component",
        model: {
            color: ["#009688", "#000000"]
        },
        events: {
            onColorChange: null
        },
        modelListeners: {
            "color.*": {
                func: "sisiliano.util.colorable.onColorChange",
                args: ["{that}", "{that}.model.color"]
            }
        },
        listeners: {
            onCreate: {
                func: "sisiliano.util.colorable.onColorChange",
                args: ["{that}", "{that}.model.color"]
            }
        }
    });

    sisiliano.util.colorable.defaultColor = ["#009688", "#000000"];

    sisiliano.util.colorable.onColorChange = function (that, color) {
        if (color) {
            if (typeof color !== "object" || !color.length) {
                color = [color];
                that.applier.change("color", color);
            } else if (color.length === 1) {
                //TODO think of a way to predict a second color for a given color
                color.push(sisiliano.util.colorable.defaultColor[1]);
                that.applier.change("color", color);
            } else {
                that.events.onColorChange.fire();
            }
        } else {
            that.applier.change("color", [
                sisiliano.util.colorable.defaultColor[0],
                sisiliano.util.colorable.defaultColor[1]
            ]);
        }
    };
})(fluid);

(function (fluid) {
    "use strict";
    
    fluid.defaults("sisiliano.component", {
        gradeNames: ["sisiliano.util.colorable", "sisiliano.util.ariaDescription", "fluid.viewComponent"],
        model: {
            template: ""
        },
        events: {
            onReady: null
        },
        selectors: {
            svg: "svg"
        },
        listeners: {
            onCreate: [
                {
                    func: "sisiliano.component.onTemplateChange",
                    args: ["{that}", "{that}.options.template"]
                },
                {
                    func: "sisiliano.component.onInit",
                    args: ["{that}"]
                }
            ],
            onReady: [
                {
                    func: "{that}.events.onColorChange.fire",
                    args: ["{that}", "{that}.model.color"]
                }
            ]
        },
        styleRules: {
            attributes: [
                "class", "cx", "cy",
                "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-width",
                "x", "y", "width", "height", "fill", "fill-opacity",
                "stroke-opacity", "transform",  "r"
            ]
        }
    });

    sisiliano.component.onInit = function (that) {
        that.container.attr("tabindex", 0);
        that.container.addClass("sisiliano");

        //A fix for https://github.com/dinukadesilva/music-ctrls/issues/59
        that.locate("svg").mousedown(function (evt) {
            evt.preventDefault();
            that.container.focus();
        });
    };

    sisiliano.component.onTemplateChange = function (that, template) {
        if (!template) {
            that.events.onReady.fire();
        } else {
            that.applier.change("id", "fluid-sisiliano-id-" + that.id);
            sisiliano.util.getTemplate(function (template) {
                var html = template(that.model);
                that.container.html(html);
                that.events.onReady.fire();
            }, template);
        }
    };

    fluid.defaults("sisiliano.border", {
        gradeNames: ["sisiliano.component"],
        model: {
            styles: {
                border: {
                    padding: {
                        left: 2,
                        right: 2,
                        top: 2,
                        bottom: 2
                    },
                    margin: {
                        left: 3,
                        right: 3,
                        top: 3,
                        bottom: 3
                    }
                },
                controller: {
                    width: 10,
                    height: 10
                }
            },
            viewBox: {
                width: 10,
                height: 10
            }
        },
        selectors: {
            controller: ".sisiliano-controller-div",
            border: ".sisiliano-border-div"
        },
        listeners: {
            onReady: [
                {
                    func: "sisiliano.border.onControllerStyleChange",
                    args: ["{that}", "{that}.model.styles"]
                },
                {
                    func: "sisiliano.border.onBorderStyleChange",
                    args: ["{that}", "{that}.model.styles"]
                }
            ]
        },
        modelListeners: {
            "viewBox.*": {
                func: "sisiliano.border.onViewBoxChange",
                args: ["{that}", "{that}.model.viewBox"]
            },
            "styles.controller.*": {
                func: "sisiliano.border.onControllerStyleChange",
                args: ["{that}", "{that}.model.styles"]
            },
            "styles.border.*": {
                func: "sisiliano.border.onBorderStyleChange",
                args: ["{that}", "{that}.model.styles"]
            }
        }
    });

    sisiliano.border.onViewBoxChange = function (that, viewBox) {
        d3.select(that.locate("svg").get(0)).attr("viewBox", "0 0 " + viewBox.width + " " + viewBox.height);
    };

    sisiliano.border.onResize = function (that, styles) {
        if (styles.controller.height && !styles.controller.width) {
            //Define the width based on the parent
            var containerHeight = that.container.height();
            var containerWidth = that.container.width();
            var svgHeight = styles.controller.height + styles.border.padding.top + styles.border.padding.bottom + styles.border.margin.top + styles.border.margin.bottom;
            var svgWidth = (containerWidth / containerHeight) * svgHeight;
            that.applier.change("styles.controller.width", svgWidth - styles.border.padding.left - styles.border.padding.right - styles.border.margin.left - styles.border.margin.right);
        }
    };

    sisiliano.border.onBorderStyleChange = function (that, styles) {
        sisiliano.border.onResize(that, styles);
        that.applier.change("styles.border.width",
            styles.controller.width + styles.border.padding.left + styles.border.padding.right);
        that.applier.change("styles.border.height",
            styles.controller.height + styles.border.padding.top + styles.border.padding.bottom);

        that.applier.change("styles.border.x", styles.border.margin.left);
        that.applier.change("styles.border.y", styles.border.margin.top);

        that.applier.change("styles.controller.x", styles.border.x + styles.border.padding.left);
        that.applier.change("styles.controller.y", styles.border.y + styles.border.padding.top);

        that.locate("border")
            .attr("width", styles.border.width)
            .attr("height", styles.border.height)
            .attr("x", styles.border.x)
            .attr("y", styles.border.y);

        that.locate("controller").attr("transform",
            "translate(" + styles.controller.x + "," + styles.controller.y + ")");

        that.applier.change("viewBox", {
            width: styles.border.width + styles.border.margin.left + styles.border.margin.right,
            height: styles.border.height + styles.border.margin.top + styles.border.margin.bottom
        });
    };

    sisiliano.border.onControllerStyleChange = function (that, styles) {
        sisiliano.border.onResize(that, styles);
        that.locate("controller")
            .attr("width", styles.controller.width)
            .attr("height", styles.controller.height);
        sisiliano.border.onBorderStyleChange(that, styles);
    };
})(fluid);
(function (fluid) {
    "use strict";

    fluid.defaults("sisiliano.util.makeMusic", {
        gradeNames: ["fluid.component"],
        listeners: {
            onCreate: {
                func: "sisiliano.util.makeMusic.onCreate",
                args: ["{that}"]
            }
        },
        invokers: {
            play: {
                funcName: "sisiliano.util.makeMusic.play",
                args: ["{that}", "{arguments}.0", "{arguments}.1"]
            },
            release: {
                funcName: "sisiliano.util.makeMusic.release",
                args: ["{that}", "{arguments}.0", "{arguments}.1"]
            }
        },
        context: null,
        masterGain: null,
        nodes: {}
    });

    sisiliano.util.makeMusic.onCreate = function (that) {
        var AudioContext = window.AudioContext || window.webkitAudioContext;
        that.context = new AudioContext();
        that.nodes = {};
        if (that.context) {
            that.masterGain = that.context.createGain();
            that.masterGain.gain.value = 0.3;
            that.masterGain.connect(that.context.destination);
        }
    };

    sisiliano.util.makeMusic.play = function (that, index, frequency) {
        var oscillator = that.context.createOscillator();
        oscillator.type = "square";
        oscillator.frequency.value = frequency;
        oscillator.connect(that.masterGain);
        oscillator.start(0);
        that.nodes[index] = oscillator;
    };

    sisiliano.util.makeMusic.release = function (that, index) {
        var node = that.nodes[index];
        if (node) {
            node.stop(0);
            node.disconnect();
            that.nodes[index] = null;
        }
    };
})(fluid);
(function (fluid) {
    "use strict";

    fluid.defaults("sisiliano.knob", {
        gradeNames: ["sisiliano.slider"],
        template: "src/controllers/knob/knob.html",
        model: {
            styles: {
                valueText: {
                    "x": 40,
                    "y": 170,
                    "class": "unselectable sisiliano-knob-value-text",
                    "font-family": "inherit",
                    "fill": "#009688",
                    "font-style": "italic",
                    "font-size": "80px"
                },
                valueKnob: {
                    "class": "sisiliano-knob-circle sisiliano-knob-value-circle",
                    "cx": 150,
                    "cy": 150,
                    "fill": "transparent",
                    "fill-opacity": 0,
                    "r": 130,
                    "stroke": "#009688",
                    "stroke-width": 20,
                    "transform": "rotate(90, 150, 150)"
                },
                backgroundKnob: {
                    "class": "sisiliano-knob-circle sisiliano-knob-background-circle",
                    "cx": 150,
                    "cy": 150,
                    "fill": "white",
                    "fill-opacity": 0,
                    "r": 130,
                    "stroke": "white",
                    "stroke-dashoffset": 0,
                    "stroke-opacity": 0.4,
                    "stroke-width": 10
                }
            }
        },
        ariaDescription: "Use up and down keys to increase and decrease the value. If you are using the mouse, Drag around the center to adjust the value",
        selectors: {
            svg: "svg",
            valueLabel: ".sisiliano-knob-value-text",
            valueCircle: ".sisiliano-knob-value-circle",
            knobBackgroundCircle: ".sisiliano-knob-background-circle",
            borderCircle: "sisiliano-knob-circle sisiliano-knob-border-circle",
            circles: ".sisiliano-knob-circle"
        },
        listeners: {
            onReady: [
                {
                    func: "sisiliano.knob.onRadiusChange",
                    args: ["{that}", "{that}.model.styles.valueKnob.r"]
                },
                {
                    func: "sisiliano.util.applyStylesToTheElement",
                    args: ["{that}.dom.valueLabel", "{that}.model.styles.valueText", "{that}.options.styleRules"]
                },
                {
                    func: "sisiliano.util.applyStylesToTheElement",
                    args: ["{that}.dom.valueCircle", "{that}.model.styles.valueKnob", "{that}.options.styleRules"]
                },
                {
                    func: "sisiliano.util.applyStylesToTheElement",
                    args: ["{that}.dom.knobBackgroundCircle", "{that}.model.styles.backgroundKnob", "{that}.options.styleRules"]
                },
                {
                    func: "sisiliano.knob.addListeners",
                    args: ["{that}"]
                }
            ],
            onValueChange: {
                func: "sisiliano.knob.onValueChange",
                args: ["{arguments}.0", "{arguments}.1", "{arguments}.2", "{arguments}.3"]
            },
            onColorChange: {
                func: "sisiliano.knob.onColorChange",
                args: ["{that}", "{that}.model.color"]
            },
            onStatusChange: {
                func: "sisiliano.knob.onStatusChange",
                args: ["{that}", "{that}.model.status.isActive"]
            }
        },
        modelListeners: {
            "styles.valueKnob.r": {
                func: "sisiliano.knob.onRadiusChange",
                args: ["{that}", "{that}.model.styles.valueKnob.r"]
            },
            "styles.valueText.*": {
                func: "sisiliano.util.applyStylesToTheElement",
                args: ["{that}.dom.valueLabel", "{that}.model.styles.valueText", "{that}.options.styleRules"]
            },
            "styles.valueKnob.*": {
                func: "sisiliano.util.applyStylesToTheElement",
                args: ["{that}.dom.valueCircle", "{that}.model.styles.valueKnob", "{that}.options.styleRules"]
            },
            "styles.backgroundKnob.*": {
                func: "sisiliano.util.applyStylesToTheElement",
                args: ["{that}.dom.knobBackgroundCircle", "{that}.model.styles.backgroundKnob", "{that}.options.styleRules"]
            }
        }
    });

    sisiliano.knob.onRadiusChange = function (that, radius) {
        var circumference = sisiliano.knob.getCircumference(radius);
        that.applier.change("styles.valueKnob.stroke-dasharray", circumference);
    };

    sisiliano.knob.onStatusChange = function (that, isActive) {
        var className = "sisiliano-knob" + (isActive ? " sisiliano-active" : "");
        d3.select(that.container.get(0)).select(".sisiliano-knob").attr("class", className);
    };

    sisiliano.knob.onValueChange = function (that, obviousValue) {
        var valueRange = that.model.size;
        var circumference = sisiliano.knob.getCircumference(that.model.styles.valueKnob.r);
        var offset = ((circumference / valueRange) * (valueRange - obviousValue)) ;
        that.applier.change("styles.valueKnob.stroke-dashoffset", offset);
    };

    sisiliano.knob.getCircumference = function (radius) {
        return 2 * radius * Math.PI;
    };

    sisiliano.knob.onColorChange = function (that, newColor) {
        that.applier.change("styles.valueKnob.fill", newColor[0]);
        that.applier.change("styles.valueKnob.stroke", newColor[0]);
        that.applier.change("styles.backgroundKnob.fill", newColor[0]);
        that.applier.change("styles.backgroundKnob.stroke", newColor[0]);
        that.applier.change("styles.valueText.fill", newColor[0]);
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

        document.addEventListener("mousemove", function (evt) {
            var svgElm = that.locate("svg");
            if (svgElm && svgElm.length > 0) {
                var svgPosition = svgElm.offset();
                var center = {x: svgPosition.left + (svgElm.width() / 2), y: svgPosition.top + (svgElm.height() / 2)};
                var clickedPosition = {x: evt.pageX, y: evt.pageY};
                if (that.model.status.isActive) {
                    sisiliano.knob.setValueByAngle(that, center, clickedPosition);
                    evt.preventDefault(evt);
                }
            }
        });
        document.addEventListener("mouseup", sisiliano.knob.setKnobActiveStatus.bind(this, that, false));

        d3.select(that.container.get(0))
            .on("touchmove", mouseMoveHandler)
            .on("mousemove", mouseMoveHandler);
    };

    sisiliano.knob.setKnobActiveStatus = function (that, status) {
        that.applier.change("status.isActive", status);
    };

    sisiliano.knob.setValueByAngle = function (that, center, clickedPosition) {
        var value = sisiliano.util.getAngle(center, clickedPosition) * that.model.size;
        if (that.model.value !== value) {
            that.applier.change("value", value + that.model.min);
        }
    };
})(fluid);
(function (fluid) {
    "use strict";

    fluid.defaults("sisiliano.linearSlider", {
        gradeNames: ["sisiliano.border", "sisiliano.slider"],
        defaultViewBox: [0 ,0, 500, 50],
        ariaDescription: "Linear slider, the value can be adjusted by arrow keys. If you are using the mouse, drag along the slider",
        template: "src/controllers/linear-slider/linear-slider.html",
        model: {
            styles: {
                pointer: {
                    label: {
                        padding: {
                            left: 3,
                            right: 3,
                            top: 3,
                            bottom: 3
                        },
                        margin: {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 12
                        }
                    },
                    labelText: {
                        "font-size": "20px",
                        fill: "white"
                    },
                    valuePointer: {
                        width: 30,
                        height: 30,
                        rx: "50%",
                        ry: "50%"
                    },
                    valuePointerShadow: {
                        width: 110,
                        height: 110,
                        rx: "50%",
                        ry: "50%"
                    }
                },
                ruler: {
                    line: {
                        width: 1,
                        height: 40
                    },
                    value: {
                        "font-size": "20px"
                    }
                },
                sliderBar: {
                    valueBar: {
                        height: 10
                    },
                    backgroundBar: {
                        height: 8
                    },
                    padding: {
                        left: 80,
                        right: 80,
                        top: 80,
                        bottom: 80
                    }
                }
            },
            rulerPoints: [0,  20, 30, 40, 50, 60, 70, 80, 90, 100],
            orientation: "vertical", // vertical or horizontal
            title: "linearSlider Controller",
            description: ""
        },
        selectors: {
            controller: ".sisiliano-controller-div",
            svg: "svg",
            valueLabel: ".sisiliano-linear-slider-value-text",
            valueLabelRect: ".sisiliano-linear-slider-value-label",
            valueRect: ".sisiliano-linear-slider-value-rect",
            backgroundRect: ".sisiliano-linear-slider-background-rect",
            rects: ".sisiliano-linear-slider-rect",
            valueCircle: ".sisiliano-linear-slider-value-circle",
            valueCircleHover: ".sisiliano-linear-slider-value-circle-hover",
            valuePointer: ".sisiliano-linear-slider-value-pointer",
            valuePointerHover: ".sisiliano-linear-slider-value-pointer-hover",
            ruler: ".sisiliano-linear-slider-ruler",
            rulerLines: ".sisiliano-linear-slider-ruler-line",
            rulerValues: ".sisiliano-linear-slider-ruler-value"
        },
        listeners: {
            onValueChange: {
                func: "sisiliano.linearSlider.onValueChange",
                args: ["{arguments}.0", "{arguments}.1"]
            },
            onColorChange: {
                func: "sisiliano.linearSlider.onColorChange",
                args: ["{that}", "{that}.model.color"]
            },
            onStatusChange: {
                func: "sisiliano.linearSlider.onStatusChange",
                args: ["{that}", "{that}.model.status.isActive"]
            },
            onReady: [
                {
                    func: "sisiliano.linearSlider.onResize",
                    args: ["{that}"]
                },
                {
                    func: "sisiliano.linearSlider.drawNotches",
                    args: ["{that}"]
                },
                {
                    func: "sisiliano.linearSlider.addListeners",
                    args: ["{that}"]
                }
            ]
        },
        modelListeners: {
            "styles.controller.*": {
                func: "sisiliano.linearSlider.onSliderStyleChange",
                args: ["{that}", "{that}.model.styles"]
            },
            "styles.sliderBar.valueBar": {
                func: "sisiliano.util.applyStylesToTheElement",
                args: ["{that}.dom.valueRect", "{that}.model.styles.sliderBar.valueBar", "{that}.options.styleRules"]
            },
            "styles.sliderBar.backgroundBar": {
                func: "sisiliano.util.applyStylesToTheElement",
                args: ["{that}.dom.backgroundRect", "{that}.model.styles.sliderBar.backgroundBar", "{that}.options.styleRules"]
            },
            "styles.pointer.label.*": {
                func: "sisiliano.util.applyStylesToTheElement",
                args: ["{that}.dom.valueLabelRect", "{that}.model.styles.pointer.label", "{that}.options.styleRules"]
            },
            "styles.pointer.labelText.*": {
                func: "sisiliano.util.applyStylesToTheElement",
                args: ["{that}.dom.valueLabel", "{that}.model.styles.pointer.labelText", "{that}.options.styleRules"]
            },
            "styles.pointer.valuePointer.*": {
                func: "sisiliano.util.applyStylesToTheElement",
                args: ["{that}.dom.valuePointer", "{that}.model.styles.pointer.valuePointer",
                    "{that}.options.styleRules"]
            },
            "styles.pointer.valuePointerShadow.*": {
                func: "sisiliano.util.applyStylesToTheElement",
                args: ["{that}.dom.valuePointerHover", "{that}.model.styles.pointer.valuePointerShadow",
                    "{that}.options.styleRules"]
            },
            "styles.ruler.line": {
                func: "sisiliano.util.applyStylesToTheElement",
                args: ["{that}.dom.rulerLines", "{that}.model.styles.ruler.line", "{that}.options.styleRules"]
            },
            "styles.ruler.value": {
                func: "sisiliano.util.applyStylesToTheElement",
                args: ["{that}.dom.rulerValues", "{that}.model.styles.ruler.value", "{that}.options.styleRules"]
            }
        }
    });

    sisiliano.linearSlider.onSliderStyleChange = function (that, styles) {
        if (styles.controller.width && styles.controller.height) {
            sisiliano.linearSlider.onSliderBarStyleChange(that);
            sisiliano.linearSlider.drawNotches(that);
            sisiliano.linearSlider.onSliderPointerStyleChange(that);

            sisiliano.slider.onValueChange(that, that.model.value);
        }
    };

    sisiliano.linearSlider.onSliderBarStyleChange = sisiliano.linearSlider.onSliderPointerStyleChange = function (that) {
        var barCenterY = (that.model.styles.sliderBar.backgroundBar.height / 2) + that.model.styles.sliderBar.padding.top;

        that.applier.change("styles.sliderBar.valueBar.x", that.model.styles.sliderBar.padding.left);
        that.applier.change("styles.sliderBar.valueBar.y",
            barCenterY - (that.model.styles.sliderBar.valueBar.height / 2));
        that.applier.change("styles.sliderBar.valueBar.width",
            that.model.styles.controller.width - that.model.styles.sliderBar.padding.left - that.model.styles.sliderBar.padding.right);
        that.applier.change("styles.sliderBar.valueBar.height", that.model.styles.sliderBar.valueBar.height);

        that.applier.change("styles.sliderBar.backgroundBar.x", that.model.styles.sliderBar.padding.left);
        that.applier.change("styles.sliderBar.backgroundBar.y",
            barCenterY - (that.model.styles.sliderBar.backgroundBar.height / 2));
        that.applier.change("styles.sliderBar.backgroundBar.width",
            that.model.styles.controller.width - that.model.styles.sliderBar.padding.left - that.model.styles.sliderBar.padding.right);
        that.applier.change("styles.sliderBar.backgroundBar.height",
            that.model.styles.sliderBar.backgroundBar.height);
    };

    sisiliano.linearSlider.onSliderPointerLabelStyleChange = sisiliano.linearSlider.onSliderPointerStyleChange = function (that) {
        var barCenterY = (that.model.styles.sliderBar.backgroundBar.height / 2) + that.model.styles.sliderBar.padding.top;

        that.applier.change("styles.pointer.labelText.y",
            barCenterY - (that.model.styles.pointer.valuePointer.height / 2) - that.model.styles.pointer.label.padding.bottom - that.model.styles.pointer.label.margin.bottom);

        if (that.locate("valueLabel").length > 0) {
            var SVGRect = d3.select(that.locate("valueLabel").get(0))[0][0].getBBox();
            that.applier.change("styles.pointer.label.x", SVGRect.x - that.model.styles.pointer.label.padding.left);
            that.applier.change("styles.pointer.label.y", SVGRect.y - that.model.styles.pointer.label.padding.top);
            that.applier.change("styles.pointer.label.width",
                SVGRect.width + that.model.styles.pointer.label.padding.left + that.model.styles.pointer.label.padding.right);
            that.applier.change("styles.pointer.label.height",
                SVGRect.height + that.model.styles.pointer.label.padding.bottom + that.model.styles.pointer.label.padding.top);
        }
    };

    sisiliano.linearSlider.onSliderPointerStyleChange = function (that) {
        //value pointer label
        sisiliano.linearSlider.onSliderPointerLabelStyleChange(that);

        var barCenterY = (that.model.styles.sliderBar.backgroundBar.height / 2) + that.model.styles.sliderBar.padding.top;

        //Value pointer
        that.applier.change("styles.pointer.valuePointer.y", barCenterY - (that.model.styles.pointer.valuePointer.height / 2));

        //Value pointer hover
        that.applier.change("styles.pointer.valuePointerShadow.y",
            barCenterY - (that.model.styles.pointer.valuePointerShadow.height / 2));
    };
    
    sisiliano.linearSlider.onResize = function (that) {
        var sliderBarPadding = that.model.styles.sliderBar.padding;
        var styles = that.model.styles;

        //Configuring the viewBox based on the container
        var svgHeight = sliderBarPadding.top + sliderBarPadding.bottom + Math.max(styles.sliderBar.backgroundBar.height,
                styles.sliderBar.valueBar.height);

        that.applier.change("styles.controller", {
            width: null,
            height: svgHeight
        });
    };

    sisiliano.linearSlider.onStatusChange = function (that, isActive) {
        that.locate("valuePointerHover").css("display", isActive ? "block" : "none");
    };

    sisiliano.linearSlider.onValueChange = function (that, obviousValue) {
        var valueRange = that.model.size;
        var maxWidth = parseInt(that.locate("backgroundRect").attr("width"), null);
        var leftPadding = parseInt(that.locate("backgroundRect").attr("x"), null);
        var newWidth = maxWidth * (obviousValue / valueRange);

        that.applier.change("styles.sliderBar.valueBar.width", newWidth);
        that.applier.change("styles.pointer.valuePointer.x",
            newWidth + leftPadding - (that.model.styles.pointer.valuePointer.width / 2));
        that.applier.change("styles.pointer.valuePointerShadow.x",
            newWidth + leftPadding - that.model.styles.pointer.valuePointerShadow.width / 2);
        that.applier.change("styles.pointer.labelText.x", newWidth + leftPadding);

        sisiliano.linearSlider.onSliderPointerLabelStyleChange(that);
    };

    sisiliano.linearSlider.onColorChange = function (that, newColor) {
        that.applier.change("styles.sliderBar.valueBar.fill",
            that.model.styles.sliderBar.valueBar.fill || newColor[0]);
        that.applier.change("styles.sliderBar.backgroundBar.fill",
            that.model.styles.sliderBar.backgroundBar.fill || newColor[0]);
        that.applier.change("styles.pointer.label.fill",
            that.model.styles.pointer.label.fill || newColor[0]);
        that.applier.change("styles.pointer.labelText.fill",
            that.model.styles.pointer.labelText.fill || newColor[1]);
        that.applier.change("styles.pointer.valuePointer.fill",
            that.model.styles.pointer.valuePointer.fill || newColor[0]);
        that.applier.change("styles.pointer.valuePointerShadow.fill",
            that.model.styles.pointer.valuePointerShadow.fill || newColor[0]);
        that.applier.change("styles.ruler.value.fill",
            that.model.styles.ruler.value.fill || newColor[0]);
        that.applier.change("styles.ruler.line.fill",
            that.model.styles.ruler.line.fill || newColor[0]);
    };

    sisiliano.linearSlider.setValueByPosition = function (that, clickedPosition) {
        var maxWidth = parseInt(that.locate("backgroundRect").attr("width"), null);
        var leftPadding = parseInt(that.locate("valueRect").attr("x"), null) + that.model.styles.controller.x;
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

        document.addEventListener("mousemove", function (evt) {
            var svgElm = that.locate("svg");
            if (svgElm && svgElm.length > 0) {
                var svgPosition = svgElm.offset();
                var svgWidth = svgElm.width();
                var clickedPosition = {x: ((evt.pageX - svgPosition.left) / svgWidth) * that.model.viewBox.width, y: 0};
                if (that.model.status.isActive) {
                    sisiliano.linearSlider.setValueByPosition(that, clickedPosition);
                    evt.preventDefault(evt);
                }
            }
        });
        document.addEventListener("mouseup", function () {
            that.applier.change("status.isActive", false);
        });

        d3.select(that.container.get(0))
            .on("touchmove", mouseMoveHandler)
            .on("mousemove", mouseMoveHandler);
    };

    sisiliano.linearSlider.getNotches = function (that) {
        //TODO define
        return that.model.rulerPoints.filter( function (value) {
            return value >= that.model.min && value <= that.model.max;
        });
    };

    sisiliano.linearSlider.drawNotches = function (that) {
        var notches = sisiliano.linearSlider.getNotches(that);
        that.locate("ruler").empty();
        var notchesPane = d3.select(that.locate("ruler").get(0));
        var sliderWidth = parseInt(that.locate("backgroundRect").attr("width"), null);
        var sliderX = parseInt(that.locate("backgroundRect").attr("x"), null);
        var sliderY = parseInt(that.locate("backgroundRect").attr("y"), null);
        fluid.each(notches, function (notchValue) {
            var x = sliderX + (sliderWidth * (notchValue - that.model.min) / (that.model.max - that.model.min));
            notchesPane.append("rect")
                .attr("class", "sisiliano-linear-slider-ruler-line")
                .attr("x", x)
                .attr("y", sliderY);

            notchesPane.append("text")
                .attr("class", "sisiliano-linear-slider-ruler-value")
                .attr("text-anchor", "end")
                .attr("x", x - 5)
                .attr("y", sliderY + that.model.styles.ruler.line.height)
                .text(notchValue);
        });

        sisiliano.util.applyStylesToTheElement(that.locate("rulerLines"),
            that.model.styles.ruler.line, that.options.styleRules);
        sisiliano.util.applyStylesToTheElement(that.locate("rulerValues"),
            that.model.styles.ruler.value, that.options.styleRules);
    };
})(fluid);
(function (fluid) {
    "use strict";

    fluid.defaults("sisiliano.piano", {
        gradeNames: ["sisiliano.border", "sisiliano.component"],
        template: "src/controllers/piano/piano.html",
        ariaDescription: "Piano keys are accessible by mouse and the keyboad as well. Only the active area of the piano is accessible by the keyboard. If you want to move the active area, use left and right keys.",
        model: {
            color: "#4CAF50",
            styles: {
                keyBoard: {
                    padding: {
                        top: 20,
                        bottom: 20,
                        left: 20,
                        right: 20
                    },
                    whiteKey: {
                        width: 40,
                        height: 150
                    },
                    blackKey: {
                        width: 27,
                        height: 100
                    }
                }
            },
            keyBoard: {
                keys: [],
                length: 36,
                start: 0,
                activeArea: {
                    start: 0,
                    end: 10
                }
            }
        },
        events: {
            onKeyPress: null,
            onKeyRelease: null
        },
        selectors: {
            root: ".sisiliano",
            svg: ".sisiliano-piano",
            keyBoard: ".sisiliano-piano-key-board",
            whiteKeys: ".sisiliano-piano-white-key",
            blackKeys: ".sisiliano-piano-black-key",
            keys: ".sisiliano-piano-key",
            activeAreaStatus: ".sisiliano-piano-active-area-status",
            pressedKeys: ".sisiliano-piano-key-pressed"
        },
        listeners: {
            onReady: [
                {
                    func: "sisiliano.piano.generateKeyboard",
                    args: ["{that}"]
                },
                {
                    func: "sisiliano.piano.onCreate",
                    args: ["{that}", "{that}.dom.keyBoard"]
                }
            ]
        },
        modelListeners: {
            "keyBoard.activeArea.*": {
                func: "sisiliano.piano.onChangeActiveArea",
                args: ["{that}", "{that}.model.keyBoard.keys", "{that}.model.keyBoard.activeArea"]
            },
            "keyBoard.keys": {
                func: "sisiliano.piano.onKeysChange",
                args: ["{that}", "{that}.model.keyBoard.keys"]
            }
        }
    });

    sisiliano.piano.onChangeActiveArea = function (that, keys, activeArea) {
        var allocatedComputerKeysForThePiano = [81, 65, 87, 83, 69, 68, 82, 70, 84, 71, 89, 72,
            85, 74, 73, 75, 79, 76, 80, 186, 219, 222, 221];

        var whiteKeys = sisiliano.piano.getWhiteKeys(keys);

        if (whiteKeys.length > 0) {
            var activeStartKey = whiteKeys[activeArea.start];
            var activeEndKey = whiteKeys[Math.min(activeArea.end, that.model.keyBoard.length - 1)];
            var activeStartIndex = activeStartKey.index;
            var activeEndIndex = activeEndKey.index;
            var activeAreaStatusMessage = "The piano is active from " + sisiliano.piano.getMusicNote(activeStartKey) + " to " + sisiliano.piano.getMusicNote(activeEndKey);
            that.locate("activeAreaStatus").text(activeAreaStatusMessage);

            if (activeStartIndex > 0) {
                var previousKey = keys[activeStartIndex - 1];
                if (previousKey.color === "BLACK") {
                    activeStartIndex--;
                }
            }

            if (activeEndIndex < keys.length - 1) {
                var nextKey = keys[activeEndIndex + 1];
                if (nextKey.color === "BLACK") {
                    activeEndIndex++;
                }
            }

            var allocatedKeyIndex = 0;
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                key.isActive = i >= activeStartIndex && i <= activeEndIndex;

                if (key.isActive && allocatedKeyIndex === 0 && key.color === "WHITE") {
                    allocatedKeyIndex++;
                }

                if (allocatedKeyIndex > 1 && key.color === "WHITE" && keys[i - 1].color === "WHITE") {
                    allocatedKeyIndex++;
                }

                if (key.isActive) {
                    key.keyCode = allocatedComputerKeysForThePiano[allocatedKeyIndex];
                    allocatedKeyIndex++;
                } else {
                    key.keyCode = null;
                }
            }

        }

        //TODO fix
        //that.applier.change("keyBoard.keys", keys);
        sisiliano.piano.onKeysChange(that, keys);
        sisiliano.piano.clearPressedNodes(that);
    };

    sisiliano.piano.onKeysChange = function (that, keys) {
        d3.select(that.container.get(0)).selectAll(".sisiliano-piano-key").each(function () {
            var key = sisiliano.piano.getElementKey(d3.select(this), keys);
            sisiliano.piano.updateKey(that, key, d3.select(this));
        });
    };

    sisiliano.piano.getElementKey = function (element, keys) {
        return keys[element.attr("index")];
    };

    sisiliano.piano.onCreate = function (that) {
        var keyBoardElm = d3.select(that.locate("keyBoard").get(0));

        keyBoardElm.empty();
        keyBoardElm.append("text")
            .attr("x", 0)
            .attr("y", 0)
            .attr("aria-live", "assertive")
            .attr("class", "sisiliano-piano-active-area-status")
            .text("Piano is active from G to C");

        fluid.each(sisiliano.piano.getWhiteKeys(that.model.keyBoard.keys), function (whiteKey) {
            var key = keyBoardElm.append("rect")
                .attr("index", whiteKey.index)
                .attr("class", "sisiliano-piano-key sisiliano-piano-white-key")
                .attr("height", whiteKey.height)
                .attr("width", whiteKey.width)
                .attr("x", whiteKey.x)
                .attr("y", whiteKey.y);
            sisiliano.util.applyStyles(key, that.model.styles.keyBoard.whiteKey,
                ["x", "y", "width", "height"]);
        });

        fluid.each(sisiliano.piano.getBlackKeys(that.model.keyBoard.keys), function (blackKey) {
            var key = keyBoardElm.append("rect")
                .attr("index", blackKey.index)
                .attr("class", "sisiliano-piano-key sisiliano-piano-black-key")
                .attr("height", blackKey.height)
                .attr("width", blackKey.width)
                .attr("x", blackKey.x)
                .attr("y", blackKey.y);
            sisiliano.util.applyStyles(key, that.model.styles.keyBoard.blackKey,
                ["x", "y", "width", "height"]);
        });

        sisiliano.piano.onChangeActiveArea(that, that.model.keyBoard.keys, that.model.keyBoard.activeArea);
        sisiliano.piano.appendListeners(that);
    };

    sisiliano.piano.moveTabBy = function (that, increaseBy) {
        if (increaseBy) {
            var newActiveArea = {
                start: that.model.keyBoard.activeArea.start + increaseBy,
                end: that.model.keyBoard.activeArea.end + increaseBy
            };
            var whiteKeys = sisiliano.piano.getWhiteKeys(that.model.keyBoard.keys);
            var isValid = newActiveArea.start >= 0 && newActiveArea.start < whiteKeys.length &&
                newActiveArea.end >= 0 && newActiveArea.end < whiteKeys.length &&
                newActiveArea.start < newActiveArea.end;
            if (isValid) {
                that.applier.change("keyBoard.activeArea", newActiveArea);
            }
        }
    };

    sisiliano.piano.clearPressedNodes = function (that) {
        for (var i = 0; i < that.model.keyBoard.keys.length; i++) {
            var key = that.model.keyBoard.keys[i];
            key.isPressed = false;
            sisiliano.piano.updateKey(that, key);
            sisiliano.piano.releaseKey(that, key);
        }
    };

    sisiliano.piano.appendListeners = function (that) {
        var mouseDown = false;

        d3.select(document).on("mouseup", function () {
            mouseDown = false;
        });

        var keyPressHandler = function () {
            mouseDown = true;
            var clickedIndex = d3.select(this).attr("index");
            var clickedKey = that.model.keyBoard.keys[clickedIndex];
            if (mouseDown && !clickedKey.isPressed) {
                clickedKey.isPressed = true;
                sisiliano.piano.updateKey(that, clickedKey);
                sisiliano.piano.playKey(that, clickedKey);
            }
        };

        var keyOverHandler = function () {
            var clickedIndex = d3.select(this).attr("index");
            var clickedKey = that.model.keyBoard.keys[clickedIndex];
            if (mouseDown && !clickedKey.isPressed) {
                clickedKey.isPressed = true;
                sisiliano.piano.updateKey(that, clickedKey);
                sisiliano.piano.playKey(that, clickedKey);
            }

            d3.event.preventDefault();
        };

        var keyUpHandler = function () {
            mouseDown = false;
            var clickedIndex = d3.select(this).attr("index");
            var clickedKey = that.model.keyBoard.keys[clickedIndex];

            clickedKey.isPressed = false;
            sisiliano.piano.updateKey(that, clickedKey);
            sisiliano.piano.releaseKey(that, clickedKey);
        };

        var keyMoveOutHndler = function () {
            var clickedIndex = d3.select(this).attr("index");
            var clickedKey = that.model.keyBoard.keys[clickedIndex];

            clickedKey.isPressed = false;
            sisiliano.piano.updateKey(that, clickedKey);
            sisiliano.piano.releaseKey(that, clickedKey);

            d3.event.preventDefault();
        };

        d3.select(that.container.get(0)).selectAll(".sisiliano-piano-key")
            .on("mousedown", keyPressHandler)
            .on("touchstart", keyPressHandler)
            .on("mouseover", keyOverHandler)
            .on("touchmove", keyOverHandler)
            .on("mouseup", keyUpHandler)
            .on("touchend", keyUpHandler)
            .on("touchcancel", keyMoveOutHndler)
            .on("mouseleave", keyMoveOutHndler);

        d3.select(that.container.get(0)).on("keydown", function () {
            var keyCode = d3.event.keyCode;
            var mappedPianoKey = sisiliano.piano.getKeyByComputerKeyCode(keyCode, that.model.keyBoard.keys);
            if (mappedPianoKey && !mappedPianoKey.isPressed) {
                mappedPianoKey.isPressed = true;
                sisiliano.piano.updateKey(that, mappedPianoKey);
                sisiliano.piano.playKey(that, mappedPianoKey);
            } else {
            }

            //Handel the arrow click
            switch (keyCode) {
                case 37:
                    sisiliano.piano.moveTabBy(that, -1);
                    d3.event.preventDefault();
                    break;
                case 39:
                    sisiliano.piano.moveTabBy(that, 1);
                    d3.event.preventDefault();
                    break;
            }
        });

        d3.select(that.container.get(0)).on("keyup", function () {
            var keyCode = d3.event.keyCode;
            var mappedPianoKey = sisiliano.piano.getKeyByComputerKeyCode(keyCode, that.model.keyBoard.keys);
            if (mappedPianoKey) {
                mappedPianoKey.isPressed = false;
                sisiliano.piano.updateKey(that, mappedPianoKey);
                sisiliano.piano.releaseKey(that, mappedPianoKey);

                d3.event.preventDefault();
            }
        });

        document.addEventListener("mouseup", function () {
            d3.select(that.container.get(0)).selectAll(".sisiliano-piano-key-pressed").each(keyUpHandler);
        });
    };

    sisiliano.piano.playKey = function (that, key) {
        that.events.onKeyPress.fire(key.index, sisiliano.piano.getFreequency(key.octave, key.octaveIndex));
    };

    sisiliano.piano.releaseKey = function (that, key) {
        that.events.onKeyRelease.fire(key.index);
    };

    sisiliano.piano.updateKey = function (that, key, element) {
        if (!element) {
            element = that.container.find(".sisiliano-piano-key[index='" + key.index + "']");
        }

        var className = key.className;
        className += key.isActive ? " sisiliano-piano-key-active" : " sisiliano-piano-key-inactive";
        className += key.isPressed ? " sisiliano-piano-key-pressed" : "";

        element.attr("class", className);
    };

    sisiliano.piano.getKeyByComputerKeyCode = function (computerKeyCode, keys) {
        var matchingKeys = keys.filter(function (key) {
            return key.keyCode === computerKeyCode;
        });

        if (matchingKeys.length === 0) {
            return null;
        } else {
            return matchingKeys[0];
        }
    };

    sisiliano.piano.getKeysByColor = function (keys, color) {
        return keys.filter(function (key) {
            return key.color === color;
        });
    };

    sisiliano.piano.getFreequency = function (octave, octaveIndex) {
        var frequencyMap = [
            261.626,
            277.183,
            293.665,
            311.127,
            329.628,
            349.228,
            369.994,
            391.995,
            415.305,
            440,
            466.164,
            493.883
        ];

        return Math.pow(2, octave) * frequencyMap[octaveIndex];
    };

    sisiliano.piano.OCTAVE = {
        0: {color: "WHITE", note: "c"},
        1: {color: "BLACK", note: "c#"},
        2: {color: "WHITE", note: "d"},
        3: {color: "BLACK", note: "d#"},
        4: {color: "WHITE", note: "e"},
        5: {color: "WHITE", note: "f"},
        6: {color: "BLACK", note: "f#"},
        7: {color: "WHITE", note: "g"},
        8: {color: "BLACK", note: "g#"},
        9: {color: "WHITE", note: "a"},
        10: {color: "BLACK", note: "a#"},
        11: {color: "WHITE", note: "b"}
    };

    sisiliano.piano.getPianoKey = function (key) {
        return sisiliano.piano.OCTAVE[key.octaveIndex];
    };


    sisiliano.piano.getMusicNote = function (key) {
        var pianoKey = sisiliano.piano.getPianoKey(key);

        return pianoKey.note + " in octave " + (key.octave + 1);
    };

    sisiliano.piano.getWhiteKeys = function (keys) {
        return sisiliano.piano.getKeysByColor(keys, "WHITE");
    };

    sisiliano.piano.getBlackKeys = function (keys) {
        return sisiliano.piano.getKeysByColor(keys, "BLACK");
    };

    sisiliano.piano.generateKeyboard = function (that) {
        that.model.styles.keyBoard.blackKey.width = (((that.model.styles.keyBoard.whiteKey.width - 1) / 3) * 2) + 1;
        that.model.styles.keyBoard.blackKey.height = (that.model.styles.keyBoard.whiteKey.height / 3) * 2;
        that.model.keyBoard.keys = [];

        var keyCount = {
            whiteKeys: 0,
            blackKeys: 0
        };
        var index = 0;
        for (var x = that.model.keyBoard.start; x < that.model.keyBoard.length + that.model.keyBoard.start; x++, index++) {
            var octaveIndex = x % 12;
            var key;
            if (sisiliano.piano.OCTAVE[octaveIndex].color === "WHITE") {
                key = {
                    color: "WHITE",
                    x: that.model.styles.keyBoard.padding.left + (keyCount.whiteKeys * that.model.styles.keyBoard.whiteKey.width),
                    y: that.model.styles.keyBoard.padding.top,
                    width: that.model.styles.keyBoard.whiteKey.width - 1,
                    height: that.model.styles.keyBoard.whiteKey.height,
                    index: index,
                    octave: Math.floor(x / 12),
                    octaveIndex: octaveIndex,
                    className: "sisiliano-piano-key sisiliano-piano-white-key"
                };

                keyCount.whiteKeys++;
            } else if (sisiliano.piano.OCTAVE[octaveIndex].color === "BLACK") {
                key = {
                    color: "BLACK",
                    x: that.model.styles.keyBoard.padding.left + ((keyCount.whiteKeys - 1) * that.model.styles.keyBoard.whiteKey.width) + ((that.model.styles.keyBoard.whiteKey.width / 3) * 2),
                    y: that.model.styles.keyBoard.padding.top,
                    width: that.model.styles.keyBoard.blackKey.width,
                    height: that.model.styles.keyBoard.blackKey.height,
                    index: index,
                    octave: Math.floor(x / 12),
                    octaveIndex: octaveIndex,
                    className: "sisiliano-piano-key sisiliano-piano-black-key"
                };

                keyCount.blackKeys++;
            }

            that.model.keyBoard.keys.push(key);
        }

        //Adjust the viewBox to fit with the entire div
        that.applier.change("styles.controller", {
            width: (keyCount.whiteKeys * that.model.styles.keyBoard.whiteKey.width) + that.model.styles.keyBoard.padding.left + that.model.styles.keyBoard.padding.right,
            height: that.model.styles.keyBoard.whiteKey.height + that.model.styles.keyBoard.padding.top + that.model.styles.keyBoard.padding.bottom
        });

        that.applier.change("", that.model);
    };
})(fluid);
(function (fluid) {
    "use strict";

    fluid.defaults("sisiliano.slider", {
        gradeNames: ["sisiliano.component"],
        model: {
            min: 0,
            max: 100,
            value: null,
            size: 100,
            tickValue: 1,
            status: {
                isActive: false
            },
            formatValue: function (value) {
                return Math.round(value * 100) / 100.0;
            },
            title: "Abstract Slider Controller"
        },
        ariaDescription: "",
        selectors: {
            svg: "svg",
            valueLabel: ".sisiliano-slider-value-text"
        },
        events: {
            onValueChange: null,
            onStatusChange: null
        },
        listeners: {
            onCreate: [
                {
                    func: "sisiliano.slider.validateInputs",
                    args: ["{that}"]
                },
                {
                    func: "sisiliano.slider.onInit",
                    args: ["{that}"]
                }
            ],
            onReady: [
                {
                    func: "sisiliano.slider.onMinValueChange",
                    args: ["{that}", "{that}.model.min"]
                },
                {
                    func: "sisiliano.slider.onMaxValueChange",
                    args: ["{that}", "{that}.model.max"]
                }
            ]
        },
        modelListeners: {
            "value": {
                func: "sisiliano.slider.onValueChange",
                args: ["{that}", "{that}.model.value"]
            },
            "formatValue": {
                func: "sisiliano.slider.onValueChange",
                args: ["{that}", "{that}.model.value"]
            },
            "min": {
                func: "sisiliano.slider.onMinValueChange",
                args: ["{that}", "{that}.model.min"]
            },
            "max": {
                func: "sisiliano.slider.onMaxValueChange",
                args: ["{that}", "{that}.model.max"]
            },
            "status.isActive": {
                func: "sisiliano.slider.onStatusChange",
                args: ["{that}", "{that}.model.status.isActive"]
            }
        }
    });
    
    sisiliano.slider.onStatusChange = function (that) {
        that.events.onStatusChange.fire();
    };

    sisiliano.slider.onInit = function (that) {
        that.container.attr("tabindex", 0);
        that.container.addClass("sisiliano");
        that.container.attr("role", "slider");

        sisiliano.slider.addListeners(that);
    };

    sisiliano.slider.onMinValueChange = function (that, min) {
        that.container.attr("aria-valuemin", min);
        that.applier.change("size", sisiliano.slider.getSize(that));
        sisiliano.slider.onValueChange(that, that.model.value);
    };

    sisiliano.slider.onMaxValueChange = function (that, max) {
        that.container.attr("aria-valuemax", max);
        that.applier.change("size", sisiliano.slider.getSize(that));
        sisiliano.slider.onValueChange(that, that.model.value);
    };

    sisiliano.slider.onValueChange = function (that, newValue) {
        if (typeof newValue !== "number") {
            sisiliano.slider.updateTheValueInUI(that, that.model.min);
        } if (newValue < that.model.min) {
            newValue = that.model.min;
            that.applier.change("value", newValue);
        } else if (newValue > that.model.max) {
            newValue = that.model.max;
            that.applier.change("value", newValue);
        } else {
            sisiliano.slider.updateTheValueInUI(that, newValue);
        }
    };

    sisiliano.slider.updateTheValueInUI = function (that, newValue) {
        var formatedValue = newValue;
        if (that.model.formatValue && typeof that.model.formatValue === "function") {
            formatedValue = that.model.formatValue(newValue);
        }

        //Update the aria-valuenow
        that.container.attr("aria-valuenow", formatedValue);

        //Update the value in the UI
        that.locate("valueLabel").text(formatedValue);
        that.events.onValueChange.fire(that, sisiliano.slider.getObviousValue(that, that.model.value));
    };

    sisiliano.slider.addListeners = function (that) {
        var keyDownHandler = function () {
            var currentValue = sisiliano.slider.getValue(that);
            if (d3.event.keyCode === 38 || d3.event.keyCode === 39) {
                that.applier.change("value", currentValue + that.model.tickValue);
                d3.event.preventDefault();
            } else if (d3.event.keyCode === 37 || d3.event.keyCode === 40) {
                that.applier.change("value", currentValue - that.model.tickValue);
                d3.event.preventDefault();
            }
        };

        d3.select(that.container.get(0))
            .on("keydown", keyDownHandler)
            .on("mousedown", sisiliano.slider.setSliderActiveStatus.bind(this, that, true))
            .on("touchstart", sisiliano.slider.setSliderActiveStatus.bind(this, that, true))
            .on("mouseup", sisiliano.slider.setSliderActiveStatus.bind(this, that, false))
            .on("touchend", sisiliano.slider.setSliderActiveStatus.bind(this, that, false));
    };

    sisiliano.slider.setSliderActiveStatus = function (that, status) {
        that.applier.change("status.isActive", status);
    };

    sisiliano.slider.getValue = function (that) {
        if (typeof that.model.value === "number") {
            return that.model.value;
        } else {
            return that.model.min;
        }
    };

    sisiliano.slider.validateInputs = function (that) {
        //TODO modified according to the standards of infusion
        if (that.model.min >= that.model.max) {
            throw new Error("Min should be less than max");
        }
    };

    sisiliano.slider.getSize = function (that) {
        return Math.abs(that.model.max - that.model.min);
    };

    sisiliano.slider.getValue = function (that) {
        if (typeof that.model.value === "number") {
            return that.model.value;
        } else {
            return that.model.min;
        }
    };

    sisiliano.slider.getObviousValue = function (that, value) {
        return value - that.model.min;
    };
})(fluid);