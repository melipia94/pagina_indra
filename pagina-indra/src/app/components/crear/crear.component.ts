import { Component, OnInit } from '@angular/core';
import { New } from '../../models/noticia';
import { NewService } from '../../services/noticia.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
  providers: [NewService]
})
export class CrearComponent implements OnInit {
	public title: string;
	public noticia: New;
	public status: string;

  constructor(
  	private _noticiaService: NewService
  ) { 
  	this.title="Crear noticia";
  	this.noticia= new New('','','','','');

  }

  ngOnInit() {
  }
  onSubmit(form){
  	console.log(this.noticia);
  	this._noticiaService.saveNew(this.noticia).subscribe(
	      response =>{
	       if(response.noticia){
	          this.status='success';
	          form.reset();
	     
	        }else{
	          this.status='failed';

       		 }
	      },
	      error=>{
	      	console.log(<any>error)

	      }
      );
     
  }

}
