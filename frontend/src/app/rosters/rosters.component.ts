import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rosters',
  templateUrl: './rosters.component.html',
  styleUrls: ['./rosters.component.css']
})
export class RostersComponent implements OnInit {

  rosters: any = [
    {
      name: 'Boys Love',
      logoUrl: 'assets/images/BoysLove.png',
      roster: [
        'Aurox Frostheart',
        'Avis Argentea',
        'Dropoutbear',
        'digitalfeeling',
        'p03panda'
      ]
    },
    {
      name: 'Sponsored By Taco Bell',
      logoUrl: 'assets/images/SponsoredbyTacoBell.png',
      roster: [
        'Immortal Lobster',
        'Nemuru',
        'crazysweetpandas',
        'Dermod',
        'ChiaSnax'
      ]
    },
    {
      name: 'Team Supreme Meme',
      logoUrl: 'assets/images/TeamSupremeMeme.png',
      roster: [
        'Luckboy',
        'chillwang',
        'Raskotrug',
        'sopa sopa',
        'oliver2wist'
      ]
    },
    {
      name: '69 Children',
      logoUrl: 'assets/images/69Children.png',
      roster: [
        'not drunk',
        'Emperix',
        'Bahnanas',
        'Captain Javier',
        'Lil Muffin'
      ]
    },
    {
      name: 'Deep Dive',
      logoUrl: 'assets/images/DeepDive.png',
      roster: [
        'hoipolloi4',
        'manpuppet',
        'yobettywhite',
        'Captain Slippers',
        'moonylikeluna'
      ]
    },
    {
      name: 'Los Banditos',
      logoUrl: 'assets/images/LosBanditos.png',
      roster: [
        'tonyiommisg',
        'BearRock',
        'Riot Mikouz',
        'Aichy',
        'noelopez'
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
