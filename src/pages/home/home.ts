import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  @ViewChild('lineCanvas') lineCanvas;
  pieChart: any;
  etiquetas = [];
  valores = [];
  funcion = '';
  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
 this.derivada();
 this.graficar();
 
}
derivada() {
  this.funcion = 'd(Sin(x))/dx';
  const h = 1;
  let part = 0;
  for(let i = 0; i<=4 ; i++){
    this.etiquetas.push(i.toString());
    part = Math.round(Math.random());
    let num = Math.round(Math.random() + h);
    let Derivada = (num - part)/h;
    this.valores.push(Derivada);
  }
  
}
graficar() {
  this.pieChart = new Chart(this.lineCanvas.nativeElement, {
    type: 'pie',
    data: {
      labels: this.etiquetas,
      datasets: [{
        label: this.funcion,
        data: this.valores,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(255,99,132,1)',
          'rgba(255,99,132,1)',
          'rgba(255,99,132,1)',
          'rgba(255,99,132,1)',
          
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
                }
              }]
          }
      }
  });
}
}