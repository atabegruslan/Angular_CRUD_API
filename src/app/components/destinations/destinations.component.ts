import { Component, OnInit } from '@angular/core';
import { Destination } from 'src/app/models/destination.model';
import { DestinationService } from 'src/app/services/destination.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  destinations?: Destination[];

  constructor(private destinationService: DestinationService) { }

  ngOnInit(): void {
    this.retrieveDestinations();
  }

  retrieveDestinations(): void {
    this.destinationService.getAll()
      .subscribe(
        data => {
          this.destinations = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
