import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBySearch'
})
export class FilterBySearchPipe implements PipeTransform {

  transform(data: any, search: string): unknown {
    if (!search){
      return data;
    }

    return data;
    
  }
}
