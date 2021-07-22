import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoToolComponent } from './demo-tool.component';

describe('DemoToolComponent', () => {
  let component: DemoToolComponent;
  let fixture: ComponentFixture<DemoToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
