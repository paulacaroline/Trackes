import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComunidadesPage } from './comunidades.page';

describe('ComunidadesPage', () => {
  let component: ComunidadesPage;
  let fixture: ComponentFixture<ComunidadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunidadesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComunidadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
