import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public details = [
    "Website: www.youtube.com/technicalviplav",
    "Phone: +91-7869600848",
    "Email: viplavsoni3333@gmail.com",
    "Location: Gurgaon, India"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
