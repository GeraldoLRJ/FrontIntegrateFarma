import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { TipoServicoComponent } from './pages/admin/tipo-servico/tipo-servico.component';

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
                path:'products',
                component:ProductsComponent
            },
            {
                path:'tipo_servico',
                component:TipoServicoComponent
            }
        ]
    }
];
