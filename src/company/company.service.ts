import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';
import { authHeaders } from '../auth';

@Injectable()
export class CompanyService {
  constructor(private readonly httpService: HttpService) {}

  createCompany(name: string): Observable<string> {
    const url = 'https://d6757be6f1101.amocrm.ru/api/v4/companies';
    const body: any = [{ name }];

    return this.httpService.post(url, body, { headers: authHeaders }).pipe(
      map(({ data }) => {
        const companies: Array<{ id: string }> = data?._embedded?.companies;

        if (companies.length) {
          return `${companies[0]?.id}`;
        }

        return '-1';
      }),
    );
  }
}
