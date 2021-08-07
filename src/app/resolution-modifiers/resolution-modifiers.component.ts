import { Component, OnInit } from '@angular/core';
import { FlowerService } from '../providers-view-providers/flower.service';
import { LeafService } from './leaf.service';

@Component({
  selector: 'app-resolution-modifiers',
  templateUrl: './resolution-modifiers.component.html',
  styleUrls: ['./resolution-modifiers.component.css']
})
export class ResolutionModifiersComponent implements OnInit {

  name = 'Angular';
  constructor(public flower: FlowerService, public leaf: LeafService) {}

  ngOnInit(): void {
  }

}
