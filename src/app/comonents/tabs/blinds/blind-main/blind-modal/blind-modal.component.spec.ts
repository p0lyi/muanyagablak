import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlindModalComponent } from './blind-modal.component';

describe('BlindModalComponent', () => {
  let component: BlindModalComponent;
  let fixture: ComponentFixture<BlindModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlindModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlindModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
