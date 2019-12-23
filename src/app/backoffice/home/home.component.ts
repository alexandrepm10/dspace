import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class BackofficeHomeComponent implements OnInit {

  News: any = [];

  constructor(private api: ApiService,
    public router: Router) {
  }

  ngOnInit() {
    this.loadNews();
  }

  // Get news list
  loadNews() {
    return this.api.getNews().subscribe((data: {}) => {
      this.News = data;
    })
  }

  deleteNews(id) {
    if (window.confirm('Tem a certeza que pretende ELIMINAR?')) {
      this.api.deleteNews(id).subscribe(data => {
        //this.router.navigate(['/admin']);
        this.loadNews();
      });
    }
  }

  changeHighlight(id, status) {
    if (status == 0) {
      if (window.confirm('Tem a certeza que pretende DESTACAR esta notícia na página principal?')) {
        this.api.changeHighlightNews(id, 1).subscribe(data => {
          this.loadNews();
        });
      }
    }
    else {
      if (window.confirm('Tem a certeza que pretende REMOVER esta notícia dos destaques da página principal?')) {
        this.api.changeHighlightNews(id, 0).subscribe(data => {
          this.loadNews();
        });
      }
    }
  }

  logout() {
    this.api.setLoggedInStatus(false);
    this.api.logout().subscribe();
    this.router.navigate(['admin/login']);
    console.log("logout");
  }

}
