import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasrtDetailsComponent } from './casrt-details.component';

describe('CasrtDetailsComponent', () => {
  let component: CasrtDetailsComponent;
  let fixture: ComponentFixture<CasrtDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasrtDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasrtDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
