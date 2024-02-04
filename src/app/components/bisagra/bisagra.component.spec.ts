import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BisagraComponent } from './bisagra.component';

describe('BisagraComponent', () => {
  let component: BisagraComponent;
  let fixture: ComponentFixture<BisagraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BisagraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BisagraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
