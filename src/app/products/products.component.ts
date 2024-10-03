import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products = [
    { name: 'Tomato', price: 40, image: 'assets/vegetables/tomato.png' },
    { name: 'Potato', price: 30, image: 'assets/vegetables/potato.png' },
    { name: 'Carrot', price: 50, image: 'assets/vegetables/beetroot.png' },
    { name: 'Broccoli', price: 70, image: 'assets/vegetables/broccoli.png' },
    { name: 'Spinach', price: 20, image: 'assets/vegetables/cucumber.png' },
    { name: 'Capsicum', price: 60, image: 'assets/vegetables/capsicum.png' },
    { name: 'Onion', price: 25, image: 'assets/vegetables/onion.png' },
    { name: 'Cabbage', price: 35, image: 'assets/vegetables/cabbage.png' }
  ];

}
