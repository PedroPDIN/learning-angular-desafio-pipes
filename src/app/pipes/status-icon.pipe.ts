import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusIcon'
})
export class StatusIconPipe implements PipeTransform {
  transform(userStatus: number): string {
    const statusIconList: { [key: string]: string } = {
      1: 'assets/icons/active-icon.png',
      2: 'assets/icons/inactive-icon.png',

    };
    return statusIconList[userStatus];
  }

}
