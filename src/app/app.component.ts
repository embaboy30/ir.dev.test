import { Component } from "@angular/core";
import { ProductsService } from "./products/products.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "ir-dev-test";
  productListDisplay: any[] = [];
  productListOrig: any[] = [];
  brandFilters: any[] = [];
  brand: string = '';
  search: string = '';
  stock: number = 1;
  constructor(private productService: ProductsService) {
    this.productService.getProducts().subscribe(res => {
      this.productListDisplay = res ? res : [];
      this.productListOrig = res ? res : [];
      this.brandFilters = this.productListOrig.filter((item, i, arr) => arr.findIndex((t) => t.brand=== item.brand) === i);
    });
  }

  onStockFilter(value: number) {
    this.stock = value;
    this.applyFilters();
  }
  applyFilters() {
    this.productListDisplay =  this.productListOrig;
    if (this.search != '' && this.search.length > 3) {
      this.productListDisplay =  this.productListDisplay.filter(x => x.name.includes(this.search) || x.description.includes(this.search) || x.brand.includes(this.search));
    }
    if (this.brand != '') {
      this.productListDisplay =  this.productListDisplay.filter(x => x.brand == this.brand);
    }
    if (this.stock == 2) {
      this.productListDisplay =  this.productListDisplay.filter(x => x.quantity > 0);
    } else if (this.stock == 3) {
      this.productListDisplay =  this.productListDisplay.filter(x => x.quantity <= 0);
    }
  }
}
