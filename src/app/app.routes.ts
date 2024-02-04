import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { BisagraComponent } from './components/bisagra/bisagra.component';
import { LavaplatosComponent } from './components/lavaplatos/lavaplatos.component';
import { CorrederasComponent } from './components/correderas/correderas.component';


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
    },
    {
        path: 'Bisagra',
        title: 'Bisagras',
        component: BisagraComponent
    },
    {
        path: 'Lavaplatos',
        title: 'Lavaplatos',
        component: LavaplatosComponent
    },
    {
        path: 'Correderas',
        title: 'Correderas',
        component: CorrederasComponent,
    }
];
