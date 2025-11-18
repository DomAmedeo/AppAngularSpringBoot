import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaTasks } from './visualizza-tasks';

describe('VisualizzaTasks', () => {
  let component: VisualizzaTasks;
  let fixture: ComponentFixture<VisualizzaTasks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizzaTasks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizzaTasks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
