import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/company';
import { Vacancy } from '../models/vacancy';


@Injectable({
  providedIn: 'root'
})
export class HhService {
  BASE_URL='http://localhost:8000/api';


  constructor(private client:HttpClient) {}
    getCompanies():Observable<Company[]>{
      return this.client.get<Company[]>(`${this.BASE_URL}/companies/`);
    }

    getVacancies(companyId:number):Observable<Vacancy[]>{
      return this.client.get<Vacancy[]>(`${this.BASE_URL}/companies/${companyId}/vacancies/`);
    }
   }

