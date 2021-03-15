import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactInfo = [
    {contactNumber: "7869600848"},
    {email: "viplavsoni3333@gmail.com"},
    {address: "Raipur ( C.G. )"},
    {githubLink: "https://github.com/viplavsoni"},
    {stackOverflow: "https://stackoverflow.com/users/11727315/viplav-soni"},
    {twitter: "https://twitter.com/viplav_soni"},
    {youtube: " https://youtube.com/technicalviplav"}
  ];
  objectKeys = Object.keys;
  constructor() { }

  ngOnInit(): void {
    this.loadIntialData();
  }

  loadIntialData() {
    let contactInfo = localStorage.contactInfo;
    this.contactInfo = contactInfo? JSON.parse(contactInfo): this.contactInfo; 
  }

}
