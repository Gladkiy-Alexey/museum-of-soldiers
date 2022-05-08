import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExhibitComponent } from './edit-exhibit.component';

describe('EditExhibitComponent', () => {
  let component: EditExhibitComponent;
  let fixture: ComponentFixture<EditExhibitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditExhibitComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExhibitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
