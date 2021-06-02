import { Component, Input } from "@angular/core";
import { ProductsService } from "./products.service";

@Component({
  selector: "products-table",
  templateUrl: "products-grid.component.html",
  styleUrls: [],
  providers: []
})
export class ProductsGridComponent {
  @Input() productList: any[] = [];
  ngOnInit(): void {
  }
}
