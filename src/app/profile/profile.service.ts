import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [


  ]
  about2 = `Software Developer with 2 years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 2+ All versions, React, Javascript,  Node JS and UI with Responsive Designs .
  Have good understanding of Python, Jquery, Bootstrap, MongoDB, Firebase, and MYSQL`

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://docs.google.com/document/d/1NcW76BpZl9yWPTq-dsA9-FzyqTLb6PJM275sUBoje8w/edit?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'Java',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'Spring Boot',
      'progress': '70%'
    },
    {
      'id': '3',
      'skill': 'Angular',
      'progress': '60%'
    },
    {
      'id': '4',
      'skill': 'SQL ,MongoDb, Cassandra',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'Linux',
      'progress': '75%'
    }

  ];


  educationData: any = [
    
  ];
  exprienceData: any = [
    
    {
      id: 3,
      company: 'Salesforce',
      location: 'Hyderabad',
      timeline: 'June 2021 to present',
      role: 'Member of Technical Staff',
      work: `Technologies : Angular , Node JS , MongoDB . 
      Responsible for developing and managing the platform for CI of autobuilds.
      Working on patching on gcp servers using terraform.
      Developing scripts for automations of CI setup.`
    },

    {
      id: 2,
      company: 'Walmart',
      location: 'Banglore',
      timeline: 'Dec 2021 to June 2021',
      role: 'Software  Developer 2',
      work: `Technologies : Angular , Node JS , MongoDB , AEM ,Cassandra . 
      Walmart Academy project on Adobe Experience Manager (AEM)
  `
    },

    {
      id: 1,
      company: 'TIAA',
      location: 'Mumbai',
      timeline: 'July 2020 - Dec 2021',
      role: 'Software Developer Analyst',
      work: `Technologies : Angular , Java Spring Boot , Splunk ,MongoDB.
      Developed & maintained applications in Spring Boot.
      Integrated Conjur in all the APIs.
      Refactored & reduced tech debt to make it eligible for rapid release.
      Found & fixed security vulnerabilities.
      Built & deployed applications using Jenkins & Openshift.
      `
    },


  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}
