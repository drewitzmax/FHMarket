import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private data = inject(DataService);
  protected messages: any[] = [];
  constructor() {
    this.data.getMessages().then(value => {
      this.messages = value;
      this.messages.sort((a, b) => -1*a.date.localeCompare(b.date));
    });
  }

  refresh(ev: any) {
    setTimeout(() => {

      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
    this.data.getMessages().then(value => {
      this.messages = value;
      this.messages.sort((a, b) => -1*a.date.localeCompare(b.date));
      (ev as RefresherCustomEvent).detail.complete();
    });
  }
}
