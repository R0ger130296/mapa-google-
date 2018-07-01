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

  calcular() {
    this.funcion = 'Sin(x)';
    let fx= 0;
    for(let i = 0; i<=360 ; i++){
      this.etiquetas.push(i.toString());
      fx= Math.sin(i*Math.PI/180);
      this.valores.push(fx);
    }
  }

  derivada() {
    this.funcion = 'd(Sin(x))/dx';
    const h = 0.0000001;
    let fx = 0;
    for(let i = 0; i<=360 ; i++){
      this.etiquetas.push(i.toString());
      fx = Math.sin(i*Math.PI/180);
      let fxMASh = Math.sin(i*Math.PI/180 + h);
      let Derivada = (fxMASh - fx)/h;
      this.valores.push(Derivada);
    }
  }

  graficar() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: this.etiquetas,
        datasets: [
          {
            label: this.funcion,
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,255,0.5)",
            borderColor: "rgba(0,0,255,0.5)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(255,0,0,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(0,255,0,1)",
            pointHoverBorderColor: "rgba(255,0,0,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 2,
            pointHitRadius: 10,
            data: this.valores,
            spanGaps: false,
          }
        ]
      }
    });
  }
}
