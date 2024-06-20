import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginService} from "./login.service";
import {environment} from "../../environments/environment";

export interface Article {
  username: string;
  title: string;
  description: string;
  date: string;
  price: number;
  image:string;
  city?: string;
  id?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private static article_service_url = environment.inseratService;

  constructor(private http: HttpClient, private login: LoginService) {
  }

  public getMessages(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(DataService.article_service_url, {headers: {Authorization: `Bearer ${this.login.getToken()}`}}).subscribe({
        next: (val: any) => {
          console.log("val", val);
          resolve(val.Data.map((entry: any) => {
            return {username: entry.Username, title: entry.Titel, price: entry.Preis, date: entry.Datum, id: entry.ID, image: entry?.Bilder, city: entry.Ort};
          }));
        }, error: err => reject(err)
      })
    });
  }

  public getArticleById(id: string): Promise<Article> {
    return new Promise((resolve, reject) => {
      this.http.get(DataService.article_service_url + `?getbyinseratID=${id}`, {headers: {Authorization: `Bearer ${this.login.getToken()}`}}).subscribe({
        next: (val: any) => {
          const entry = val.Data[0];
          console.log("val", entry);
          resolve( {username: entry.Username, title: entry.Titel, price: entry.Preis, date: entry.Datum, id: entry.ID, description: entry.Beschreibung, image: entry?.Bilder, city: entry.Ort});
        }, error: err => reject(err)
      })
    });
  }

  public async postArticle(article: Article, currentUser: any){
    return new Promise((resolve, reject) => {
      this.http.post(DataService.article_service_url, {
        "Email": currentUser.email,
        "Telefon": currentUser.telephone,
        "Beschreibung": article.description,
        "Username": currentUser.username,
        "Status": null,
        "Titel": article.title,
        "Adresse": null,
        "Strasse": currentUser?.address?.street,
        "Ort": currentUser?.address?.city,
        "UserID": currentUser.email,
        "Datum": "0001-01-01T00:00:00Z",
        "Preis": article.price,
        "Typ": null,
        "Zustand": null,
        "Bilder": [article.image],
        "Id": null
      }, {headers: {Authorization: `Bearer ${this.login.getToken()}`}}).subscribe({next: value => {
          console.log("ADDRESPONSE", value)
          resolve(value);
        }, error: err => {
          console.error("ADDERROR", err)
          reject(err);
        }})
    })

  }
}
