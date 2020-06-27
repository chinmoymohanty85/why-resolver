import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersWithResolverComponent } from './components/orders-with-resolver/orders-with-resolver.component';
import { ResultsAsyncRxComponent } from './components/results-async-rx/results-async-rx.component';
import { ResultsWithResolverComponent } from './components/results-with-resolver/results-with-resolver.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DelayInterceptor } from './interceptors/delay.interceptor';
import { UsersWithResolverComponent } from './components/users-with-resolver/users-with-resolver.component';
@NgModule({
  declarations: [
    AppComponent,
    OrdersWithResolverComponent,
    ResultsAsyncRxComponent,
    ResultsWithResolverComponent,
    UsersWithResolverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: DelayInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
