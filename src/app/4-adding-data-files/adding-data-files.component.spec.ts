import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingDataFilesComponent } from './adding-data-files.component';

describe('AddingDataFilesComponent', () => {
  let component: AddingDataFilesComponent;
  let fixture: ComponentFixture<AddingDataFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingDataFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingDataFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
