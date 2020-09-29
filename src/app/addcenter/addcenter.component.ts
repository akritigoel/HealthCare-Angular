import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DiagnosticCenterService } from '../diagnostic-center.service';

@Component({
  selector: 'app-addcenter',
  templateUrl: './addcenter.component.html',
  styleUrls: ['./addcenter.component.css']
})
export class AddcenterComponent implements OnInit {
  addForm: FormGroup;
  constructor(private route:ActivatedRoute,private service:DiagnosticCenterService,private router:Router , 
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      centerId: ["",[Validators.required, Validators.pattern('[a-z]*$')]],
      centerName: ["", [Validators.required]],
      centerAddress:["",[Validators.required]],
      contactNumber:["",[Validators.required, Validators.minLength(10),Validators.maxLength(10)]]
      });
     }

     onSubmit(){
      const myObj = {
      centerId: this.addForm.value.centerId.toString(),
      centerName: this.addForm.value.centerName.toString(),
      centerAddress:this.addForm.value.centerAddress.toString(),
      contactNumber:this.addForm.value.contactNumber.toString()
      };
          
           this.service.addCenter(myObj).subscribe(
            data => {
            alert("Center added successfully ")
          },
            error =>{ alert("Center with same id exists");}
          );
      }
  
  }


