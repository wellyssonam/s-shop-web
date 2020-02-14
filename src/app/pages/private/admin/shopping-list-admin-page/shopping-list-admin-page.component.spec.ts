import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListAdminPageComponent } from './shopping-list-admin-page.component';

describe('ShoppingListAdminPageComponent', () => {
  let component: ShoppingListAdminPageComponent;
  let fixture: ComponentFixture<ShoppingListAdminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListAdminPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
