import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavListsCompComponent } from './fav-lists-comp.component';

describe('FavListsCompComponent', () => {
  let component: FavListsCompComponent;
  let fixture: ComponentFixture<FavListsCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavListsCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavListsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
