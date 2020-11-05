import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getContent(): Observable<any> {
    const contentArray = [{
      id: 0,
      title: 'Title 1',
      description: 'This is just the first title. Calm down',
      url: 'assets/img/img4.png'
    },
    {
      id: 1,
      title: 'Anime 2',
      description: 'No idea what this is but yolo',
      url: 'assets/img/img2.jpg'
    },
    {
      id: 0,
      title: 'Anime 3',
      description: 'So I\'ll flyyyyy',
      url: 'assets/img/img3.png'
    },
    ];

    return of(contentArray);
  }
}
