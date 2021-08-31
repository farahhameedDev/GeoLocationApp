import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoLocationDifferenceComponent } from './geo-location-difference.component';

describe('GeoLocationDifferenceComponent', () => {
  let component: GeoLocationDifferenceComponent;
  let fixture: ComponentFixture<GeoLocationDifferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoLocationDifferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoLocationDifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
