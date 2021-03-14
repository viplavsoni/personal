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

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      titleCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      interest1: ['', Validators.required],
      interest2:  [''],
      interest3:  [''],
      interest4:  ['']
    });
  }

  save(){
    console.log(this.firstFormGroup);
    console.log(this.secondFormGroup);
    localStorage.title = this.firstFormGroup.get('titleCtrl').value;
    let interestArray = [this.secondFormGroup.get('interest1').value, this.secondFormGroup.get('interest2').value,
                          this.secondFormGroup.get('interest3').value, this.secondFormGroup.get('interest4').value];
    localStorage.interestArray = interestArray;
  }



}
