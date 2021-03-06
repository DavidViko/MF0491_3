import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modulos
import { AppComponent } from './app.component';
import { SuperComponent } from './super/super.component';
import { CarritoComponent } from './super/carrito/carrito.component';

//Servicios
import { SuperService } from './providers/super.service';

//Pipes o filtros
import { FilterProductosPipe } from './pipes/filtroProd';



@NgModule({
  declarations: [
    AppComponent,
    SuperComponent,
    CarritoComponent,
    FilterProductosPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    SuperService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
