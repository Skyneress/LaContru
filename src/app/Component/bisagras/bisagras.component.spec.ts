import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BisagrasComponent } from './bisagras.component';

describe('BisagrasComponent', () => {
  let component: BisagrasComponent;
  let fixture: ComponentFixture<BisagrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BisagrasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BisagrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
