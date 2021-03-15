import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {

  public professionData =[ 
      { companyName: 'Interbiz Consulting LLC',
        duration: 'July 2018 - April 2019',
        story: `<ul>
                  <li>
                    Worked on a reference app for medical practitioners like nurses, ems, physicians, students, etc. It
                    contain protocols related to medical field. Provides the offline capabilities in the web apps.
                  </li>
                  <li>
                    Worked on a Farm and supply management project, provides the offline capabilities in the web app that will
                    be useful in remote villages.
                  </li>
                </ul>`},
      { companyName: 'Wiz Panda Techno Solutions',
        duration: 'April 2019 - April 2020',
        story: `<ul>
                  <li>
                    Developed the multi media (Audio, Video, Game) streaming, white labeled Platform.
                  </li>
                  <li>
                    Involved in E-commerce project added payment integration.
                  </li>
                  <li>
                    Worked on educational based platform which will provide training and educational content to the students.
                  </li>
                  <li>
                    Experienced in unit and integration testing for features.
                  </li>
                  <li>
                    Paytm Integration in Mobile apps.
                  </li>
                </ul>`},
      { companyName: 'Spade Infotech pvt ltd',
        duration: 'April 2020 - Current',
        story: `<ul>
                  <li>
                    Developed a Mobile app for B2B solutions which helps SMEs & larger organizations for sales management. Sales
                    executives can take orders, file expenses, track their visits, mark attendance and apply for leaves with
                    this extremely easy to use mobile app based solution.
                  </li>
                  <li>
                    Worked on a ERP software in Ionic 4 for the Factory management with Inventory management, Transportation,
                    Payment features.
                  </li>
                  <li>
                    Working on a project of i2o retail which Transform the Ecommerce data into actionable insights.
                  </li>
                  <li>
                    Experienced in unit and integration testing for features.
                  </li>
                  <li>
                    Paytm Integration in Mobile apps.
                  </li>
                </ul>`},
  ]
  constructor() { }

  ngOnInit(): void {
    this.loadRecords();
  }

  loadRecords() {
    let professionData = localStorage.professionalData;
    this.professionData = professionData? JSON.parse(professionData): this.professionData;
  }

}
