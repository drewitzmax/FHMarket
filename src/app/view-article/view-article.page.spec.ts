import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ViewMessagePageRoutingModule } from './view-article-routing.module';
import { ViewArticlePage } from './view-article.page';

describe('ViewMessagePage', () => {
  let component: ViewArticlePage;
  let fixture: ComponentFixture<ViewArticlePage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ViewArticlePage],
      imports: [IonicModule.forRoot(), ViewMessagePageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewArticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
