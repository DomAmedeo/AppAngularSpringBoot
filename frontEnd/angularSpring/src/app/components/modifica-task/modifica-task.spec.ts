import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaTask } from './modifica-task';

describe('ModificaTask', () => {
  let component: ModificaTask;
  let fixture: ComponentFixture<ModificaTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificaTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificaTask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
