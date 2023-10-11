import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TopMenuComponent
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}