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
    declarations: [AppComponent, HomeComponent, StoricoComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        AppRoutingModule,
        TranslateModule.forRoot(I18N_CONFIG),
        HttpClientModule,
        SidebarModule,
        ButtonModule,
        MenuModule
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
      StoricoComponent
    ]
  })
  export class AppModule {}