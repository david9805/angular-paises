import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  paises!:Country;

  constructor(
    private activatedRoute:ActivatedRoute,
    private paisService:PaisService
    ) 
    { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap(({id})=>this.paisService.getPaisPorCodigo(id)),
      tap(console.log)
    )
    .subscribe(pais => {
      this.paises = pais;
      console.log(this.paises);
    })
    // this.activatedRoute.params
    // .subscribe(({id}) =>{
    //   this.paisService.getPaisPorCodigo(id)
    //   .subscribe(pais=>{
    //     console.log(pais);
    //   });
    // })
  }

}
