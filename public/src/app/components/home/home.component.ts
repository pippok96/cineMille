import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Cinema, Proiezione } from '../../models';
import { Router } from '@angular/router';
import { getSrcImg } from '../../utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  data ?:Cinema;
  proiezioniInProgrammazione ?:Proiezione[] = [];
  dataInizio :Date = new Date();
  dataFine :Date = new Date();
  maxDataFine :Date = new Date();
  constructor(private router :Router) {
    this.data = this.router.getCurrentNavigation()?.extras.state as Cinema;
  }

  ngOnInit(): void {
    this.dataFine.setDate(this.dataInizio.getDate() + 7 );
    this._updateDataFineMax();
    this.getFilmInProgrammazione(this.dataInizio, this.dataFine);
  }

  getSubHeader = (sala :string, orario :string) => {
    return sala.concat(' - ').concat(orario);
  }

  getSrcImg = (file :string) => {
    return getSrcImg(file);
  }

  onSelectDataInizio = ($event :any) => {
    this._updateDataFineMax();

    let diff = this.dataFine.getTime() - this.dataInizio.getTime() ;
    let maxDiff = this.maxDataFine.getTime() - this.dataInizio.getTime() ;
    if(diff < 0 || diff > maxDiff) {//1: ho scelto date future rispetto a quelle precedenti, 2: ci sono più di 3 settimane differenza
      this.dataFine = this.maxDataFine;
    }

    this.getFilmInProgrammazione(this.dataInizio, this.dataFine);
  }

  onSelectDataFine = ($event :any) => {
    this.getFilmInProgrammazione(this.dataInizio, this.dataFine);
  }

  getFilmInProgrammazione = (dataInizio :Date, dataFine :Date) => {
    this.proiezioniInProgrammazione = this.data?.proiezioni.filter(p => {
      return this._getDate(p.dataInizio) >= dataInizio && this._getDate(p.dataFine) <= dataFine ;
    });
    
  }

  private _updateDataFineMax = () => {
    this.maxDataFine = new Date(this.dataInizio);
    this.maxDataFine.setDate(this.maxDataFine.getDate() + 21 );
  }

  private _getDate = (value :string | Date | null) :Date => {

    if(value != null ) {
      if(typeof value == 'string') {
        let out = new Date(value);
        return out;
      } 
    }

    return value as Date;
  }

}
