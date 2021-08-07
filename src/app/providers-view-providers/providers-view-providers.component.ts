import { Component, OnInit } from '@angular/core';
import { FlowerService } from './flower.service';
import { AnimalService } from './animal.service';

@Component({
  selector: 'app-providers-view-providers',
  templateUrl: './providers-view-providers.component.html',
  styleUrls: ['./providers-view-providers.component.css'],
  viewProviders: [{ provide: AnimalService, useValue: { emoji: '🦔' } }]
})
export class ProvidersViewProvidersComponent implements OnInit {

  constructor(public flower: FlowerService, public animal: AnimalService) { }

  ngOnInit(): void {
  }

}

// When using @Host() together with @SkipSelf() in
// child.component.ts for the AnimalService, add the
// following viewProviders array to the @Component metadata:

// viewProviders: [{ provide: AnimalService, useValue: { emoji: '🦔' } }]

// So, the entire @ChildComponent() decorator and its
// metadata should be as follows:

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: [ './app.component.css' ],
//   viewProviders: [{ provide: AnimalService, useValue: { emoji: '🦔' } }]
// })
