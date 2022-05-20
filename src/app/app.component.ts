import { Component, ViewChild, ElementRef } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'read-pdf';
  data = [
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

  @ViewChild('content') content!: ElementRef;



  public openPDF(): void {
    let DATA: any = document.getElementById('content');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 400;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jspdf('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }
}
