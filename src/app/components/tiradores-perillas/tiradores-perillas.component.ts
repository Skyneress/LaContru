import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tiradores-perillas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tiradores-perillas.component.html',
  styleUrl: './tiradores-perillas.component.css'
})
export class TiradoresPerillasComponent {


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
