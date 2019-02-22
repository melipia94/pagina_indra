import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {routing, appRoutingProviders} from './app.routing';


import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { CrearComponent } from './components/crear/crear.component';
import { ErrorComponent } from './components/error/error.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';
import { EditarComponent } from './components/editar/editar.component';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CrearComponent,
    ErrorComponent,
    EliminarComponent,
    EditarComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule

  ],
  providers: [
  appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
