import { Injectable } from '@angular/core';
import { DiagnosticCenter } from './diagnostic-center';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticCenterService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:7070/diagnosticcenter';

  getCenters(){
    return this.http.get<DiagnosticCenter[]>(this.baseUrl + '/' + 'allcenters');
 }
 
 

addCenter(center:Object):Observable<any>{
  console.log("inside add center")
  
  return this.http.post(`${this.baseUrl}/`+'addcenter',center, {responseType:'text'});
}

getCenterById(centerId: string){
  return this.http.get<DiagnosticCenter>(this.baseUrl+ '/' + 'getcenter/centerid'+'/' + centerId);
}

}

