import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { New } from '../models/noticia';
import { Global} from './global';


@Injectable()
export class NewService{
	public url: string;

	constructor(
		private _http: HttpClient
	){
		this.url= Global.url;
	}

	testService(){
		return 'Probando el servicio de Angular';
	}
	saveNew(noticia: New): Observable<any>{
		let params= JSON.stringify(noticia);
		let headers= new HttpHeaders().set('Content-Type','application/json');

		return this._http.post(this.url+'save-new', params, {headers: headers});
	}
	getNews(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.get(this.url+'noticias', {headers:headers});
	
	}
	getNew(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.get(this.url+'noticia/'+id, {headers:headers});
	}
	deleteNew(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.delete(this.url+'noticia/'+id, {headers:headers});

	}

	updateNew(noticia):Observable <any>{
		let params= JSON.stringify(noticia);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.put(this.url+'noticia/'+ noticia._id, params, {headers:headers});
	


	}



}
