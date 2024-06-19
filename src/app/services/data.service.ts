import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface Article {
  username: string;
  title: string;
  description: string;
  date: string;
  price: number;
  id?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private static article_service_url = "/inserat";

  constructor(private http: HttpClient) {
  }

  public getMessages(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(DataService.article_service_url).subscribe({
        next: (val: any) => {
          console.log("val", val);
          resolve(val.Data.map((entry: any) => {
            return {username: entry.Username, title: entry.Beschreibung, price: entry.Preis, date: entry.Datum, id: entry.ID};
          }));
        }, error: err => reject(err)
      })
    });
  }

  public getArticleById(id: string): Promise<Article> {
    return new Promise((resolve, reject) => {
      this.http.get(DataService.article_service_url + `?getbyinseratID=${id}`).subscribe({
        next: (val: any) => {
          const entry = val.Data[0];
          console.log("val", entry);
          resolve( {username: entry.Username, title: entry.Beschreibung, price: entry.Preis, date: entry.Datum, id: entry.ID, description: entry.Beschreibung});
        }, error: err => reject(err)
      })
    });
  }

  public async postArticle(article: Article){
    return new Promise((resolve, reject) => {
      this.http.post(DataService.article_service_url, {
        "Email": "aman2@gmail.com",
        "Telefon": null,
        "Beschreibung": article.description,
        "Username": null,
        "Status": null,
        "Titel": article.title,
        "Adresse": null,
        "Strasse": null,
        "Ort": "Wien",
        "UserID": "aman2@gmail.com",
        "Datum": "0001-01-01T00:00:00Z",
        "Preis": article.price,
        "Typ": null,
        "Zustand": null,
        "Bilder": null,
        "Id": null
      }).subscribe({next: value => {
          console.log("ADDRESPONSE", value)
          resolve(value);
        }, error: err => {
          console.error("ADDERROR", err)
          reject(err);
        }})
    })

  }
}
