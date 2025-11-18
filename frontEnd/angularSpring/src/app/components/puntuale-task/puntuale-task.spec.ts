import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntualeTask } from './puntuale-task';

describe('PuntualeTask', () => {
  let component: PuntualeTask;
  let fixture: ComponentFixture<PuntualeTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuntualeTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuntualeTask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
