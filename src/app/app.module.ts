import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthIntersetorService } from './auth/auth-intersetor.service';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    {
      /* provide the interseter for add token to http requests */
      provide: HTTP_INTERCEPTORS,
      useClass: AuthIntersetorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
