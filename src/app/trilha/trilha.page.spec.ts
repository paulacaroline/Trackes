import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrilhaPage } from './trilha.page';

describe('TrilhaPage', () => {
  let component: TrilhaPage;
  let fixture: ComponentFixture<TrilhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrilhaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrilhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
