import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotocicletaList } from './motocicleta-list';

describe('MotocicletaList', () => {
  let component: MotocicletaList;
  let fixture: ComponentFixture<MotocicletaList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MotocicletaList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotocicletaList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
