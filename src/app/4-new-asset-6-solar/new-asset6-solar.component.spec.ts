import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAsset6SolarComponent } from './new-asset6-solar.component';

describe('NewAsset6SolarComponent', () => {
  let component: NewAsset6SolarComponent;
  let fixture: ComponentFixture<NewAsset6SolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAsset6SolarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAsset6SolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
