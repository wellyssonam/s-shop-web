import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListAdminPageComponent } from './product-list-admin-page.component';
import { ProductListAdminPageModule } from './product-list-admin-page.module';


describe('ProductListAdminPageComponent', () => {
  let component: ProductListAdminPageComponent;
  let fixture: ComponentFixture<ProductListAdminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ProductListAdminPageModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
