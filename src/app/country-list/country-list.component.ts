import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../models/country.model';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries?:Country[];
  currentCountry:Country={};
  currentIndex=-1;
  name=''; 

  constructor(private router: Router, private countryService: CountryService) { }

  ngOnInit(): void {
    this.retrieveCountries();
  }
  
  retrieveCountries():void {
    this.countryService.getAll()
    .subscribe(
      data=>{
        this.countries=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }

  refreshList():void {
    this.retrieveCountries();
    this.currentCountry={};
    this.currentIndex=-1;
  }

  setActiveCountry(country: Country,index:number):void{
    this.currentCountry=country;
    this.currentIndex=index;
  }

}
