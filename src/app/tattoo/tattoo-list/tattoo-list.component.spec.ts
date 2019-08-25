import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TattooListComponent } from './tattoo-list.component';

describe('TattooListComponent', () => {
  let component: TattooListComponent;
  let fixture: ComponentFixture<TattooListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TattooListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TattooListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
