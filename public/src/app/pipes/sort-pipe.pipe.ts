import { Pipe, PipeTransform } from '@angular/core';
import { Proiezione } from '../models';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Proiezione[], order: "asc" | "desc" = "asc"): Proiezione[] {
    return value.sort((a,b) => {
      if(order == 'asc') 
        return new Date(a.dataInizio).getTime() - new Date(b.dataInizio).getTime();
      else 
        return new Date(b.dataInizio).getTime() - new Date(a.dataInizio).getTime();
    });
  }

}
