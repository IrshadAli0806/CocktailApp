import { Component, OnInit } from '@angular/core';
import { CockTailDataService } from  '../cock-tail-data.service'
import drink from './drink';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products :drink[] = [];

  columnDefs = [
    { field: 'strCategory',sortable: true, filter: true },
    { field: 'strDrink',sortable: true, filter: true },
    { field: 'strIngredient1',sortable: true, filter: true},
    {field :'strGlass',sortable: true, filter: true}
];



  constructor(private cockTailDataService: CockTailDataService) { }

  ngOnInit() {

    this.cockTailDataService.sendGetRequest().subscribe((data: any)=>{
      console.log(data);
      this.products = data.drinks;

    })  
  }

}
