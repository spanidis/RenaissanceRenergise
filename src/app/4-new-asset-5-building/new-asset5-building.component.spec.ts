import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAsset5BuildingComponent } from './new-asset5-building.component';

describe('NewAsset5BuildingComponent', () => {
  let component: NewAsset5BuildingComponent;
  let fixture: ComponentFixture<NewAsset5BuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAsset5BuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAsset5BuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
