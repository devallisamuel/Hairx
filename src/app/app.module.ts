import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  FlexLayoutModule  } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { MainContentComponent } from './shared/main-content/main-content.component';
import { MenuComponent } from './shared/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ToolbarComponent,
    MainContentComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
