import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiCheckerComponent } from './multi-checker.component';

describe('MultiCheckerComponent', () => {
  let component: MultiCheckerComponent;
  let fixture: ComponentFixture<MultiCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiCheckerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
