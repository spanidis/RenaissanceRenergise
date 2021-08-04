import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAsset3GeneratorComponent } from './new-asset3-generator.component';

describe('NewAsset3GeneratorComponent', () => {
  let component: NewAsset3GeneratorComponent;
  let fixture: ComponentFixture<NewAsset3GeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAsset3GeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAsset3GeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
