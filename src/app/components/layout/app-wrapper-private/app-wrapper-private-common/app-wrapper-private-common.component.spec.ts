import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWrapperPrivateCommonComponent } from './app-wrapper-private-common.component';

describe('AppWrapperPrivateCommonComponent', () => {
  let component: AppWrapperPrivateCommonComponent;
  let fixture: ComponentFixture<AppWrapperPrivateCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWrapperPrivateCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWrapperPrivateCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
