import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParametresPage } from './parametres.page';

describe('ParametresPage', () => {
  let component: ParametresPage;
  let fixture: ComponentFixture<ParametresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParametresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
