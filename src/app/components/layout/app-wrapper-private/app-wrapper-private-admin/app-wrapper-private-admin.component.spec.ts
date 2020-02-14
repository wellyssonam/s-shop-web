import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWrapperPrivateAdminComponent } from './app-wrapper-private-admin.component';

describe('AppWrapperPrivateAdminComponent', () => {
  let component: AppWrapperPrivateAdminComponent;
  let fixture: ComponentFixture<AppWrapperPrivateAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWrapperPrivateAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWrapperPrivateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
