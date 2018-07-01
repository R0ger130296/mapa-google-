import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  @ViewChild('lineCanvas') lineCanvas;
  lineChart: any;
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
  let fx = 0;
  for(let i = 0; i<=4 ; i++){
    this.etiquetas.push(i.toString());
    fx = Math.round(Math.random());
    let fxMASh = Math.round(Math.random() + h);
    let Derivada = (fxMASh - fx)/h;
    this.valores.push(Derivada);
  }
}

graficar() {
  this.lineChart = new Chart(this.lineCanvas.nativeElement, {
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
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
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