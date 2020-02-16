import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/models/product/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFormComponent implements OnInit {

  productData: Product;

  @Input() products: Product[];

  constructor(private productService: ProductService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.productData = this.newProduct();
  }

  newProduct() {
    return new Product();
  }

  addProduct() {
    console.log('>>> add product');
    const query = {
      name: this.productData.name,
      description: this.productData.description,
      price: this.productData.price,
    };
    console.log(query);
    this.productService.post(query).subscribe(
      res => this.handleAddProductSuccess(res),
      error => this.handleAddProductError(error),
    );
  }

  handleAddProductSuccess(product: Product) {
    this.products.push(product);
    this.productData = new Product();
    this.openAlertMessage('Criado com sucesso');
  }

  handleAddProductError(message: any) {
    this.openAlertMessage(message.statusText);
  }

  openAlertMessage(message: string) {
    this.snackBar.open(message, 'Fechar', {
      duration: 4000,
    });
  }
}
