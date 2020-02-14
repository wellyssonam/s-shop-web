import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListAdminPageComponent } from './product-list-admin-page.component';

describe('ProductListAdminPageComponent', () => {
  let component: ProductListAdminPageComponent;
  let fixture: ComponentFixture<ProductListAdminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListAdminPageComponent ]
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
