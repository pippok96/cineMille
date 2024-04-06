import { APP_INITIALIZER, Injector, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule, TitleCasePipe } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateLoader, TranslateModule, TranslateService } from "@ngx-translate/core";
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MenuModule } from 'primeng/menu';
import { HomeComponent } from './components/home/home.component';
import { StoricoComponent } from './components/storico/storico.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from "@angular/forms";
import { DataViewModule } from 'primeng/dataview';
import { SortPipe } from "./pipes";

function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
  }

  function appInitializerFactory(translate: TranslateService) {
    return () => {
      translate.setDefaultLang('it');
      return translate.use('it');
    }
  }

  const I18N_CONFIG = {
    defaultLanguage: 'it', // this name need to be the same as the JSON file
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  }

@NgModule({
    declarations: [AppComponent, HomeComponent, StoricoComponent, SortPipe],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        AppRoutingModule,
        TranslateModule.forRoot(I18N_CONFIG),
        HttpClientModule,
        SidebarModule,
        ButtonModule,
        MenuModule,
        ProgressSpinnerModule,
        CardModule,
        FormsModule,
        CalendarModule,
        DataViewModule
    ],
    providers: [
      {
        provide: APP_INITIALIZER,
        useFactory: appInitializerFactory,
        deps: [TranslateService],
        multi: true
      },
      TitleCasePipe
    ],
    bootstrap: [AppComponent],
    exports: [
      HomeComponent,
      StoricoComponent,
      SortPipe
    ]
  })
  export class AppModule {}