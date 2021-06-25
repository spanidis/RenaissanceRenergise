import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewprojectaddComponent } from './newprojectadd.component';

describe('NewprojectaddComponent', () => {
  let component: NewprojectaddComponent;
  let fixture: ComponentFixture<NewprojectaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewprojectaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewprojectaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
