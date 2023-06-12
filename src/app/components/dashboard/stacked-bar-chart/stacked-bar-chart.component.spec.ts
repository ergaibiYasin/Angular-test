import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedBarChartComponent } from './stacked-bar-chart.component';

describe('StackedBarChartComponent', () => {
  let component: StackedBarChartComponent;
  let fixture: ComponentFixture<StackedBarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StackedBarChartComponent]
    });
    fixture = TestBed.createComponent(StackedBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
