import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from "./componentes/signin/signin.component"
import { SignupComponent } from "./componentes/signup/signup.component"
import { ChangepassComponent } from "./componentes/changepass/changepass.component"
import { PrincipalComponent } from "./componentes/principal/principal.component"

import { AuthGuard } from './servicios/auth.guard';
import { GlobalComponent } from './componentes/global/global.component';

import { HojaPrestadorComponent } from './componentes/hoja-prestador/hoja-prestador.component'
import { HojaUglComponent } from './componentes/hoja-ugl/hoja-ugl.component'

const routes: Routes = [
  { path: "", component: SigninComponent },
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent },
  { path: "changepass", component: ChangepassComponent },
  {
    path: "principal", 
    component: PrincipalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "ugl", 
    component: HojaUglComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "prestador", 
    component: HojaPrestadorComponent,
    canActivate: [AuthGuard]
  },
  // {
  //   path: "global", 
  //   component: GlobalComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: "anual", 
  //   component: PrincipalComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: "mensual", 
  //   component: PrincipalComponent,
  //   canActivate: [AuthGuard]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
