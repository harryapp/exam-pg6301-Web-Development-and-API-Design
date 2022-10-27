# PG6301 eksamen - chat app

## Tips

* Bruk versjoner av alle dependencies som vi brukte på forelesningene. Det skjer hele tiden endringer i JavaScript-land og noen ganger vil siste versjon oppføre seg forskjellig - ikke kast bort verdifull eksamenstid. Du kan kopiere package.json fra innlevering eller en øving
* Spesielt: React 18 kom i løpet av semesteret. Alt vi har vist er på React 17. Kjør på React 17 nå med mindre du har brukt en del tid på versjon 18 den siste måneden. Det er vesentlige problemer!
* Start med å løse det kritiske: Deployment til Heroku
* Ikke bli sittende med ting du ikke får til mens det er enklere ting du kunne ha gjort. Spesielt tester har overraskende mye vrient med seg. Legg det til siden og løs andre ting om du har problemer
* Les de funksjonelle kravene grundig og test at løsningen din oppfyller dem
* Les læringsmålene beskrevet i eksamensteksten grundig og sjekk at løsningen din demonstrere at du behersker disse

Dette er versjonene vi brukte under forelesningene om som er validert som ok:

```
"jest": "^27.5.1",
"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-router-dom": "^6.2.2"
```


## Egenutfylling av funksjonelle krav

* [x] Anonyme brukere skal ikke kunne se chatloggen, men skal kunne logge seg inn
* [x] Brukere kan logge seg inn. Det anbefales at du implementerer at brukerne logger se inn med Google, men andre mekanismer er også akseptabelt
* [x] En bruker som er logget inn kan se på sin profilside (userinfo fra Google)
* [x] Innloggede brukere skal kunne sende chatmeldinge
* [x] Meldinger som sendes inn skal lagres i Mongodb
* [x] Innloggede brukere skal kunne se chatmeldinger umiddelbart. Bruk websockets for å hente oppdateringer
* [x] Chatmeldinger skal inneholde navnet på brukeren som skrev dem. Navnet skal hentes fra identity provider (Google, Active Directory)
* [x] Når bruker logger seg inn skal websiden hente eksisterende meldinger
* [ ] Ekstrapoeng - kan kompensere for andre mangler: Implementer flere chatrom der brukeren kan velge hvilket chatrom de skal se
* [x] Ekstrapoeng - kan kompensere for andre mangler: Brukeren kan legge inn navn og bio på sin brukerprofil og brukere kan se andres brukerprofil
* [x] Brukere skal forbli logget inn når de refresher websiden
* [ ] Alle feil fra serves skal presenteres til bruker på en pen måte, med mulighet for brukeren til å prøve igjen

## Egenutfylling av tekniske krav

* [x] Oppsett av package.json, parcel, express, prettier
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [x] React Router
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [x] Express app
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [x] Kommunikasjon mellom frontend (React) og backend (Express)
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [x] Deployment til Heroku
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [x] Bruk av MongoDB
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [x] OpenID Connect
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [x] Web Sockets
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [ ] Jest med dokumentert testdekning
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
 
