import { Component, OnInit } from '@angular/core';
import { New } from '../../models/noticia';
import { NewService } from '../../services/noticia.service';
import { Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: '../crear/crear.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [NewService]
})
export class EditComponent implements OnInit {
	public title: string;
	public noticia: New;
	public status: string;

  constructor(
  	private _noticiaService: NewService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 

  	this.title="Editar noticia";
  

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
  onSubmit(){
    this._noticiaService.updateNew(this.noticia).subscribe(
      response =>{
        if(response.noticia){
            this.status='success';
          
       
          }else{
            this.status='failed';

          }
      

      },
      error =>{
        console.log(<any>error);
      }
    );




 
}
