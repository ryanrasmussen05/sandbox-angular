import { Component, OnInit } from '@angular/core';

import { HeroService } from "../hero/hero.service";
import { Hero } from "../hero/hero";
import { Router } from "@angular/router";

@Component({
    selector: 'rr-my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: [ './heroes.component.scss' ]
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private router: Router,
        private heroService: HeroService) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/hero/detail', this.selectedHero.id]);
    }
}