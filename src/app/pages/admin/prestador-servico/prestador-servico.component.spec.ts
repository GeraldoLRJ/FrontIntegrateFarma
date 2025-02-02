import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadorServicoComponent } from './prestador-servico.component';

describe('PrestadorServicoComponent', () => {
  let component: PrestadorServicoComponent;
  let fixture: ComponentFixture<PrestadorServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrestadorServicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrestadorServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
