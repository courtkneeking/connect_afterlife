import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObituaryComponent } from './obituary.component';

describe('ObituaryComponent', () => {
  let component: ObituaryComponent;
  let fixture: ComponentFixture<ObituaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObituaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObituaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
