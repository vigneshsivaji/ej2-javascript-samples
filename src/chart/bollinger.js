/**
 * Sample for Bollinger Band Indicator
 */
this.renderChartBollinger = function () {
        var chart = new ej.charts.Chart({
            primaryXAxis: {
                valueType: 'DateTime',intervalType: "Months",
                majorGridLines: { width: 0 },
                zoomFactor: 0.2, zoomPosition: 0.6,
                crosshairTooltip: { enable: true }
            },
            chartArea: {
                border: {
                    width: 0
                }
            },
            primaryYAxis: {
                title: 'Price (in Million)',
                labelFormat: '${value}M',
                minimum: 50, maximum: 170, interval: 30,
                majorTickLines: { width: 0 },
                lineStyle: { width: 0 }
            },
            series: [{
                    dataSource: chartValue, width: 2,
                    xName: 'period', yName: 'y', low: 'low', high: 'high', close: 'close', volume: 'volume', open: 'open',
                    name: 'Apple Inc', bearFillColor: '#2ecd71', bullFillColor: '#e74c3d',
                    type: 'Candle'
                }],
            indicators: [{
                    type: 'BollingerBands', field: 'Close', seriesName: 'Apple Inc', fill: '#606eff',
                    period: 14, animation: { enable: true }, upperLine: { color: '#ffb735', width: 1 },
                    lowerLine: { color: '#f2ec2f', width: 1 }
                }],
            tooltip: {
                enable: true, shared: true
            },
            crosshair: { enable: true, lineType: 'Vertical' },
            zoomSettings: {
                enableSelectionZooming: true,
                enablePinchZooming: true,
                mode: 'XY',
                enablePan: true
            },
            width: ej.base.Browser.isDevice ? '100%' : '75%',
            title: 'AAPL Stock Price 2012-2017',
             // custom code start
            load: function (args) {
                var selectedTheme = location.hash.split('/')[1];
                selectedTheme = selectedTheme ? selectedTheme : 'Material';
                args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                    selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            },
             // custom code end
            legendSettings: { visible: false }
        });
        chart.appendTo('#bollinger-container');
    };
    this.default = function () {
            renderChartBollinger();
        };