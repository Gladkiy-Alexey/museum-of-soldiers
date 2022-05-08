import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCollectionComponent } from './about-collection.component';

describe('AboutCollectionComponent', () => {
  let component: AboutCollectionComponent;
  let fixture: ComponentFixture<AboutCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutCollectionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
