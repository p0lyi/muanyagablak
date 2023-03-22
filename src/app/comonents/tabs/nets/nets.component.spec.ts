import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetsComponent } from './nets.component';

describe('NetsComponent', () => {
  let component: NetsComponent;
  let fixture: ComponentFixture<NetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
