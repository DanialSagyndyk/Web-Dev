import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/company';
import { HhService } from '../../services/hh.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-list',
  imports: [CommonModule,RouterModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit {
  companies:Company[]=[];
  constructor(private HhService:HhService,private router:Router){}
  ngOnInit():void{
    this.HhService.getCompanies().subscribe((data)=>{
      this.companies=data;
    });
  



  }
  openVacancies(companyId:number):void{
    this.router.navigate([`/companies/${companyId}/vacancies`]);  
  }


}
