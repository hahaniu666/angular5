// declare function systemChartK(data:string): systemChartK();
// declare function systemChartK(init: string): void;

declare namespace systemChartK {
  // systemChartK.getVerticalChartStyle.!ret

  /**
   *
   */
  interface GetVerticalChartStyleRet {

    /**
     *
     */
    left: number;

    /**
     *
     */
    top: number;

    /**
     *
     */
    width: number;

    /**
     *
     */
    height: number;

    /**
     *
     */
    horizCrossCurveMotion: boolean;
  }
}
declare namespace systemChartK {
  // systemChartK.getHorizontalChartStyle.!ret

  /**
   *
   */
  interface GetHorizontalChartStyleRet {

    /**
     *
     */
    left: number;

    /**
     *
     */
    top: number;

    /**
     *
     */
    width: number;

    /**
     *
     */
    height: number;

    /**
     *
     */
    horizCrossCurveMotion: boolean;
  }
}

/**
 *
 */
declare namespace systemChartK {

  /**
   *
   */
  export var chartId: string;

  /**
   *
   */
  export var code: string;

  /**
   * 保留的小数位数
   */
  export var prec: string;

  /**
   *
   */
  export var layout: string;

  /**
   * 远掉期期限
   */
  export var termId: string;

  /**
   * 牌价类型: 即期 远期 掉期
   */
  export var product: string;

  /**
   *
   */
  export var indexType: string;

  /**
   * 是否打开了副图指标组件
   */
  export var isOpenAuxiliaryChart: boolean;

  /**
   *
   */
  export var isRequesting: boolean;

  /**
   * 创建走势图控件
   * @param {Object} klineType
   * @param klineType
   */
  function createChart(klineType: any): void;

  /**
   * 获取垂直布局图表渲染位置
   * @return
   */
  function getVerticalChartStyle(): systemChartK.GetVerticalChartStyleRet;

  /**
   * 获取水平布局图标渲染位置
   * @return
   */
  function getHorizontalChartStyle(): systemChartK.GetHorizontalChartStyleRet;

  /**
   * 获取
   * @param klineType
   * @param klineType
   */
  function startChart(klineType: any): void;

  /**
   *
   */
  function hideChart(): void;

  /**
   *
   */
  function showChart(): void;

  /**
   *
   * @param data
   */
  function init(data: any): void;

  /**
   *
   */
  export var from: string;

  interface init extends Object {
    init(format?: string): string;
  }
}

export = systemChartK;
