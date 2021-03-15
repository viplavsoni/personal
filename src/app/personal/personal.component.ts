import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  public value = `
        <p>
            The Kendo UI Angular Editor allows your users to edit HTML in a familiar, user-friendly way.<br />
        </p>
        <p>Features include:</p>
        <ul>
            <li>Text formatting</li>
            <li>Bulleted and numbered lists</li>
            <li>Hyperlinks</li>
            <li>Cross-browser support</li>
            <li>Identical HTML output across browsers</li>
        </ul>
    `;
  title: string;
  interests: any = [
    'Passionate for Bike Riding',
    'Can Write Short Poems ( Haiku )',
    'Love to create videos for YouTube',
    'Can write stories for Computer'
  ];
    
  constructor() { }

  ngOnInit(): void {
    this.loadLocalStorageData();
  }

  loadLocalStorageData() {
    let title = localStorage.title;
    this.title = title? title: 'Viplav Soni';
    let interests = localStorage.interestArray;
    this.interests = interests? interests.split(','): this.interests; 
  }

}
