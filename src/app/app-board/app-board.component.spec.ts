import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBoardComponent } from './app-board.component';

describe('AppBoardComponent', () => {
  let component: AppBoardComponent;
  let fixture: ComponentFixture<AppBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a board object created', () => {
    expect(this.board).toBeTruthy();
  });

  it('should have rows created', () => {
    expect(this.board.rows).toBeTruthy();
  });

  it('should have columns created', () => {
    expect(this.board.cols).toBeTruthy();
  });

});
