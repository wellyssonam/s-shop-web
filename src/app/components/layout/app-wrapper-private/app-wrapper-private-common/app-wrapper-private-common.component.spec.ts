import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppWrapperPrivateCommonComponent } from './app-wrapper-private-common.component';


describe('AppWrapperPrivateCommonComponent', () => {
  let component: AppWrapperPrivateCommonComponent;
  let fixture: ComponentFixture<AppWrapperPrivateCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppWrapperPrivateCommonComponent
      ],
      imports: [
        RouterTestingModule,
        MatSidenavModule,
        NoopAnimationsModule,
      ]
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
