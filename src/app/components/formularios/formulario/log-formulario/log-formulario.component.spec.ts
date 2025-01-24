import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogFormularioComponent } from './log-formulario.component';

describe('LogFormularioComponent', () => {
  let component: LogFormularioComponent;
  let fixture: ComponentFixture<LogFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
