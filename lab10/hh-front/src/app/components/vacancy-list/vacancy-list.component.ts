import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HhService } from '../../services/hh.service';
import { Vacancy } from '../../models/vacancy';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-vacancy-list',
  imports: [CommonModule,RouterModule],
  standalone: true,
  templateUrl: './vacancy-list.component.html',
})
export class VacancyListComponent implements OnInit {
  vacancies: Vacancy[] = [];

  constructor(
    private route: ActivatedRoute,
    private hhService: HhService
  ) {}

  ngOnInit(): void {
    const companyId = Number(this.route.snapshot.paramMap.get('id'));
    this.hhService.getVacancies(companyId).subscribe((data: Vacancy[]) => {
      this.vacancies = data;
    });
  }
}
