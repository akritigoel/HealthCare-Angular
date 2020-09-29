import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DiagnosticCenter } from '../diagnostic-center';
import { DiagnosticCenterService } from '../diagnostic-center.service';

@Component({
  selector: 'app-center-details',
  templateUrl: './center-details.component.html',
  styleUrls: ['./center-details.component.css']
})
export class CenterDetailsComponent implements OnInit {
      center:DiagnosticCenter;
    centerId:string=null;
    testForm:FormGroup;
    
   constructor(private formBuilder: FormBuilder, 
    private route:ActivatedRoute,
    private router: Router,
    private service: DiagnosticCenterService) { }

  ngOnInit() {
    
    this.center=new DiagnosticCenter;
    this.centerId=this.route.snapshot.params['id'];
    this.service.getCenterById(this.centerId)
    .subscribe( res => {
      this.center = res;
      
    },
      error =>{ alert("No details with this centerid....check id again");}
    );
  }

}
