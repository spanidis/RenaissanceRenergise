import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingConfigFilesComponent } from './adding-config-files.component';

describe('AddingConfigFilesComponent', () => {
  let component: AddingConfigFilesComponent;
  let fixture: ComponentFixture<AddingConfigFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingConfigFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingConfigFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
