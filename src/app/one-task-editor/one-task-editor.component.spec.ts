import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTaskEditorComponent } from './one-task-editor.component';

describe('OneTaskEditorComponent', () => {
  let component: OneTaskEditorComponent;
  let fixture: ComponentFixture<OneTaskEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneTaskEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneTaskEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
