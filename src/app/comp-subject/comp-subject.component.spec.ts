import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompSubjectComponent } from './comp-subject.component';

describe('CompSubjectComponent', () => {
  let component: CompSubjectComponent;
  let fixture: ComponentFixture<CompSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
