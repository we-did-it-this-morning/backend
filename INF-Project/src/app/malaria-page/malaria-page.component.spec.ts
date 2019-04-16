import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalariaPageComponent } from './malaria-page.component';

describe('MalariaPageComponent', () => {
  let component: MalariaPageComponent;
  let fixture: ComponentFixture<MalariaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalariaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalariaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
