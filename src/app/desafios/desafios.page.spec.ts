import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesafiosPage } from './desafios.page';

describe('DesafiosPage', () => {
  let component: DesafiosPage;
  let fixture: ComponentFixture<DesafiosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesafiosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesafiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
