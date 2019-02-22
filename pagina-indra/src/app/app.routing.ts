import {ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { PrincipalComponent } from './components/principal/principal.component';
import { CrearComponent } from './components/crear/crear.component';
import { ErrorComponent } from './components/error/error.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';
import { EditarComponent } from './components/editar/editar.component';
import { EditComponent } from './components/edit/edit.component';


const appRoutes: Routes= [
	{path:'', component:PrincipalComponent},
	{path:'principal', component:PrincipalComponent},
	{path:'crear', component:CrearComponent },
	{path:'noticia/:id', component:EliminarComponent },
	{path:'editar', component:EditarComponent},
	{path:'editar-noticia/:id', component:EditComponent},
	{path:'**', component:ErrorComponent}
];
export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders= RouterModule.forRoot(appRoutes);