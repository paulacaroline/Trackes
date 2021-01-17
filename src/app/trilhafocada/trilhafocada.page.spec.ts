import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrilhafocadaPage } from './trilhafocada.page';

describe('TrilhafocadaPage', () => {
  let component: TrilhafocadaPage;
  let fixture: ComponentFixture<TrilhafocadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrilhafocadaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrilhafocadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
