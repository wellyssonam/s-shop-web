import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppWrapperPrivateAdminComponent } from './app-wrapper-private-admin.component';


describe('AppWrapperPrivateAdminComponent', () => {
  let component: AppWrapperPrivateAdminComponent;
  let fixture: ComponentFixture<AppWrapperPrivateAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppWrapperPrivateAdminComponent
      ],
      imports: [
        MatSidenavModule,
        RouterTestingModule,
        NoopAnimationsModule,
      ]
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
