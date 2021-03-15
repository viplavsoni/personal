import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.css']
})
export class PortfolioFormComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  aboutFormGroup: FormGroup;
  skillFormGroup: FormGroup;
  achievementsFormGroup: FormGroup;
  aboutPageInterestFormGroup: FormGroup;
  contactFormGroup: FormGroup;
  showFrom: boolean = false;
  objectKeys = Object.keys;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createFormGroup();
  }

  cleanForm() {
    this.showFrom = true;
  }

  editRecords() {
    this.firstFormGroup.setValue({titleCtrl: localStorage.title});
    this.setSecondFormGroupValues();
    this.aboutFormGroup.setValue({aboutCtrl: 'viplav'});
    this.setSkillFormGroupValues();
    this.setAchievementsFormGroup();
    this.setAboutPageInterestFormGroup();
    this.setContactFormGroup();
    this.showFrom = true;
  }

  setContactFormGroup() {
    let contactInfo = JSON.parse(localStorage.contactInfo);
    let contactInfoData = {}
    contactInfo.forEach(data => {
      let propertyName:string = this.objectKeys(data)[0];
      contactInfoData[propertyName] = data[propertyName];
      console.log(this.objectKeys(data)); 
    });
    this.contactFormGroup.patchValue(contactInfoData);
  }

  setAboutPageInterestFormGroup() {
    let interestWithIcons = JSON.parse(localStorage.interestWithIcons);
    let interestWithIconsData = {};
    interestWithIcons.forEach((data, index) => {
      let propertyName =  'aboutInterest'+(index+1)+'Ctrl';
      let iconName = 'aboutInterestIcon'+(index+1)+'Ctrl';
      interestWithIconsData[propertyName] = data['interest'];
      interestWithIconsData[iconName] = data['icon'];
    });
    this.aboutPageInterestFormGroup.patchValue(interestWithIconsData);
  }

  setAchievementsFormGroup() {
    let achievementArray = localStorage.achievementArray.split(',');
    let achievementArrayData = {};
    achievementArray.forEach((data, index) => {
      let propertyName =  'achievement'+(index+1);
      achievementArrayData[propertyName] = data;
    });
    this.achievementsFormGroup.patchValue(achievementArrayData);
  }

  setSkillFormGroupValues() {
    let skills = JSON.parse(localStorage.skills);
    let skillsData = {};
    skills.forEach((data, index) => {
      let propertyName =  'skill'+(index+1)+'Ctrl';
      let percentageName = 'skill'+(index+1)+'PercentageCtrl';
      skillsData[propertyName] = data['skill'];
      skillsData[percentageName] = data['percentage'];
    });
    this.skillFormGroup.patchValue(skillsData);
  }

  setSecondFormGroupValues() {
    let interestArray = localStorage.interestArray.split(',');
    let interestArrayData = {};
    interestArray.forEach((data, index) => {
      let propertyName =  'interest'+(index+1);
      interestArrayData[propertyName] = data;
    });
    this.secondFormGroup.patchValue(interestArrayData);
  }

  createFormGroup() {
    this.firstFormGroup = this._formBuilder.group({
      titleCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      interest1: ['', Validators.required],
      interest2:  [''],
      interest3:  [''],
      interest4:  ['']
    });
    this.aboutFormGroup = this._formBuilder.group({
      aboutCtrl: ['', Validators.required]
    });
    this.skillFormGroup = this._formBuilder.group({
      skill1Ctrl: ['', Validators.required],
      skill1PercentageCtrl: [1, Validators.required],
      skill2Ctrl: [''],
      skill2PercentageCtrl: [0],
      skill3Ctrl: [''],
      skill3PercentageCtrl: [0],
      skill4Ctrl: [''],
      skill4PercentageCtrl: [0],
      skill5Ctrl: [''],
      skill5PercentageCtrl: [0],
    });
    this.achievementsFormGroup = this._formBuilder.group({
      achievement1: ['', Validators.required],
      achievement2:  [''],
      achievement3:  [''],
      achievement4:  ['']
    });
    this.aboutPageInterestFormGroup = this._formBuilder.group({
      aboutInterest1Ctrl: ['', Validators.required],
      aboutInterestIcon1Ctrl: ['', Validators.required],
      aboutInterest2Ctrl: [''],
      aboutInterestIcon2Ctrl: [''],
      aboutInterest3Ctrl: [''],
      aboutInterestIcon3Ctrl: [''],
      aboutInterest4Ctrl: [''],
      aboutInterestIcon4Ctrl: [''],
      aboutInterest5Ctrl: [''],
      aboutInterestIcon5Ctrl: [''],
      aboutInterest6Ctrl: [''],
      aboutInterestIcon6Ctrl: [''],
    });
    this.contactFormGroup = this._formBuilder.group({
      contactNumber: ['', Validators.required],
      email:  ['', Validators.required],
      address:  [''],
      githubLink:  [''],
      stackOverflow:  [''],
      twitter:  [''],
      youtube: ['']
    });
  }


  save(){
    localStorage.title = this.firstFormGroup.get('titleCtrl').value;
    let interestArray = [this.secondFormGroup.get('interest1').value, this.secondFormGroup.get('interest2').value,
                          this.secondFormGroup.get('interest3').value, this.secondFormGroup.get('interest4').value];
    localStorage.interestArray = interestArray;
    
    let skills = [
      { skill: this.skillFormGroup.get('skill1Ctrl').value, percentage: this.skillFormGroup.get('skill1PercentageCtrl').value},
      { skill: this.skillFormGroup.get('skill2Ctrl').value, percentage: this.skillFormGroup.get('skill2PercentageCtrl').value},
      { skill: this.skillFormGroup.get('skill3Ctrl').value, percentage: this.skillFormGroup.get('skill3PercentageCtrl').value},
      { skill: this.skillFormGroup.get('skill4Ctrl').value, percentage: this.skillFormGroup.get('skill4PercentageCtrl').value},
      { skill: this.skillFormGroup.get('skill5Ctrl').value, percentage: this.skillFormGroup.get('skill5PercentageCtrl').value}
    ]
    
    localStorage.skills = JSON.stringify(skills);
    
    let achievementArray = [this.achievementsFormGroup.get('achievement1').value, this.achievementsFormGroup.get('achievement2').value,
                          this.achievementsFormGroup.get('achievement3').value, this.achievementsFormGroup.get('achievement4').value];

    localStorage.achievementArray = achievementArray;

    let interestWithIcons = [
      { interest: this.aboutPageInterestFormGroup.get('aboutInterest1Ctrl').value, icon: this.aboutPageInterestFormGroup.get('aboutInterestIcon1Ctrl').value},
      { interest: this.aboutPageInterestFormGroup.get('aboutInterest2Ctrl').value, icon: this.aboutPageInterestFormGroup.get('aboutInterestIcon2Ctrl').value},
      { interest: this.aboutPageInterestFormGroup.get('aboutInterest3Ctrl').value, icon: this.aboutPageInterestFormGroup.get('aboutInterestIcon3Ctrl').value},
      { interest: this.aboutPageInterestFormGroup.get('aboutInterest4Ctrl').value, icon: this.aboutPageInterestFormGroup.get('aboutInterestIcon4Ctrl').value},
      { interest: this.aboutPageInterestFormGroup.get('aboutInterest5Ctrl').value, icon: this.aboutPageInterestFormGroup.get('aboutInterestIcon5Ctrl').value}
    ]
    localStorage.interestWithIcons = JSON.stringify(interestWithIcons);

    let contactInfo = [
      {contactNumber: this.contactFormGroup.get('contactNumber').value},
      {email:  this.contactFormGroup.get('email').value},
      {address: this.contactFormGroup.get('address').value},
      {githubLink: this.contactFormGroup.get('githubLink').value} ,
      {stackOverflow: this.contactFormGroup.get('stackOverflow').value} ,
      {twitter:  this.contactFormGroup.get('twitter').value},
      {youtube: this.contactFormGroup.get('youtube').value}
    ] 

    localStorage.contactInfo = JSON.stringify(contactInfo);

    let intro = this.aboutFormGroup.get('aboutCtrl').value;
    localStorage.intro = intro; 
    console.log(localStorage);
  }
}
