import { Component, OnInit } from '@angular/core';
import {Router}  from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {
  
  nombre : any;
  apellido: any;
  edad: any;
  direccion: any;
  celular: any;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  guardar(){
    this.nombre.getItem('1', this.nombre);
    this.apellido.getItem('2', this.apellido);
    this.edad.getItem('3', this.edad);
    this.direccion.getItem('4', this.direccion);
    this.celular.getItem('5', this.celular);
  }
  Mostrar(){
    this.nombre.setItem('1');
    this.apellido.setItem('2');
    this.edad.setItem('3');
    this.direccion.setItem('4');
    this.celular.setItem('5');

    
  }

  Edad(){
    if (this.edad <=18) {
      this.router.navegate([2])
      
    } else {
      this.router.navegate([3])


    }
  }




}
