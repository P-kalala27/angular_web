import { Component } from '@angular/core';
import { filters, singleFilters } from './filterData';
import { mencloth } from 'src/Data/Men/mencloth';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  filterData : any;
  singleData: any;
  menData:any;

  constructor(private activatedRoute: ActivatedRoute){}
  ngOnInit(): void {
    this.filterData = filters;
    this.singleData= singleFilters;
    this.menData = mencloth;
  }

  multipleSelection(value: string, sectionId:string){
    const queryParams = {...this.activatedRoute.snapshot.queryParamMap}

    const filterValue = queryParams;
  }
}
