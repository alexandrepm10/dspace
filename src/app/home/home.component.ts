import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../core/api.service';

export interface Theme {
  value: string;
  viewValue: string;
}

export interface GeoArea {
  value: string;
  viewValue: string;
}

export interface GeoAreaGroup {
  disabled?: boolean;
  name: string;
  geoArea?: GeoArea[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  themes: Theme[] = [
    {value: 'Antropologia Etnografia Portuguesa', viewValue: 'Antropologia / Etnografia Portuguesa'},
    {value: 'Antropologia teoria metodologias', viewValue: 'Antropologia (teoria e metodologias)'},
    {value: 'Arte', viewValue: 'Arte'},
    {value: 'Artes ofícios', viewValue: 'Artes e ofícios'},
    {value: 'Água', viewValue: 'Água'},
    {value: 'Animais', viewValue: 'Animais'},
    {value: 'Canto dança', viewValue: 'Canto / dança'},
    {value: 'Cidade urbanismo culturas urbanas', viewValue: 'Cidade /urbanismo e culturas urbanas'},
    {value: 'Culturas grupos idade', viewValue: 'Culturas e grupos de idade'},
    {value: 'Culturas mar', viewValue: 'Culturas do mar'},
    {value: 'Culturas montanha', viewValue: 'Culturas de montanha'},
    {value: 'Conflitos', viewValue: 'Conflitos'},
    {value: 'Desporto', viewValue: 'Desporto'},
    {value: 'Ecologia', viewValue: 'Ecologia'},
    {value: 'Economia', viewValue: 'Economia'},
    {value: 'Estudos género', viewValue: 'Estudos de género'},
    {value: 'Expressões Mundo Rural Camponês', viewValue: 'Expressões do Mundo Rural e Camponês'},
    {value: 'Culturas grupos idade', viewValue: 'Culturas e grupos de idade'},
    {value: 'Culturas mar', viewValue: 'Culturas do mar'},
    {value: 'Culturas montanha', viewValue: 'Culturas de montanha'},
    {value: 'Conflitos', viewValue: 'Conflitos'},
    {value: 'Desporto', viewValue: 'Desporto'},
    {value: 'Ecologia', viewValue: 'Ecologia'},
    {value: 'Economia', viewValue: 'Economia'},
    {value: 'Estudos género', viewValue: 'Estudos de género'},
    {value: 'Expressões Mundo Rural Camponês', viewValue: 'Expressões do Mundo Rural e Camponês'},
    {value: 'Festas romarias', viewValue: 'Festas e romarias'},
    {value: 'Gastronomia', viewValue: 'Gastronomia'},
    {value: 'Étnicos', viewValue: 'Grupos Étnicos'},
    {value: 'Identidade Nacional', viewValue: 'Identidade Nacional'},
    {value: 'Jogos', viewValue: 'Jogos'},
    {value: 'Migrações', viewValue: 'Migrações'},
    {value: 'Museologia', viewValue: 'Museologia'},
    {value: 'Música instrumentos', viewValue: 'Música / instrumentos'},
    {value: 'Parentesco', viewValue: 'Parentesco'},
    {value: 'Património cultural', viewValue: 'Património cultural'},
    {value: 'Património cultural imaterial', viewValue: 'Património cultural imaterial'},
    {value: 'Politica', viewValue: 'Politica'},
    {value: 'Rituais e Tradições', viewValue: 'Rituais e Tradições'},
    {value: 'Rituais religiosos', viewValue: 'Rituais religiosos'},
    {value: 'Tradições orais', viewValue: 'Tradições orais'},
    {value: 'Teatro / performance', viewValue: 'Teatro / performance'}
  ];

  geoAreaControl = new FormControl();
  geoAreaGroups: GeoAreaGroup[] = [
    {
      name: 'Portugal',
      geoArea: [
        {value: 'Viana do Castelo', viewValue: 'Distrito de Viana do Castelo'},
        {value: 'Braga', viewValue: 'Distrito de Braga'},
        {value: 'Porto', viewValue: 'Distrito do Porto'},
        {value: 'Vila Real', viewValue: 'Distrito de Vila Real'},
        {value: 'Bragança', viewValue: 'Distrito de Bragança'},
        {value: 'Viseu', viewValue: ' Distrito de Viseu'},
        {value: 'Guarda', viewValue: 'Distrito da Guarda'},
        {value: 'Aveiro', viewValue: 'Distrito de Aveiro'},
        {value: 'Coimbra', viewValue: 'Distrito de Coimbra'},
        {value: 'Castelo Branco', viewValue: 'Distrito de Castelo Branco'},
        {value: 'Leiria', viewValue: 'Distrito de Leiria'},
        {value: 'Santarém', viewValue: ' Distrito de Santarém'},
        {value: 'Portalegre', viewValue: 'Distrito de Portalegre'},
        {value: 'Lisboa', viewValue: 'Distrito de Lisboa'},
        {value: 'Évora', viewValue: 'Distrito de Évora'},
        {value: 'Setúbal', viewValue: 'Distrito de Setúbal'},
        {value: 'Beja', viewValue: 'Distrito de Beja'},
        {value: 'Faro', viewValue: 'Distrito de Faro'},
        {value: 'Madeira', viewValue: 'Madeira'},
        {value: 'Açores', viewValue: 'Açores'}
      ]
    },
    {
      name: 'Europa',
      geoArea: []
    },
    {
      name: 'Galiza',
      geoArea: []
    },
    {
      name: 'África',
      geoArea: []
    },
    {
      name: 'América do Norte',
      geoArea: []
    },
    {
      name: 'América Central',
      geoArea: []
    },
    {
      name: 'América do Sul',
      geoArea: []
    },
    {
      name: 'CPLP',
      geoArea: []
    },
    {
      name: 'Médio Oriente',
      geoArea: []
    },
    {
      name: 'Ásia',
      geoArea: []
    },
    {
      name: 'Oceânia',
      geoArea: []
    }
  ];

  News: any = [];
  Events: any = [];

  searchForm = new FormGroup({
      title: new FormControl('', [Validators.minLength(4), Validators.maxLength(25)]),
      author: new FormControl('', [Validators.minLength(4), Validators.maxLength(25)]),
      anyTerm: new FormControl('', [Validators.minLength(4), Validators.maxLength(25)]),
      theme: new FormControl(''),
      geoArea: new FormControl('')
    },
    {updateOn: 'blur'});
  value = '';
  value1 = '';
  value2 = '';

  constructor(private api: ApiService, public actRoute: ActivatedRoute, public router: Router) {

  }

  ngOnInit() {
    this.loadHighlightedNews();
    this.loadHighlightedEvents();
  }

  // Get news list
  loadHighlightedNews() {
    return this.api.getNewsHighlighted().subscribe((data: {}) => {
      this.News = data;
    });
  }

  loadHighlightedEvents() {
    return this.api.getEventsHighlighted().subscribe((data: {}) => {
      this.Events = data;
    });
  }

  onClickSubmit(searchForm: FormGroup) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        anyTerm: searchForm.value.anyTerm,
        title: searchForm.value.title,
        author: searchForm.value.author,
        theme: searchForm.value.theme,
        geoArea: searchForm.value.geoArea
      }
    };
    console.log(navigationExtras);
    this.router.navigate(['items-search'], navigationExtras);
  }

  getErrorMessage() {
    return this.searchForm.get('anyTerm').hasError('minlength') ? 'Número mínimo de caracteres 4' :
      this.searchForm.get('anyTerm').hasError('maxlength') ? 'Número máximo de caracteres 25' :
        '';
  }
}
