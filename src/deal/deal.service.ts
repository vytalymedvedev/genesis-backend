import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { authHeaders, postHeaders } from '../headers';
import { AUTH_URL, BASE_API_URL } from '../urls';

@Injectable()
export class DealService {
  constructor(private readonly httpService: HttpService) {}

  createDeal(name: string): Observable<unknown> {
    return this.httpService
      .get(AUTH_URL, {
        headers: authHeaders(),
      })
      .pipe(
        switchMap(({ data }) => {
          const url = `${BASE_API_URL}api/v4/leads`;
          const body: any = [{ name }];

          return this.httpService
            .post(url, body, { headers: postHeaders(data?.access_token) })
            .pipe(
              map(({ data }) => {
                const leads: Array<{ id: string }> = data?._embedded?.leads;

                return leads[0]?.id;
              }),
            );
        }),
      );
  }
}
