import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageList } from './home-page-list.component';

describe('HomePageList', () => {
  let component: HomePageList;
  let fixture: ComponentFixture<HomePageList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
