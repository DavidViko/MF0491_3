import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SuperComponent } from './super/super.component';
import { ProductoComponent } from './super/producto/producto.component';


@NgModule({
  declarations: [
    AppComponent,
    SuperComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
