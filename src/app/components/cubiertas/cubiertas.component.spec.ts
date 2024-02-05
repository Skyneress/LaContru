import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubiertasComponent } from './cubiertas.component';

describe('CubiertasComponent', () => {
  let component: CubiertasComponent;
  let fixture: ComponentFixture<CubiertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CubiertasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CubiertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
