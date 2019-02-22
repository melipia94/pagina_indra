import { Component, OnInit } from '@angular/core';
import { New } from '../../models/noticia';
import { NewService } from '../../services/noticia.service';
import { Global } from '../../services/global';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers: [ NewService ]

})
export class PrincipalComponent implements OnInit {
	public noticias: New[];

  constructor(
  	private _noticiaService: NewService

  ) { }

  ngOnInit() {
  	this.getNews();
  }
  getNews(){
  	this._noticiaService.getNews().subscribe(
  		response =>{
  			console.log(response);
  			if(response.noticias){
  				this.noticias=response.noticias;
  			}
  		

  		},
  		error =>{
  			console.log(<any>error);
  		}
  	);
  }

}
