import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PamphletComponent } from './pamphlet.component';

describe('PamphletComponent', () => {
  let component: PamphletComponent;
  let fixture: ComponentFixture<PamphletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PamphletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PamphletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
