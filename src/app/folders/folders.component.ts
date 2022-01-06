import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {
  opened=false;
  
   menudatas=['Base plan','Base-100k upweight','Base-100k downweight','TV Focus','Radio Removed',
  'Budget change 22/11','Budget change 23/11','HW version1','HW version2'];

  ngOnInit(): void {
  }
  
}
