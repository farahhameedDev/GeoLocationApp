import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoLocationDetailsComponent } from './geo-location-details.component';

describe('GeoLocationDetailsComponent', () => {
  let component: GeoLocationDetailsComponent;
  let fixture: ComponentFixture<GeoLocationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoLocationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoLocationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
