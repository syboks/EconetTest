import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../models/country.model';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  currentCountry:Country={
    name:'',
    status:'',
    active:false
  };
  message='';
  
  constructor(
    private countryService :CountryService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.message='';
    this.getCountry(this.route.snapshot.params.id);
  }
  getCountry(id: string) :void{
    this.countryService.get(id)
    .subscribe(
      data=>{
        this.currentCountry=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }

 

}