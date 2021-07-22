import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingAssetGeneralComponent } from './adding-asset-general.component';

describe('AddingAssetGeneralComponent', () => {
  let component: AddingAssetGeneralComponent;
  let fixture: ComponentFixture<AddingAssetGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingAssetGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingAssetGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
