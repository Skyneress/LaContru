import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  
  constructor(private router: Router) {}

  cambioCategoria(event: any) {
    
    const valorSeleccionado = event.target.value;

    if(valorSeleccionado === '2') {
      this.router.navigate(['/Bisagra'])
    }
    if(valorSeleccionado === '3') {
      this.router.navigate(['/Bisagra'])
    }
    if(valorSeleccionado === '4') {
      this.router.navigate(['/Bisagra'])
    }
    if(valorSeleccionado === '5') {
      this.router.navigate(['/Bisagra'])
    }
    if(valorSeleccionado === '6') {
      this.router.navigate(['/Lavaplatos'])
    }
    

  }

}
