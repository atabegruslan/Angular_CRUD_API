import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Destination } from '../models/destination.model';

const baseUrl = 'https://localhost:44396/Api/Destinations/AllDestinations';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Destination[]> {
    return this.http.get<Destination[]>(baseUrl);
  }
}
