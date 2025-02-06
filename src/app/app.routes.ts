import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { TipoServicoComponent } from './pages/admin/tipo-servico/tipo-servico.component';
import { PrestadorServicoComponent } from './pages/admin/prestador-servico/prestador-servico.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { LayoutWebSiteComponent } from './pages/website/layout-web-site/layout-web-site.component';
import { AtendimentoWebSiteComponent } from './pages/website/atendimento-web-site/atendimento-web-site.component';
import { AgendamentoComponent } from './pages/admin/agendamento/agendamento.component';
import { AgendamentoWebSiteComponent } from './pages/website/agendamento-web-site/agendamento-web-site.component';
import { ProdutoComponent } from './pages/admin/produto/produto.component';

export const routes: Routes = [

    {
        path:'',
        redirectTo:'shop',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LayoutWebSiteComponent,
        children: [
            {
                path:'shop',
                component:LandingComponent
            },
            {
                path:'agendamento',
                component:AgendamentoWebSiteComponent
            },
        ]
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
            },
            {
                path:'agendamento-adm',
                component:AgendamentoComponent
            },
            {
                path:'produto',
                component:ProdutoComponent
            }
        ]
    }
];
