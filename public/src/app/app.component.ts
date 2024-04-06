import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{

  title = 'cineMille';

  sidebarVisible :boolean = false;
  sidebarList :MenuItem[] = [];

  constructor(private translate :TranslateService, private titleCase :TitleCasePipe) {    
  }

  ngOnInit(): void {
    
    this.sidebarList = [{
      label: this.titleCase.transform(this.translate.instant('sidebar.inProgrammazione')),
      icon: 'pi pi-play',
      styleClass: 'text-decoration-none p-0'
    },
    {
      label: this.titleCase.transform(this.translate.instant('sidebar.storico')),
      icon: 'pi pi-history' 
    }];
  }
}
