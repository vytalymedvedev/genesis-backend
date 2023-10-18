import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { authHeaders, postHeaders } from '../headers';
import { AUTH_URL, BASE_API_URL } from '../urls';

@Injectable()
export class CompanyService {
  constructor(private readonly httpService: HttpService) {}

  createCompany(name: string): Observable<unknown> {
    return this.httpService
      .get(AUTH_URL, {
        headers: authHeaders(),
      })
      .pipe(
        switchMap(({ data }) => {
          const url = `${BASE_API_URL}api/v4/companies`;
          const body: any = [{ name }];

          return this.httpService
            .post(url, body, { headers: postHeaders(data?.access_token) })
            .pipe(
              map(({ data }) => {
                const companies: Array<{ id: string }> =
                  data?._embedded?.companies;

                return companies[0]?.id;
              }),
            );
        }),
      );
  }
}
