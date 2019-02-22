import { Component, OnInit } from '@angular/core';
import { New } from '../../models/noticia';
import { NewService } from '../../services/noticia.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css'],
  providers: [ NewService ]
})
export class EliminarComponent implements OnInit {
	public url: string;
	public noticia: New;
  public confirm: boolean;

  constructor(
  	private _noticiaService: NewService,
  	private _router: Router,
  	private _route: ActivatedRoute

  ) { 
  	this.url= Global.url;
    this.confirm= false;

  }

  ngOnInit() {
  	this._route.params.subscribe(params =>{

  		let id= params.id;
  		this.getNew(id);
  	});
  }
  getNew(id){
  	this._noticiaService.getNew(id).subscribe(
  		response =>{
  			
  			this.noticia=response.noticia;
  		

  		},
  		error =>{
  			console.log(<any>error);
  		}
  	);


  }
  setConfirm(confirm){
    this.confirm=confirm;
  }
  deleteNew(id){
      this._noticiaService.deleteNew(id).subscribe(
        response =>{
          if(response.noticia){
            this._router.navigate(['/principal']);

          }
          
        

        },
        error =>{
          console.log(<any>error);
        }
      );


  }

}
