import { Component, OnInit } from '@angular/core';
import { DataFromToService } from '../data-from-to.service';

@Component({
  selector: 'app-chart-fromto',
  templateUrl: './chart-fromto.component.html',
  styleUrls: ['./chart-fromto.component.css']
})
export class ChartFromtoComponent implements OnInit {
  data: any;
  

  constructor(public dataFromToService: DataFromToService  ) { }

  getData(){

    const fromdate= document.getElementById('fromdate') as HTMLInputElement;
    const todate= document.getElementById('todate') as HTMLInputElement;
    const first=new Date(fromdate.value).getTime()/1000;
    const end=new Date(todate.value).getTime()/1000;
    console.log('first',first)
    console.log('end',end)

    this.dataFromToService.getData('Utensil',first,end).subscribe(responseUtensil=>{
      console.log('Utensil=',responseUtensil)
    })

    this.dataFromToService.getData('Step',first,end).subscribe(responseStep=>{
      console.log('Step=',responseStep)
    })
    this.dataFromToService.getData('Ingredient',first,end).subscribe(responseIngredient=>{
      console.log('Ingredient=',responseIngredient)
    })


  }

  showData(){
    this.getData()
  }

  ngOnInit(): void {
    this.data = {
      labels: ['Utensil','Step','Ingredient'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }
      ]
  };


  }

}
