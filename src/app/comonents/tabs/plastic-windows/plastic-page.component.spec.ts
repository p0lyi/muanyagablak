import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasticPageComponent } from './plastic-page.component';

describe('PlasticPageComponent', () => {
  let component: PlasticPageComponent;
  let fixture: ComponentFixture<PlasticPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlasticPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlasticPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
