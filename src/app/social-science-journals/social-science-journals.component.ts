import {Component, OnInit} from '@angular/core';

export interface Journal {
  name: string;
  url: string;
}

@Component({
  selector: 'app-social-science-journals',
  templateUrl: './social-science-journals.component.html',
  styleUrls: ['./social-science-journals.component.css']
})
export class SocialScienceJournalsComponent implements OnInit {

  journals: Journal[] = [
    {name: 'Antropologia Portuguesa', url: 'https://impactum-journals.uc.pt/antropologiaportuguesa'},
    {name: 'Antropológicas', url: 'https://revistas.rcaap.pt/antropologicas'},
    {name: 'Etnográfica', url: 'https://journals.openedition.org/etnografica/'},
    {name: 'Trabalhos de Antropologia e Etnologia', url: 'https://revistataeonline.weebly.com'},
    {name: 'Revista de Guimarães', url: 'https://www.csarmento.uminho.pt/revista-de-guimaraes/'},
    {name: 'Sociologia. Problemas e Práticas', url: 'http://sociologiapp.iscte-iul.pt/index.jsp'},
    {name: 'Análise Social', url: 'http://analisesocial.ics.ul.pt'},
    {name: 'Sociologia On Line', url: 'https://revista.aps.pt/pt/inicio/'},
    {name: 'Sociologia. Revista da Faculdade de Letras da Universidade do Porto', url: 'http://ojs.letras.up.pt/index.php/Sociologia'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
