import { Component, OnInit } from '@angular/core';
import 'chartjs-adapter-moment';
import { DataFromToService } from '../data-from-to.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    data:any;
    dateValue:any;
    months=[
      'Jan',
      'Feb', 
      'Mar', 
      'April', 
      'May', 
      'June',
      'July', 
      'Aug',
      'sep',
      'oct',
      'nov',
      'dec'
    ]
    dates=[
      ('2022-07-01'),
      ('2022-07-02'),
      ('2022-07-03'),
      ('2022-07-04'),
      ('2022-07-05'),
      ('2022-07-06'),
      ('2022-07-07')];
    datapoints=[
        65,
        59,
        80,
        81,
        56,
        55,
        40];
  
    
  constructor(public datafromto : DataFromToService) {}

  getData() {

    const start = document.getElementById('start') as HTMLInputElement ;
    const end = document.getElementById('end') as HTMLInputElement ;
    const starttime= new Date(start.value).getTime()/1000;
    const endtime=new Date(end.value).getTime()/1000;


    this.datafromto.getData('Utensil',starttime,endtime).subscribe(responseUtensil => {
      console.log('Utensil', responseUtensil)
    })

    this.datafromto.getData('Step',starttime,endtime).subscribe(responseStep => {
      console.log('Step', responseStep)
    })

    this.datafromto.getData('Ingredient',starttime,endtime).subscribe(responseIngredient => {
      console.log('Ingredient', responseIngredient)
    })

  }

  filterDate(event:Event){
    const start = document.getElementById('start') as HTMLInputElement ;
    const end = document.getElementById('end') as HTMLInputElement ;
    
  
     
    const converteddates = this.dates.map(date => new Date(date).setHours(0,0,0,0));
    console.log('converted',converteddates);

    const firstindex =start.valueAsDate!.setHours(0,0,0,0);
    const lastindex =end.valueAsDate!.setHours(0,0,0,0);


    const filter_Date=converteddates.slice(converteddates.indexOf(firstindex),converteddates.indexOf(lastindex)+1)
    console.log('filter',filter_Date)

    
    const startArray=converteddates.indexOf(filter_Date[0]);
    const endArray=converteddates.indexOf(filter_Date[filter_Date.length-1]);
    

    const copydata=[...this.datapoints]; 
    copydata.splice(endArray+1 ,filter_Date.length);
    copydata.splice(0,startArray)
    console.log('copydata',copydata)

}

  ngOnInit(): void {
    this.getData();


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
