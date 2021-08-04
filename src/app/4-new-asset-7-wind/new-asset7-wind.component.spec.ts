import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAsset7WindComponent } from './new-asset7-wind.component';

describe('NewAsset7WindComponent', () => {
  let component: NewAsset7WindComponent;
  let fixture: ComponentFixture<NewAsset7WindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAsset7WindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAsset7WindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
