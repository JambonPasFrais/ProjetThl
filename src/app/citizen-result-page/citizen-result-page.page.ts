import {Component, OnInit} from '@angular/core';
import {User} from '../shared/class/user';
import {lastValueFrom} from 'rxjs';
import {HttpService} from '../core/http.service';

@Component({
  selector: 'app-citizen-result-page',
  templateUrl: './citizen-result-page.page.html',
  styleUrls: ['./citizen-result-page.page.scss'],
})
/*
export class CitizenResultPagePage implements OnInit {
  public test1 = {
    nature:'Test',
    date: '11 Janvier 2021',
    type: 'PCR',
    result: 'positif'
  };
  public vaccine1 = {
    nature:'Vaccin',
    date: '13 Janvier 2021',
    type: 'Moderna',
  };
  public vaccine2 = {
    nature:'Vaccin',
    date: '02 Février 2021',
    type: 'Pfizer',
  };
  public test2 = {
    nature:'Test',
    date: '11 Janvier 2022',
    type: 'Antigénique',
    result: 'Négatif'
  };
  public userData = {
    vaccines: [this.vaccine1, this.vaccine2],
    tests: [this.test1, this.test2],
  };


  constructor(
    public user: User
  ) {
    //console.log('Got ' + this.loadResults() + ' from userData.');
  }
*/

export class CitizenResultPagePage implements OnInit {
  public test1 = {
    nature: 'Test',
    date: '11 Janvier 2021',
    type: 'PCR',
    result: 'positif'
  };
  public vaccine1 = {
    nature: 'Vaccin',
    date: '13 Janvier 2021',
    type: 'Moderna',
  };
  public vaccine2 = {
    nature: 'Vaccin',
    date: '02 Février 2021',
    type: 'Pfizer',
  };
  public test2 = {
    nature: 'Test',
    date: '11 Janvier 2022',
    type: 'Antigénique',
    result: 'Négatif'
  };
  public userData = {
    vaccines: [this.vaccine1, this.vaccine2],
    tests: [this.test1, this.test2],
  };


  constructor(private httpService: HttpService,
              private user: User
  ) {
    this.loadResults();
  }

  ngOnInit() {
  }

  inputNgFor(index, item) {
    return index;
  }

  async loadResults() {
    const infos = await this.user.userData;
   /* await lastValueFrom(this.httpService.getUser(infos))
      .then(res => {
        this.user.userData = res;
        console.log('res: ' + res);
      })
      .catch(err => {
        console.log('err : ', err);
      });*/
    console.log(infos);
    //console.log(infos.tests_results);
    return (infos);
    //(Back) : Accéder à tous les résultats que l'utilisateur possède et les mettre dans la variable userData.operations[]
  }

  // événement pour rafraichir la page
  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
      this.user.getUser().then();
    }, 1000);
  }
}
