import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecordsResolverService } from './resolver-guards/records-resolver.service';
import { CustomerIdResolverService } from './resolver-guards/customer-id-resolver.service';
import { OrdersWithResolverComponent } from './components/orders-with-resolver/orders-with-resolver.component';
import { ResultsAsyncRxComponent } from './components/results-async-rx/results-async-rx.component';
import { ResultsWithResolverComponent } from './components/results-with-resolver/results-with-resolver.component';
import { UsersWithResolverComponent } from './components/users-with-resolver/users-with-resolver.component';

const routes: Routes = [
  {
    path: 'records-async', component: ResultsAsyncRxComponent
  },
  {
    path: 'records-resolver', component: ResultsWithResolverComponent, resolve: {
      records: RecordsResolverService
    }
  },
  {
    path: 'orders', component: OrdersWithResolverComponent,
    resolve: {
      surrogateId: CustomerIdResolverService
    }
  },
  {
    path: 'users', component: UsersWithResolverComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
