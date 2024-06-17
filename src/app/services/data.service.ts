import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface Article {
  username: string;
  title: string;
  description: string;
  date: string;
  price: number;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Article[] = [
    {
      username: 'Matt Chorsey',
      title: 'New event: Trip to Vegas',
      description: "",
      date: '9:32 AM',
      price: 25,
      id: 0,
    },
    {
      username: 'Lauren Ruthford',
      title: 'Long time no chat',
      description: "",
      date: '6:12 AM',
      price: 25,
      id: 1,
    },
    {
      username: 'Jordan Firth',
      title: 'Report Results',
      description: "",
      date: '4:55 AM',
      price: 25,
      id: 2
    },
    {
      username: 'Bill Thomas',
      title: 'The situation',
      description: "",
      date: 'Yesterday',
      price: 25,
      id: 3
    },
    {
      username: 'Joanne Pollan',
      title: 'Updated invitation: Swim lessons',
      description: "",
      date: 'Yesterday',
      price: 25,
      id: 4
    },
    {
      username: 'Andrea Cornerston',
      title: 'Last minute ask',
      description: "",
      date: 'Yesterday',
      price: 25,
      id: 5
    },
    {
      username: 'Moe Chamont',
      title: 'Family Calendar - Version 1',
      description: "",
      date: 'Last Week',
      price: 25,
      id: 6
    },
    {
      username: 'Kelly Richardson',
      title: 'Placeholder Headhots',
      description: "",
      date: 'Last Week',
      price: 25,
      id: 7
    }
  ];

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

  public getArticleById(id: number): Promise<Article> {
    return new Promise((resolve, reject) => {
      resolve(this.messages[id])
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
