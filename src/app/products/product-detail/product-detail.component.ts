import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { ProductService } from '../product.service';
import { IProduct } from '../products';

@Component({
  // selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

pageTitle = 'Product Detail';
product: IProduct;

  constructor(private _route: ActivatedRoute, private _router: Router, private _productService: ProductService) {
    console.log(this._route.snapshot.paramMap.get('id'));
  }

products: IProduct[];
errorMessage: string;
// count=0;
private sub: Subscription;
// @Input() count: any ;


//  @Output() btnClicked: EventEmitter<string> =
//         new EventEmitter<string>();
        
  ngOnInit() {
    // hard coded data
    // let id = +this._route.snapshot.paramMap.get("id");
    // this.pageTitle +=`:${id}`;

    // this.product = {
    //   "productId":id,
    //   "productName":"Leaf Rake",
    //   "productCode":"GDN-0011",
    //   "releaseDate":"March 19, 2016",
    //   "description":"Leaf rake with 48-inch wooden handle",
    //   "price":19.95,
    //   "starRating":3.2,
    //   "imageUrl":"http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    // }

    this.sub = this._route.params.subscribe(
            params => {
                const id = +params['id'];
                this.getProduct(id);
        });
  }
  getProduct(id: number) {
        this._productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }
  onBack() {
    this._router.navigate(['/products']);
  }

  // addToCart(){
  //   this.count = this.count + 1;
  //   console.log(this.count);
  // }

  // onClick(){
  //   console.log(`The rating ${this.addToCart()} was clicked`);
  //   this.btnClicked.emit(`${this.addToCart()}`)
  // }

  
}
