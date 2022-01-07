import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header=['Files','Edit','View','Run','Kernel','Settings'];
  constructor() { }

  ngOnInit(): void {
  }

}
