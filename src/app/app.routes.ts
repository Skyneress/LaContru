import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { BisagraComponent } from './components/bisagra/bisagra.component';
import { LavaplatosComponent } from './components/lavaplatos/lavaplatos.component';
import { CorrederasComponent } from './components/correderas/correderas.component';
import { TiradoresPerillasComponent } from './components/tiradores-perillas/tiradores-perillas.component';
import { RielesComponent } from './components/rieles/rieles.component';
import { FijacionComponent } from './components/fijacion/fijacion.component';
import { PernosComponent } from './components/pernos/pernos.component';
import { SoportesComponent } from './components/soportes/soportes.component';
import { PatasYPatinesComponent } from './components/patas-y-patines/patas-y-patines.component';
import { FerreteriaComponent } from './components/ferreteria/ferreteria.component';
import { MaderaComponent } from './components/madera/madera.component';
import { CubiertasComponent } from './components/cubiertas/cubiertas.component';




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
    },

    {
        path: 'Tiradores-perillas',
        title: 'Tiradores y perillas',
        component: TiradoresPerillasComponent
    },

    {
        path:'Rieles',
        title:'Rieles',
        component:RielesComponent
    },

    {
        path:'Fijacion',
        title:'Fijacion',
        component: FijacionComponent

    },

    {
        path:'Pernos',
        title:'Pernos',
        component: PernosComponent

    },

    {
        path:'Soportes',
        title:'Soportes',
        component: SoportesComponent
    },

    {
        path:'Patas-patines',
        title:'Patas y patines',
        component: PatasYPatinesComponent

    },

    {
        path:'Ferreteria',
        title:'Ferreteria',
        component: FerreteriaComponent
    },

    {
        path:'Madera',
        title:'Madera',
        component: MaderaComponent
    },

    {
        path:'Cubiertas',
        title:'Cubiertas',
        component:CubiertasComponent
    }

];
