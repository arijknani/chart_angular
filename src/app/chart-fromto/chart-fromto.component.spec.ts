import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartFromtoComponent } from './chart-fromto.component';

describe('ChartFromtoComponent', () => {
  let component: ChartFromtoComponent;
  let fixture: ComponentFixture<ChartFromtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartFromtoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartFromtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
