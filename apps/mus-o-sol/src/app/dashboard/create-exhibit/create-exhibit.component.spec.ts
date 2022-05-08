import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExhibitComponent } from './create-exhibit.component';

describe('CreateExhibitComponent', () => {
  let component: CreateExhibitComponent;
  let fixture: ComponentFixture<CreateExhibitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateExhibitComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExhibitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
