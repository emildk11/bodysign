import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodysignsComponent } from './bodysigns.component';

describe('BodysignsComponent', () => {
  let component: BodysignsComponent;
  let fixture: ComponentFixture<BodysignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodysignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodysignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
