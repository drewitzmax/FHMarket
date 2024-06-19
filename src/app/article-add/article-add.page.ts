import {Component} from '@angular/core';
import {AlertController, NavController} from "@ionic/angular";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.page.html',
  styleUrls: ['./article-add.page.scss'],
})
export class ArticleAddPage  {
  public title: string;
  public description: string;
  public price: number;

  constructor(protected navCtrl: NavController, private data: DataService, private alert: AlertController) {
    this.title ="";
    this.description ="";
    this.price=0;
  }

  protected async postArticle($event: MouseEvent){
    debugger;
    try {
      await this.data.postArticle({description: this.description, date: Date.now() + "", id: undefined, price: this.price, title: this.title, username: ""})
      const al = await this.alert.create({message: "Artikel erfolgreich erstellt!"});
      await al.present();
      this.navCtrl.back()
    }catch (e){
      const al = await this.alert.create({message: "Artikel konnte nicht erstellt werden"});
      await al.present();
    }
  }
}
