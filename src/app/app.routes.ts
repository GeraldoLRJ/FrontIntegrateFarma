import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { TipoServicoComponent } from './pages/admin/tipo-servico/tipo-servico.component';
import { PrestadorServicoComponent } from './pages/admin/prestador-servico/prestador-servico/prestador-servico.component';

export const routes: Routes = [

    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children: [
            {
                path:'tipo_servico',
                component:TipoServicoComponent
            },
            {
                path:'prestador_servico',
                component:PrestadorServicoComponent
            }
        ]
    }
];
