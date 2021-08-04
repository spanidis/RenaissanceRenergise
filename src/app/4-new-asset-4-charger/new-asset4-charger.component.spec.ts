import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAsset4ChargerComponent } from './new-asset4-charger.component';

describe('NewAsset4ChargerComponent', () => {
  let component: NewAsset4ChargerComponent;
  let fixture: ComponentFixture<NewAsset4ChargerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAsset4ChargerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAsset4ChargerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
