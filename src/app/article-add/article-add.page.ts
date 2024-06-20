import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AlertController, NavController} from "@ionic/angular";
import {DataService} from "../services/data.service";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.page.html',
  styleUrls: ['./article-add.page.scss'],
})
export class ArticleAddPage {
  public title: string;
  public description: string;
  public price: number;
  @ViewChild("image") image!: ElementRef;
  private imageFile:any;

  constructor(protected navCtrl: NavController, private data: DataService, private alert: AlertController, private user: UserService) {
    this.title ="";
    this.description ="";
    this.price=0;
  }

  imageLoad() {
    if(this.image){
      debugger;
      var file = this.image.nativeElement.files[0];
      if (file) {
        var reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = (evt) => {
          this.imageFile = evt?.target?.result;
        }
      }
    }
  }

  protected async postArticle($event: MouseEvent){
    try {
      await this.data.postArticle({description: this.description, date: Date.now() + "", id: undefined, price: this.price, title: this.title, username: "", image: btoa(this.imageFile)}, this.user.getCurrentUser())
      const al = await this.alert.create({message: "Artikel erfolgreich erstellt!"});
      await al.present();
      this.navCtrl.back()
    }catch (e){
      const al = await this.alert.create({message: "Artikel konnte nicht erstellt werden"});
      await al.present();
    }
  }
}
