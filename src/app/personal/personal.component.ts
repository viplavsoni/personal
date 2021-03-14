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
            In this version, the Editor provides the core HTML editing engine which includes basic text formatting, hyperlinks, and lists.
            The widget <strong>outputs identical HTML</strong> across all major browsers, follows
            accessibility standards, and provides API for content manipulation.
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
    
  constructor() { }

  ngOnInit(): void {
  }

}
