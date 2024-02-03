import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiradoresYperillasComponent } from './tiradores-yperillas.component';

describe('TiradoresYperillasComponent', () => {
  let component: TiradoresYperillasComponent;
  let fixture: ComponentFixture<TiradoresYperillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiradoresYperillasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiradoresYperillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
