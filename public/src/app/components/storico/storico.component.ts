import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proiezione } from '../../models';
import { getSrcImg } from '../../utils';

@Component({
  selector: 'app-storico',
  templateUrl: './storico.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoricoComponent {

  data ?:Proiezione[];

  constructor(private router :Router) {
    this.data = this.router.getCurrentNavigation()?.extras.state as Proiezione[];
  }

  getSrcImg = (file :string) => {
    return getSrcImg(file);
  }
}
