import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreePickerComponent } from './degree-picker.component';

describe('DegreePickerComponent', () => {
  let component: DegreePickerComponent;
  let fixture: ComponentFixture<DegreePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DegreePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
