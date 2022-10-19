import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAddPageComponent } from './category-add-page.component';

describe('CategoryAddPageComponent', () => {
  let component: CategoryAddPageComponent;
  let fixture: ComponentFixture<CategoryAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryAddPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
