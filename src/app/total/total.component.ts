import { Component, OnInit } from '@angular/core';
import { ChartDataService } from '../chart-data.service';



@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {
    data: any;
    public dataUtensil= 0;
    public dataStep= 0;
    public dataIngredient= 0;
    listdata:any=[] ;


  constructor(
    public chartDataService : ChartDataService
  ) {}

  getData(){
    this.chartDataService.getData('Utensil').subscribe(responseUtensil =>
      {
      console.log('Utensil=',responseUtensil.count)
      this.dataUtensil=responseUtensil.count;
      })
      
    this.chartDataService.getData('Step').subscribe(responseStep=>{
      console.log('Step=',responseStep.count)
      this.dataStep=responseStep.count;

    })

   this.chartDataService.getData('Ingredient').subscribe(responseIngredient=>{
      console.log('Ingredient=',responseIngredient.count) 
      this.dataIngredient = responseIngredient.count;
    })

    setTimeout(() => {
      this.drawChart();
      }, 3000);
  }

  drawChart(){
    this.data = {
      labels: ['Utensil','Step','Ingredient'],
      datasets: [
          {
              data: [
                this.dataUtensil,
                this.dataStep, 
                this.dataIngredient
              ],
              backgroundColor: [
                  "#42A5F5",
                  "#66BB6A",
                  "#FFA726"
              ],
              hoverBackgroundColor: [
                  "#64B5F6",
                  "#81C784",
                  "#FFB74D"
              ]
          }
      ]
    };
     console.log(this.data);
  }

  ngOnInit(): void {
    
    this.getData();
    
  }


}


    