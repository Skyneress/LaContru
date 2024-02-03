import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { BisagrasComponent } from './Component/bisagras/bisagras.component';
import { TiradoresYperillasComponent } from './Component/tiradores-yperillas/tiradores-yperillas.component';
import { CorrederasComponent } from './Component/correderas/correderas.component';

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
        path:'Bisagras',
        title:'Bisagras',
        component: BisagrasComponent
    },

    {
        path:'Tiradores y Perillas',
        title:'Tiradores-y-perillas',
        component: TiradoresYperillasComponent
    },

    {
        path:'Correderas',
        title:'Correderas',
        component: CorrederasComponent
    }
];
