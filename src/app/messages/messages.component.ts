import {Component, OnInit} from '@angular/core';
// import {DogLogUtil} from '../DogLogUtil';

// import * as systemChartK from '../../libs/aa';
// declare function systemChartK(data: string): void;

// import * as systemChartK from '../../libs/aa';
// import * as foo from '../cc';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})


export class MessagesComponent implements OnInit {
  chartId: '';
  code: '';
  // 保留的小数位数
  prec: '';
  layout: 'vertical';
  // 远掉期期限
  termId: '';
  // 牌价类型: 即期 远期 掉期
  product: '';
  indexType: '';
  // 是否打开了副图指标组件
  isOpenAuxiliaryChart: false;
  isRequesting: false;

  constructor() {
    // const dogLogUtil: DogLogUtil = new DogLogUtil();
    // console.log('DogLogUtil', dogLogUtil);
  }

  ngOnInit(): void {

    // const systemChartK1 = systemChartK().init({
    //   rateCode: 'USDCNY',
    //   kType: '4',
    //   layout: 'vertical',
    //   prec: '4'
    // });
    // console.log('systemChartK', systemChartK);

    // console.log('systemChartK1', systemChartK1);

    // const formatDate = systemChartK().init({
    //   rateCode: 'USDCNY',
    //   kType: '4',
    //   layout: 'vertical',
    //   prec: '4'
    // });
    // console.log(formatDate);
    // console.log('DogLogUtil', dogLogUtil.erha('aa'));
    // this.creacKchart();
  }

  // creacKchart(): void {
  //   systemChartK.init({
  //     rateCode: 'USDCNY',
  //     kType: '4',
  //     layout: 'vertical',
  //     prec: '4'
  //   });
  // }

}


