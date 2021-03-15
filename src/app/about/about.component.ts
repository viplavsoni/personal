import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public intro = `<p style="text-align: center;">
  <img src="https://pbs.twimg.com/profile_images/1277879631995998208/TvhPlirQ_400x400.jpg" alt="viplav" width="50" height="50">
  
  Hey ! This is Viplav Soni, a 24 years old young full stack developer and a passionate Youtube Creator living
  in Raipur, India. I am a Computer Science Engineer, currently working with an amazing team at Spade
  Infotech.
  I have around 2.8 years of hands-on experience in websites, and mobile application development using Angular
  and Ionic Framework. <br>

  Can write short Poems I mean "Haiku", Stories, Poems. <br>

  Started my YouTube journey to learn video editing but that increases my hungry to become an tech influencer. 
  Now Having 3K Subscriber and 3.13 lac views and having community tab on channel. <br></p>`;

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
    if(localStorage.intro){
      let intro = localStorage.intro
      this.intro = intro? intro: this.intro;
      let skills = localStorage.skills;
      this.skills = skills? JSON.parse(skills): this.skills;
      let achievement = localStorage.achievementArray;
      this.achievements = achievement? achievement.split(','): this.achievements;
      let interestWithIcons = localStorage.interestWithIcons;
      this.interestWithIcons = interestWithIcons? JSON.parse(interestWithIcons): this.interestWithIcons;
      let contact = JSON.parse(localStorage.contactInfo);
      let website = contact.filter(data => Object.keys(data)[0] === 'youtube')[0].youtube;
      let number = contact.filter(data => Object.keys(data)[0] === 'contactNumber')[0].contactNumber;
      let email = contact.filter(data => Object.keys(data)[0] === 'email')[0].email;
      let address = contact.filter(data => Object.keys(data)[0] === 'address')[0].address;
       
      this.details = contact? [
        `Website: ${website}`,
        `Phone: +91-${number}`,
        `Email: ${email}`,
        `Location: ${address}`
      ] : this.details;
    }
  }

}
