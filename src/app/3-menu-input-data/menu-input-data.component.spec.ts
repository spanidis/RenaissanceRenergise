import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInputDataComponent } from './menu-input-data.component';

describe('MenuInputDataComponent', () => {
  let component: MenuInputDataComponent;
  let fixture: ComponentFixture<MenuInputDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuInputDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuInputDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
