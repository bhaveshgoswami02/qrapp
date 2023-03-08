import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
})
export class PagesPage implements OnInit {
  public appPages = [
    { title: 'Scan QR', url: '/pages/scanqr', icon: 'mail' },
    { title: 'View QR', url: '/pages/viewqr', icon: 'paper-plane' },
  ];

  constructor() { }

  ngOnInit() {
  }

  logout() {
    
  }

}
