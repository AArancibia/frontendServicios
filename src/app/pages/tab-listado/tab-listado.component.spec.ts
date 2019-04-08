import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabListadoComponent } from './tab-listado.component';

describe('TabListadoComponent', () => {
  let component: TabListadoComponent;
  let fixture: ComponentFixture<TabListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
