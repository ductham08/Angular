import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbroadAdminPageComponent } from './dashbroad-admin-page.component';

describe('DashbroadAdminPageComponent', () => {
  let component: DashbroadAdminPageComponent;
  let fixture: ComponentFixture<DashbroadAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbroadAdminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbroadAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
