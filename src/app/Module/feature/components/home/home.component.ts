import { Component } from '@angular/core';
import { mencloth } from 'src/Data/Men/mencloth';
import { womendress } from 'src/Data/womendress/womendress';
import {shoes} from 'src/Data/Shoes/shoes';
import { accessories } from 'src/Data/Accessories/accessories';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  menJeans : any;
  womendress:any;
  shoes: any;
  accessories :any;
  ngOnInit(): void{
    this.menJeans= mencloth.slice(0,5);
    this.womendress = womendress.slice(0,5);
    this.shoes = shoes.slice(0,5);
    this.accessories= accessories.slice(0,5);
  }
}
