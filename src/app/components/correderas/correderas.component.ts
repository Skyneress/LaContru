import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-correderas',
  standalone: true,
  imports: [],
  templateUrl: './correderas.component.html',
  styleUrl: './correderas.component.css'
})
export class CorrederasComponent {

  constructor(private router: Router) {}

  cambioCategoria(event: any) {
    
    const valorSeleccionado = event.target.value;

    if(valorSeleccionado === '2') {
      this.router.navigate(['/Bisagra'])
    }
    if(valorSeleccionado === '3') {
      this.router.navigate(['/Tiradores-perillas'])
    }
    if(valorSeleccionado === '4') {
      this.router.navigate(['/Correderas'])
    }
    if(valorSeleccionado === '5') {
      this.router.navigate(['/Rieles'])
    }
    if(valorSeleccionado === '6') {
      this.router.navigate(['/Lavaplatos'])
    }
    if(valorSeleccionado === '7') {
      this.router.navigate(['/Fijacion'])
    }
    if(valorSeleccionado === '8') {
      this.router.navigate(['/Pernos'])
    }
    if(valorSeleccionado === '9') {
      this.router.navigate(['/Soportes'])
    }
    if(valorSeleccionado === '10') {
      this.router.navigate(['/Patas-patines'])
    }
    

  }
}
