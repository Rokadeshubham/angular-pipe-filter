import {Pipe, PipeTransform} from '@angular/core';
import { AppComponent } from './app.component';

@Pipe({
  name: 'employeeFilter'
})

export class EmployeeFilterPipe implements PipeTransform{
  transform(items: any[], searchText: string): any[] {
  if(!items) return [];
  if(!searchText) return items;
  searchText = searchText.toLowerCase();
      return items.filter( it => {return it.toLowerCase().includes(searchText);
    });
   }
}