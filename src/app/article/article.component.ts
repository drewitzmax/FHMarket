import {ChangeDetectionStrategy, Component, inject, Input, OnInit} from '@angular/core';
import { Platform } from '@ionic/angular';
import { Article } from '../services/data.service';
import {DateService} from "../services/date.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent implements OnInit{
  private platform = inject(Platform);
  @Input() article?: Article;
  protected picImage!: string|undefined;
  isIos() {
    return this.platform.is('ios')
  }

  constructor(protected date: DateService) {}

  ngOnInit(){
    if(this.article?.image){
      this.picImage = this.article?.image[0] ?"data:image/jpeg;base64,"+ this.article?.image[0]: undefined;
    }

  }
}
