import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Henry';

  itembuah = [{
    nama: 'Mangga',
    harga: 10000
  }, {
    nama: 'Jeruk',
    harga: 5000
  }];

  itemArr = ['aa', 'bb', 'cc', 'dd'];

  show: boolean = false;

  user = "";
}
