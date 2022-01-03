import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppStoreModule } from './app-store/app-store.module';
import { TodoModule } from './todo/todo.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, AppStoreModule, TodoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
