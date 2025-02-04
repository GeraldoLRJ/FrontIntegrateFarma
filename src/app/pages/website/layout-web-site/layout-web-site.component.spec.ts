import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutWebSiteComponent } from './layout-web-site.component';

describe('LayoutWebSiteComponent', () => {
  let component: LayoutWebSiteComponent;
  let fixture: ComponentFixture<LayoutWebSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutWebSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutWebSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
