import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendimentoWebSiteComponent } from './atendimento-web-site.component';

describe('AtendimentoWebSiteComponent', () => {
  let component: AtendimentoWebSiteComponent;
  let fixture: ComponentFixture<AtendimentoWebSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtendimentoWebSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtendimentoWebSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
