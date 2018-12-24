var systemChartK = {
    chartId: '',
    code: '',
    // 保留的小数位数
    prec: '',
    layout: 'vertical',
    // 远掉期期限
    termId: '',
    // 牌价类型: 即期 远期 掉期
    product: '',
    indexType: '',

    // 是否打开了副图指标组件
    isOpenAuxiliaryChart: false,
    isRequesting: false,
    /**
     * 创建走势图控件
     * @param {Object} klineType
     */
    createChart: function(klineType) {
        if (this.isRequesting) return;
        var self = this;
        var chartStyle = self.layout == 'vertical' ? self.getVerticalChartStyle() : self.getHorizontalChartStyle();
        if (!self.chartId) {
            self.isRequesting = true;
            plus.KlineChartPlugin.createChart(chartStyle, function(data) {
                self.chartId = data;
                self.startChart(klineType);
                if (self.layout != 'vertical') {
                    plus.KlineChartPlugin.openAuxiliaryChart(self.chartId, plus.KlineChartPlugin.indicatrixType.macd);
                    self.isOpenAuxiliaryChart = true;
                }
                self.isRequesting = false;
                if (self.layout == 'vertical') {
                    plus.KlineChartPlugin.closeAuxiliaryChart(self.chartId);
                }
            }, function() {});
        } else {
            if (self.from != 'indexType') {
                self.startChart(klineType);
            }
            if (self.indexType === '0') {
                plus.KlineChartPlugin.closeAuxiliaryChart(self.chartId);
                self.isOpenAuxiliaryChart = false;
            } else {
                if (self.isOpenAuxiliaryChart) {
                    if (self.indexType === 'BOLL') {
                        plus.KlineChartPlugin.changeIndicatrix(self.chartId, plus.KlineChartPlugin.indicatrixType[self.indexType.toLowerCase()]);
                    } else {
                        plus.KlineChartPlugin.changeAuxiliaryIndicatrix(self.chartId, plus.KlineChartPlugin.indicatrixType[self.indexType.toLowerCase()]);
                    }
                } else {
                    if (self.layout != 'vertical') {
                        if (self.from != "indexType") {
                            plus.KlineChartPlugin.openAuxiliaryChart(self.chartId, plus.KlineChartPlugin.indicatrixType.macd);
                        } else {
                            if (self.indexType === 'BOLL') {
                                plus.KlineChartPlugin.changeIndicatrix(self.chartId, plus.KlineChartPlugin.indicatrixType[self.indexType.toLowerCase()]);
                            } else {
                                plus.KlineChartPlugin.openAuxiliaryChart(self.chartId, plus.KlineChartPlugin.indicatrixType[self.indexType.toLowerCase()]);
                            }
                        }
                        self.isOpenAuxiliaryChart = true;
                    }
                    if (self.layout == 'vertical') {
                        plus.KlineChartPlugin.closeAuxiliaryChart(self.chartId);
                    }
                }
            }
        }
    },
    /**
     * 获取垂直布局图表渲染位置
     */
    getVerticalChartStyle: function() {
        var self = this;
        var bodyHeight = $(window).height();
        var bodywidth = $(window).width();
        var chartTopValue = $('.market').position().top + 30;
        if (!$.os.ios) chartTopValue = chartTopValue + 2;
        if ($.os.ios) {
            if (self.product == 'FWD') {
                chartTopValue = 309;
            } else if (self.product == 'SWAP') {
                chartTopValue = 300;
            } else {
                chartTopValue = 260;
            }
        }
        var chartHeightValue = bodyHeight - chartTopValue - 50;
        if (/iphone/gi.test(navigator.userAgent) && (screen.height == 812 && screen.width == 375)) {
            chartHeightValue = chartHeightValue - 34;
        }
        return {
            left: 11.7,
            top: chartTopValue,
            width: bodywidth - 23.4,
            height: chartHeightValue,
            horizCrossCurveMotion: false
        }
    },
    /**
     * 获取水平布局图标渲染位置
     */
    getHorizontalChartStyle: function() {
        var chartWidth, chartHeight;
        if ($.os.ios) {
            chartWidth = $('body').height();
            chartHeight = $('body').width() - 50;
        } else {
            chartWidth = plus.screen.resolutionHeight;
            chartHeight = plus.screen.resolutionWidth - 65;
        }
        var left = 0;
        if (/iphone/gi.test(navigator.userAgent) && (screen.height == 812 && screen.width == 375)) {
            left = 34;
            chartWidth = chartWidth - 24;
        }
        return {
            left: left,
            top: 0,
            width: chartWidth,
            height: chartHeight,
            horizCrossCurveMotion: false
        };
    },
    /**
     * 获取
     * @param klineType
     */
    startChart: function(klineType) {
        var self = this;
        if (self.product) {
            self.code += '-' + self.product + '-' + self.termId;
        }
        var _url = "https://pamarkets.com/info/clientM/getGZipRateRange.shtml?code=" + encodeURIComponent(self.code) + "&type=" + klineType + "&available=" + self.prec;
        plus.KlineChartPlugin.start(self.chartId, _url, function(res) {
            /*
             *原生没有开放该方法
             *注释时间：2018-12-06
             */
            // plus.KlineChartPlugin.showTips(self.chartId);
        }, function(err) {});

    },
    hideChart: function() {
        plus.KlineChartPlugin.hide(this.chartId);
    },
    showChart: function() {
        plus.KlineChartPlugin.show(this.chartId);
    },
    init: function(data) {
        alert(JSON.stringify(data));
        this.from = data.from || "";
        this.code = data.rateCode || "";
        this.prec = data.prec || "";
        this.layout = data.layout || "";
        this.termId = data.termId || "";
        this.product = data.product || "";
        this.indexType = data.indexType || "";
        this.createChart(data.kType);
    }

};
