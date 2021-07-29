import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  FlexLayoutModule  } from '@angular/flex-layout';
import {  RouterModule  } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { MainContentComponent } from './shared/main-content/main-content.component';
import { MenuComponent } from './shared/menu.component';
import { ErrorComponent } from './error.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainContentComponent,
    MenuComponent,
    ErrorComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      { path:'home', component: MainContentComponent },
      { path:'', redirectTo:'/home', pathMatch:'full' },
      { path:'**', component: ErrorComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
