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
  ];

  public skills = [
    {skill: 'HTML', percentage: 80},
    {skill: 'CSS', percentage: 70},
    {skill: 'Angular', percentage: 95},
    {skill: 'Ionic', percentage: 95},
    {skill: 'PWA', percentage: 65},
    {skill: 'Groovy on Grails', percentage: 75},
    {skill: 'PHP', percentage: 30 },
    {skill: 'Version Control ( Git )', percentage: 89}
  ]

  public achievements = [
    '4th Position on IoT live Project competition held at IIT B.H.U.',
    'Best Team Leader ( NSS SSEC Unit Camp )',
    'Bagged first Prize on Slogan competition ( Govt of C.G. )'
  ];

  public interestWithIcons = [
    {interest: 'PWA', icon: 'dvr'},
    {interest: 'Design', icon: 'design_services'},
    {interest: 'Music', icon: 'music_video'},
    {interest: 'Mobile App', icon: 'mobile_friendly'},
    {interest: 'Travelling', icon: 'travel_explore'},
    {interest: 'Ride', icon: 'directions_cars'}
  ]

  constructor() { }

  ngOnInit(): void {
    this.loadExistingData();
  }

  loadExistingData() {
    let skills = localStorage.skills;
    this.skills = skills? JSON.parse(skills): this.skills;
    let achievement = localStorage.achievementArray;
    this.achievements = achievement? achievement.split(','): this.achievements;
    let interestWithIcons = localStorage.interestWithIcons;
    this.interestWithIcons = interestWithIcons? JSON.parse(interestWithIcons): this.interestWithIcons;
  }

}
