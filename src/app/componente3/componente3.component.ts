import { Component, OnInit } from '@angular/core';
import { Router};

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
