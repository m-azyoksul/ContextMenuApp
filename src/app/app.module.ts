import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Imported Syncfusion contextmenu module from navigations package
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, ContextMenuModule], // Registering EJ2 ContextMenu Module
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }