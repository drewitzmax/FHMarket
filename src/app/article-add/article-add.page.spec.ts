import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleAddPage } from './article-add.page';

describe('ArticleAddPage', () => {
  let component: ArticleAddPage;
  let fixture: ComponentFixture<ArticleAddPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
