import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactosComponent } from './components/contactos/contactos.component';

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

    },

    {
        path: 'Productos',
        title: 'Productos',
        component: ProductosComponent

    },

    {
        path: 'Contactos',
        title: 'Contactos',
        component: ContactosComponent
    }
];
