import {Component} from '@angular/core';
import {Hero} from './bb';
// import {DogLogUtil} from './DogLogUtil';
// const dogLogUtil: DogLogUtil = new DogLogUtil();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'ap感觉sp';

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  // dogLogUtil.erha("aa");

  // name = dogLogUtil.erha('123');
}

