import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaterDetailsComponent } from './plater-details.component';

describe('PlaterDetailsComponent', () => {
  let component: PlaterDetailsComponent;
  let fixture: ComponentFixture<PlaterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
