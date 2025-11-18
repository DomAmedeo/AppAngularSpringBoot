import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserisciTask } from './inserisci-task';

describe('InserisciTask', () => {
  let component: InserisciTask;
  let fixture: ComponentFixture<InserisciTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InserisciTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserisciTask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
