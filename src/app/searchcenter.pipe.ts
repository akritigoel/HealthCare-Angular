import { Pipe, PipeTransform } from '@angular/core';
import { DiagnosticCenter } from './diagnostic-center';

@Pipe({
  name: 'searchcenter'
})
export class SearchcenterPipe implements PipeTransform {

  transform(centres:DiagnosticCenter[], searchstr:string):any{

    return centres.filter(c=>c.centerId.toLowerCase().includes(searchstr.toLowerCase()));
    
  }
}
