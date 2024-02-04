import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PernosComponent } from './pernos.component';

describe('PernosComponent', () => {
  let component: PernosComponent;
  let fixture: ComponentFixture<PernosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PernosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PernosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
