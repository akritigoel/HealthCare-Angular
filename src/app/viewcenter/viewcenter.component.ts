import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DiagnosticCenter } from '../diagnostic-center';
import { DiagnosticCenterService } from '../diagnostic-center.service';

@Component({
  selector: 'app-viewcenter',
  templateUrl: './viewcenter.component.html',
  styleUrls: ['./viewcenter.component.css']
})
export class ViewcenterComponent implements OnInit {
  searchstr:string;
  errorMsg:string;
    centerId: number;
    centers:DiagnosticCenter[];
    center:DiagnosticCenter;
    
  constructor(private router: Router,private route:ActivatedRoute, private service: DiagnosticCenterService) { }

  ngOnInit() {
    this.service.getCenters()
      .subscribe( res => {
        this.centers = res;
        
      });
 }

  public addcenter(){
    this.router.navigate(['addcenter'])
  }
  getData(){
    this.service.getCenters().subscribe(data=>{
      this.centers=data;
       
    })
  }

  getInputValue(){
    var inputVal = ((document.getElementById("centerId") as HTMLInputElement).value);
           this.router.navigate(['center/'+inputVal])
  }

  

 
  
}
