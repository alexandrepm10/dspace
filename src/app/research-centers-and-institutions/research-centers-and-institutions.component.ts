import {Component, OnInit} from '@angular/core';
import {Journal} from '../social-science-journals/social-science-journals.component';

export interface ResearchCenter {
  name: string;
  url: string;
}

@Component({
  selector: 'app-research-centers-and-institutions',
  templateUrl: './research-centers-and-institutions.component.html',
  styleUrls: ['./research-centers-and-institutions.component.css']
})
export class ResearchCentersAndInstitutionsComponent implements OnInit {

  researchCenters: ResearchCenter[] = [
    {name: 'CRIA – Centro em Rede de Investigação em Antropologia', url: 'http://cria.org.pt/wp/'},
    {name: 'Sociedade Portuguesa de Antropologia e Etnologia', url: 'https://sociedadeportuguesaantropologia.blogspot.com'},
    {name: 'APA - Associação Portuguesa de Antropologia', url: 'http://www.apantropologia.org/apa/'},
    {name: 'Instituto de Ciências Sociais – UL', url: 'https://www.ics.ulisboa.pt'},
    {name: 'Instituto de Ciências Sociais – UM', url: 'https://www.ics.uminho.pt/pt'},
    {name: 'FCSH UNOVA – Antropologia', url: 'https://fcsh.unl.pt/faculdade/departamentos/antropologia/apresentacao'},
    {name: 'ISCTE – Instituto Universitário de Lisboa . Antropologia', url: 'https://www.iscte-iul.pt/curso/9/licenciatura-antropologia'},
    {name: 'Universidade de Coimbra – Antropologia', url: 'https://apps.uc.pt/courses/PT/course/345'},
    {name: 'Instituto Superior de Ciências Sociais e Politicas – UL', url: 'https://www.iscsp.ulisboa.pt'},
  ];


  constructor() {
  }

  ngOnInit() {
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
