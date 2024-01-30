import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';

export const routes: Routes = [
    {
        path: 'Inicio',
        title: 'Pagina principal',
        component: InicioComponent
    },
    {
        path: '',
        redirectTo: '/Inicio',
        pathMatch: 'full'

    }
];
