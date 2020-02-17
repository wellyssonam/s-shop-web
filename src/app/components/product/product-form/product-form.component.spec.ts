import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of, throwError } from 'rxjs';
import { Product } from 'src/app/models/product/product.model';
import { ProductFormComponent } from './product-form.component';
import { ProductFormModule } from './product-form.module';


describe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ProductFormModule,
        NoopAnimationsModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add product with success', () => {
    // given
    component.productData = { id: 'foo', name: '', description: '', price: 0 } as Product;
    const spy = spyOn((component as any).productService, 'post').and.returnValue(of(
      { id: 'foo', name: '', description: '', price: 0 } as Product
    ));
    spyOn(component, 'handleAddProductSuccess').and.callThrough();
    // then
    component.addProduct();
    // then
    expect(spy).toHaveBeenCalled();
  });

  it('should add product with error', () => {
    // given
    component.productData = { id: 'foo', name: '', description: '', price: 0 } as Product;
    const spy = spyOn((component as any).productService, 'post').and.returnValue(throwError(''));
    // then
    component.addProduct();
    // then
    expect(spy).toHaveBeenCalled();
  });
});
