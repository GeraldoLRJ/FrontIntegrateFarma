import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoWebSiteComponent } from './agendamento-web-site.component';

describe('AgendamentoWebSiteComponent', () => {
  let component: AgendamentoWebSiteComponent;
  let fixture: ComponentFixture<AgendamentoWebSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendamentoWebSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgendamentoWebSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
