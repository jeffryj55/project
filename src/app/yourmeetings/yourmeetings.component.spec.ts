import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourmeetingsComponent } from './yourmeetings.component';

describe('YourmeetingsComponent', () => {
  let component: YourmeetingsComponent;
  let fixture: ComponentFixture<YourmeetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourmeetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourmeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
