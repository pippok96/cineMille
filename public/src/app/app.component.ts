import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { AppService } from './app.service';
import { Cinema } from './models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{

  sidebarVisible :boolean = false;
  sidebarList :MenuItem[] = [];
  data ?:Cinema;
  
  constructor(private translate :TranslateService, 
              private titleCase :TitleCasePipe, 
              private service :AppService,
              private router :Router) {    
  }

  ngOnInit(): void {
    
    this.sidebarList = [{
      label: this.titleCase.transform(this.translate.instant('sidebar.inProgrammazione')),
      icon: 'pi pi-play',
      command: () => this.onClickItem('home', this.data)
    },
    {
      label: this.titleCase.transform(this.translate.instant('sidebar.storico')),
      icon: 'pi pi-history',
      command: () => this.onClickItem('storico', this.data?.proiezioni)
    }];

    this.service.getData().subscribe((response) => {
      this.data = response as Cinema;
      this.router.navigateByUrl('home', {state: this.data});
      
    });

  }

  onClickItem = (url :string, state :any) => {
    this.sidebarVisible = false;
    this.router.navigateByUrl(url, {state: state});
  }
  
}
