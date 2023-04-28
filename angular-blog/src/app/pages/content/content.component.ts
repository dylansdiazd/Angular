import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  photoCover: string = "https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png"
  @Input()
  cardTitle: string = "Resident Evil 4 Remake Finalmente é lançado!"
  @Input()
  cardDescription: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc arcu tortor, faucibus vitae posuere sed, lacinia id libero. Donec tempor enim sem, ac auctor elit facilisis a. Duis tortor magna, porttitor vitae venenatis in, pulvinar auctor ante. Fusce sit amet tempus nisl, sit amet lobortis lorem. Pellentesque fermentum eu magna sed facilisis. Aliquam porttitor ornare accumsan. Morbi ac malesuada ligula. Integer mollis egestas metus ac euismod. Phasellus elementum, eros et maximus bibendum, libero sapien placerat elit, porta euismod leo diam nec ante."

  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
this.route.paramMap.subscribe( value =>
  console.log(value.get("id")))
  }
}



