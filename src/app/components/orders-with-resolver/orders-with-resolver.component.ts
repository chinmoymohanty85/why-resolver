import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../models/Order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-orders-with-resolver',
  templateUrl: './orders-with-resolver.component.html',
  styleUrls: ['./orders-with-resolver.component.scss']
})
export class OrdersWithResolverComponent implements OnInit {

  records$: Observable<Order[]>;
  constructor(private route: ActivatedRoute, private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: { surrogateId: string }) => {
      this.records$ = this.ordersService.GetOrdersBySurrogateId(data.surrogateId);
    });
  }
}
