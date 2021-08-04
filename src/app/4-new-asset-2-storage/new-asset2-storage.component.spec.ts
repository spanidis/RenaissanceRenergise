import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAsset2StorageComponent } from './new-asset2-storage.component';

describe('NewAsset2StorageComponent', () => {
  let component: NewAsset2StorageComponent;
  let fixture: ComponentFixture<NewAsset2StorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAsset2StorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAsset2StorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
