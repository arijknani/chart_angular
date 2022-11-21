import { Component, OnInit } from '@angular/core';
import { EntityDateService } from '../entity-date.service';

@Component({
  selector: 'app-chart-date',
  templateUrl: './chart-date.component.html',
  styleUrls: ['./chart-date.component.css']
})
export class ChartDateComponent implements OnInit {
  stackedData: any
  stackedOptions: any;
  public dataUtensil:any;
  public dataStep:any;
  public dataIngredient:any;
  constructor( public entityDateService :EntityDateService) { }
  
  getData(){
    console.log('hello')
    const time = document.getElementById("time") as HTMLInputElement;
    const date = new Date(time.value).toLocaleDateString();

    this.entityDateService.getData('Utensil',date).subscribe(responseUtensil=>{
      console.log('Utensil=',responseUtensil)
      this.dataUtensil=responseUtensil;
    })

    this.entityDateService.getData('Step',date).subscribe(responseStep=>{
        console.log('Step',responseStep)
        this.dataStep=responseStep;
      })


      this.entityDateService.getData('Ingredient',date).subscribe(responseIngredient=>{
        console.log('Ingredient=',responseIngredient)
        this.dataIngredient=responseIngredient;
      })
      setTimeout(() => {
        this.drawChart();
        }, 3000);
      
  }

  drawChart(){
    const time = document.getElementById("time") as HTMLInputElement;
    const date=new Date(time.value).toLocaleDateString();
    console.log('date=',date);

    this.stackedData = {
        labels: [date],
        datasets: [{
            type: 'bar',
            label: 'Utensil',
            backgroundColor: '#42A5F5',
            data: [this.dataUtensil]
        }, {
            type: 'bar',
            label: 'Step',
            backgroundColor: '#66BB6A',
            data: [this.dataStep]
        }, {
            type: 'bar',
            label: 'Ingredient',
            backgroundColor: '#FFA726',
            data: [ this.dataIngredient ]
        }]
    };
  
    this.stackedOptions = {
        tooltips: {
            mode: 'index',
            intersect: false
        },
        responsive: true,
        scales: {
            xAxes: [{
                stacked: true,
            }],
            yAxes: [{
                stacked: true
            }]
        }
    };

  }

  
  

  ngOnInit(): void {
    this.stackedData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
          type: 'bar',
          label: 'Utensil',
          backgroundColor: '#42A5F5',
          data: [
              50,
              25,
              12,
              48,
              90,
              76,
              42
          ]
      }, {
          type: 'bar',
          label: 'Step',
          backgroundColor: '#66BB6A',
          data: [
              21,
              84,
              24,
              75,
              37,
              65,
              34
          ]
      }, {
          type: 'bar',
          label: 'Ingredient',
          backgroundColor: '#FFA726',
          data: [
              41,
              52,
              24,
              74,
              23,
              21,
              32
          ]
      }]
  };

  this.stackedOptions = {
      tooltips: {
          mode: 'index',
          intersect: false
      },
      responsive: true,
      scales: {
          xAxes: [{
              stacked: true,
          }],
          yAxes: [{
              stacked: true
          }]
      }
  };

  }

  

}
