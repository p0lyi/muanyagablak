import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlindMainComponent } from './blind-main.component';

describe('BlindMainComponent', () => {
  let component: BlindMainComponent;
  let fixture: ComponentFixture<BlindMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlindMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlindMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
