import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatasYPatinesComponent } from './patas-y-patines.component';

describe('PatasYPatinesComponent', () => {
  let component: PatasYPatinesComponent;
  let fixture: ComponentFixture<PatasYPatinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatasYPatinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatasYPatinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
