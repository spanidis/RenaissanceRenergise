import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingAssetNewComponent } from './adding-asset-new.component';

describe('AddingAssetNewComponent', () => {
  let component: AddingAssetNewComponent;
  let fixture: ComponentFixture<AddingAssetNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingAssetNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingAssetNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
