import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveprogramComponent } from './reactiveprogram.component';

describe('ReactiveprogramComponent', () => {
  let component: ReactiveprogramComponent;
  let fixture: ComponentFixture<ReactiveprogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveprogramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
