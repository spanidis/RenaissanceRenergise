import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideLogoComponent } from './left-side-logo.component';

describe('LeftSideLogoComponent', () => {
  let component: LeftSideLogoComponent;
  let fixture: ComponentFixture<LeftSideLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftSideLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSideLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
