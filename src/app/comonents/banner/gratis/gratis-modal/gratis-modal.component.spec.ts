import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GratisModalComponent } from './gratis-modal.component';

describe('GratisModalComponent', () => {
  let component: GratisModalComponent;
  let fixture: ComponentFixture<GratisModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GratisModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GratisModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
