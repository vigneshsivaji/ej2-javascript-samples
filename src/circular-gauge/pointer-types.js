function pointeGauge1() {
    var pointeGauge1 = new ej.circulargauge.CircularGauge({
        background:'transparent',
        centerY: '40%',
        axes: [{
            startAngle: 270,
            endAngle: 90,
            lineStyle: { width: 3, color: '#ff5985' },
            labelStyle: {
                position: 'Outside',
                font: { size: '0px', color: '#ff5985', fontFamily: 'inherit' }
            }, majorTicks: {
                width: 1,
                height: 0,
                interval: 100
            }, minorTicks: {
                height: 0,
                width: 0,
            },
            radius: '90%',
            minimum: 0,
            maximum: 100,
            pointers: [{
                type: 'RangeBar',
                value: 66,
                radius: '90%',
                color: '#ff5985',
                pointerWidth: 10,
                animation: { enable: true, duration: 1000 }
            }],
            annotations: [
                {
                    angle: 180,
                    radius: '28%', zIndex: 1,
                    content: '<div style="font-size:14px;margin-top:11px;">Range bar pointer</div>'
                }
            ]
        }],
        load: function (args) {
            // custom code start
            var selectTheme = location.hash.split('/')[1];
            selectTheme = selectTheme ? selectTheme : 'Material';
            args.gauge.theme = (selectTheme.charAt(0).toUpperCase() +
                selectTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            // custom code end
        }
    });
    return pointeGauge1;
}

function pointeGauge2() {
    var pointeGauge2 = new ej.circulargauge.CircularGauge({
        background:'transparent',
        centerY: '40%',
        axes: [{
            startAngle: 270,
            endAngle: 90,
            lineStyle: { width: 3, color: '#01aebe' },
            labelStyle: {
                position: 'Outside',
                font: { size: '0px', color: '#01aebe' }
            }, majorTicks: {
                width: 1,
                height: 0,
                interval: 100
            }, minorTicks: {
                height: 0,
                width: 0,
            },
            radius: '90%',
            minimum: 0,
            maximum: 100,
            pointers: [{
                radius: '100%',
                value: 80,
                type: 'Marker',
                markerShape: 'InvertedTriangle',
                markerWidth: 15,
                markerHeight: 15,
                color: 'rgb(0,171,169)'
            }],
            annotations: [
                {
                    angle: 180,
                    radius: '28%', zIndex: 1,
                    content: '<div style="font-size:14px;margin-top:10px">Marker pointer</div>'
                }
            ]
        }],
        load: function (args) {
            // custom code start
            var selectTheme = location.hash.split('/')[1];
            selectTheme = selectTheme ? selectTheme : 'Material';
            args.gauge.theme = (selectTheme.charAt(0).toUpperCase() +
                selectTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            // custom code end
        }
    });
    return pointeGauge2;
}

function pointeGauge3() {
    var pointeGauge3 = new ej.circulargauge.CircularGauge({
        background:'transparent',
        centerY: '40%',
        axes: [{
            startAngle: 270,
            endAngle: 90,
            lineStyle: { width: 3, color: '#1E7145' },
            labelStyle: {
                position: 'Outside',
                font: { size: '0px', color: '#1E7145' }
            }, majorTicks: {
                width: 1,
                height: 0,
                interval: 100
            }, minorTicks: {
                height: 0,
                width: 0,
            },
            radius: '90%',
            minimum: 0,
            maximum: 100,
            pointers: [{
                animation: { enable: true, duration: 1000 },
                value: 80,
                radius: '80%',
                color: 'green',
                pointerWidth: 2,
                needleStartWidth: 4,
                needleEndWidth: 4,
                cap: {
                    radius: 8,
                    color: 'green'
                },
                needleTail: {
                    length: '0%'
                }
            }],
            annotations: [
                {
                    angle: 180,
                    radius: '28%', zIndex: 1,
                    content: '<div style="font-size:14px;margin-top:29px">Customized pointer</div>'
                }
            ]
        }],
        load: function (args) {
            // custom code start
            var selectTheme = location.hash.split('/')[1];
            selectTheme = selectTheme ? selectTheme : 'Material';
            args.gauge.theme = (selectTheme.charAt(0).toUpperCase() +
                selectTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            // custom code end
        }
    });
    return pointeGauge3;
}

function pointeGauge4() {
    var pointeGauge4 = new ej.circulargauge.CircularGauge({
        background:'transparent',
        centerY: '40%',
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        },
        // custom code end
        axes: [{
            startAngle: 270,
            endAngle: 90,
            lineStyle: { width: 3, color: '#9250e6' },
            labelStyle: {
                position: 'Outside',
                font: { size: '0px', color: '#9250e6' }
            }, majorTicks: {
                width: 1,
                height: 0,
                interval: 100
            }, minorTicks: {
                height: 0,
                width: 0,
            },
            radius: '90%',
            minimum: 0,
            maximum: 100,
            pointers: [{
                radius: '100%',
                animation: { enable: true, duration: 900 },
                value: 70,
                color: '#923C99',
                pointerWidth: 6,
                cap: { radius: 0 },
                needleTail: { length: '4%', color: '#923C99' }
            }],
            annotations: [
                {
                    angle: 180,
                    radius: '28%', zIndex: 1,
                    content: '<div style="font-size:14px;margin-top:10px;">Needle pointer</div>'
                }
            ]
        }],
    });
    return pointeGauge4;
}

function pointeGauge5() {
    var pointeGauge5 = new ej.circulargauge.CircularGauge({
        background:'transparent',
        centerY: '40%',
        axes: [{
            startAngle: 270,
            endAngle: 90,
            lineStyle: { width: 0 },
            labelStyle: {
                position: 'Outside',
                font: { size: '0px', color: '#067bc2' }
            }, majorTicks: {
                width: 1,
                height: 0,
                interval: 100
            }, minorTicks: {
                height: 0,
                width: 0,
            },
            radius: '90%',
            minimum: 0,
            maximum: 100,
            pointers: [{
                radius: '100%',
                animation: { enable: false, duration: 100 },
                value: 40,
                color: '#067bc2',
                pointerWidth: 6,
                cap: { radius: 0 },
                needleTail: { length: '4%', color: '#067bc2' }
            }, {
                radius: '100%',
                type: 'RangeBar',
                animation: { enable: false, duration: 100 },
                value: 40,
                color: '#067bc2',
                pointerWidth: 5
            }],
            annotations: [
                {
                    angle: 180,
                    radius: '32%', zIndex: 1,
                    content: '<div style="font-size:14px;margin-top:22px;">Live update</div>'
                }
            ]
        }],
        load: function (args) {
            // custom code start
            var selectTheme = location.hash.split('/')[1];
            selectTheme = selectTheme ? selectTheme : 'Material';
            args.gauge.theme = (selectTheme.charAt(0).toUpperCase() +
                selectTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            // custom code end
        }
    });
    return pointeGauge5;
}
this.default = function () {
    var firstgauge = pointeGauge1();
    var pointeGauge5Interval1;
    var gauge6Interval1;
    firstgauge.appendTo('#container2');
    var secondgauge = pointeGauge2();
    secondgauge.appendTo('#container1');
    var thirdgauge = pointeGauge3();
    thirdgauge.appendTo('#container4');
    var fourthgauge = new ej.circulargauge.CircularGauge({
        background:'transparent',
        centerY: '40%',
        axes: [{
            startAngle: 270,
            endAngle: 90,
            lineStyle: { width: 3, color: '#e3a21a' },
            labelStyle: {
                position: 'Outside',
                font: { size: '0px', color: '#e3a21a' }
            }, majorTicks: {
                width: 1,
                height: 0,
                interval: 100
            }, minorTicks: {
                height: 0,
                width: 0,
            },
            radius: '90%',
            minimum: 0,
            maximum: 100,
            pointers: [{
                radius: '60%',
                value: 80,
                markerWidth: 5,
                markerHeight: 5,
                animation: { enable: true, duration: 1000 },
                color: '#e3a21a',
                pointerWidth: 10,
                cap: {
                    radius: 8,
                    color: 'white',
                    border: {
                        color: '#e3a21a',
                        width: 1
                    }
                },
                needleTail: {
                    length: '20%',
                    color: '#e3a21a'
                }
            }, {
                radius: '60%', value: 40,
                markerWidth: 5, markerHeight: 5,
                animation: { enable: true, duration: 1000 },
                color: '#ffb133',
                pointerWidth: 10,
                cap: {
                    radius: 8, color: 'white',
                    border: { color: '#ffb133', width: 1 }
                },
                needleTail: { length: '20%', color: '#e3a21a' }
            }],
            annotations: [
                {
                    angle: 180,
                    radius: '32%', zIndex: 1,
                    content: '<div style="font-size:14px;margin-top:22px">Multiple pointers</div>'
                }
            ]
        }],
        load: function (args) {
            // custom code start
            var selectTheme = location.hash.split('/')[1];
            selectTheme = selectTheme ? selectTheme : 'Material';
            args.gauge.theme = (selectTheme.charAt(0).toUpperCase() +
                selectTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            // custom code end
        }
    });
    
    fourthgauge.appendTo('#container5');
    var fifthGauge = pointeGauge4();
    fifthGauge.appendTo('#container3');
    var sixthGauge = pointeGauge5();
    sixthGauge.appendTo('#container6');
    this.pointeGauge5Interval1 = setInterval(function () {
        var newVal = Math.random() * (90 - 20) + 20;
        if (document.getElementById('container5')) {
            fifthGauge.setPointerValue(0, 0, newVal);
        }
        else {
            clearInterval(this.pointeGauge5Interval1);
        }
    }, 1000);
    this.gauge6Interval1 = setInterval(function () {
        var newVal = Math.random() * (80 - 30) + 30;
        if (document.getElementById('container6')) {
            sixthGauge.setPointerValue(0, 0, newVal);
            sixthGauge.setPointerValue(0, 1, newVal);
        }
        else {
            clearInterval(this.gauge6Interval1);
        }
    }, 1000);
};