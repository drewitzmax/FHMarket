import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, Platform } from '@ionic/angular';
import { DataService, Article } from '../services/data.service';
import {DateService} from "../services/date.service";

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.page.html',
  styleUrls: ['./view-article.page.scss'],
})
export class ViewArticlePage implements OnInit {
  public article!: Article;
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);

  constructor(protected date: DateService) {}

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.article = await this.data.getArticleById(id);
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Angebote' : '';
  }
}
