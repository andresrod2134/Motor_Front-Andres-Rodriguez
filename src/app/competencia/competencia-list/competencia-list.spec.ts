import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenciaList } from './competencia-list';

describe('CompetenciaList', () => {
  let component: CompetenciaList;
  let fixture: ComponentFixture<CompetenciaList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompetenciaList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetenciaList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
