import { Country } from './../models/country.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl='http://localhost:9099/locations-management/v1/countries/';

@Injectable({
  providedIn: 'root'
})
 
export class CountryService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Country[]>{
    return this.http.get<Country[]>(baseUrl);
  } 

  get(id:any):Observable<Country>{
    return this.http.get(`${baseUrl}/${id}`);  
}

}