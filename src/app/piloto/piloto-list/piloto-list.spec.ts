import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotoList } from './piloto-list';

describe('PilotoList', () => {
  let component: PilotoList;
  let fixture: ComponentFixture<PilotoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PilotoList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotoList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
