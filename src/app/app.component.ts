import { Component, ViewChild, ElementRef } from '@angular/core';
import jspdf from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'read-pdf';
  data =  [
    {
      id: 1,
      name: 'lorem ipsum',
      username: 'lorem',
      email: 'Lorem@april.biz',
    },
    {
      id: 2,
      name: 'Shoaib',
      username: 'xoaeb',
      email: 'shoaib100@gmail.tv',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
    },
    {
      id: 5,
      name: 'Roshan Thakur',
      username: 'rossshan',
      email: 'roshanthakur@gmail.com',
    },
  ];

  @ViewChild('content') content: any;

  public SavePDF(): void {
    let content = this.content.nativeElement;
    let doc = new jspdf();

    let _elementHandlers = {
      '#editor': function (element: any, renderer: any) {
        return true;
      },
    };

    doc.html(content.innerHTML, {
      width: 10,


      callback: function (doc) {
        doc.save('test.pdf');
      },
    });
  }
}
