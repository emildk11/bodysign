import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTattoosComponent } from './show-tattoos.component';

describe('ShowTattoosComponent', () => {
  let component: ShowTattoosComponent;
  let fixture: ComponentFixture<ShowTattoosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTattoosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTattoosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
