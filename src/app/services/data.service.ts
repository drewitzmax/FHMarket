import { Injectable } from '@angular/core';

export interface Article {
  username: string;
  title: string;
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
      date: '9:32 AM',
      price: 25,
      id: 0,
    },
    {
      username: 'Lauren Ruthford',
      title: 'Long time no chat',
      date: '6:12 AM',
      price: 25,
      id: 1,},
    {
      username: 'Jordan Firth',
      title: 'Report Results',
      date: '4:55 AM',
      price: 25,
      id: 2},
    {
      username: 'Bill Thomas',
      title: 'The situation',
      date: 'Yesterday',
      price: 25,
      id: 3
    },
    {
      username: 'Joanne Pollan',
      title: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      price: 25,
      id: 4
    },
    {
      username: 'Andrea Cornerston',
      title: 'Last minute ask',
      date: 'Yesterday',
      price: 25,
      id: 5
    },
    {
      username: 'Moe Chamont',
      title: 'Family Calendar - Version 1',
      date: 'Last Week',
      price: 25,
      id: 6
    },
    {
      username: 'Kelly Richardson',
      title: 'Placeholder Headhots',
      date: 'Last Week',
      price: 25,
      id: 7
    }
  ];

  constructor() { }

  public getMessages(): Article[] {
    return this.messages;
  }

  public getArticleById(id: number): Article {
    return this.messages[id];
  }
}
