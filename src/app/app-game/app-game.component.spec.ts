import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGameComponent } from './app-game.component';

describe('AppGameComponent', () => {
  let component: AppGameComponent;
  let fixture: ComponentFixture<AppGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
