# Vårprojektet

## **Måndag 27/2**

Idag gjorde vi snabbt standard katalogstrukturen samt lade in tre olika css dokument, en för layout, en för typografi och en för färg. Den största delen av lektionen gick åt att fixa med github samt git, då Joel hjälpte oss med detta för lättare fildelning.

## **Tisdag 28/2**

Idag skapade jag allas loggböcker och länkade in våra tre css dokument i index, diskuterade wireframes och sidoupplägg med Joel och Lukas, samt letade alternativ till Discourse. Jag har kollat på Flarum, som är ett bra alternativ ifall hemsidan ska handla om t.ex. någon bok vi läst i svenskan eller energialternativ, eftersom Flarum används för att göra diskussionsrutor i hemsidan.

## **Måndag 6/3**

Idag gjorde jag våran moodboard och började göra color palettes, då jag gjorde 4 stycken som jag ska utveckla nästa gång. Joel fortsatte med wireframes och Lukas var sjuk.

## **Tisdag 7/3**

Idag fortsatte jag med vårat color palette medans joel gjorde färdigt (tror han gjorde färdigt) wireframsen och började smått på våran style guide. Vi bestämde oss för det generella temat som färgerna skulle framge igår, alltså något liknande växtlighet, livrrikhet, innovationsrikhet och grön el. Detta är anledningen varför vi valde temat grönt, samt det gav mig möjligheten att gå in lite djupare på färgerna idag. Jag blev ej helt färdig, men jag har börjat kolla kontrast på våra färger, fastställt färgschemat samt börjat kika på ljusare och mörkare toner av våra färger.

## **Måndag 13/3**

Idag fortsatte jag att kolla litegrann på analysverktyg samt fixa färdigt med färgerna. Jag har bestämt vårat color palette, hittat gradients för alla färger samt kollat hur färgerna ser ut för olika sorters färgblindhet. Jag har märkt att vi t.ex. ej kan sätta våran "yellow green" och "umber" bredvid varann, eftersom hemsidans kontrast då ej duger för färgblinda personer.

## **Tisdag 14/3**

Idag hade jag utvecklingssamtal så jag missade en del av lektionen. Resterande delen jobbade jag med att fastslå våra business objectives, samt hjälpa resten av gruppen med att kolla och väga olika fonts mot varandra.

## **Måndag 20/3**

Idag gjorde jag vårat bootstrap builder dokument, länkade det och började göra våran logotyp. Jag håller på att experimentera med att använda en eldfluga som logga, eftersom dem kan kopplas till både miljö och elektricitet.

## **Tisdag 21/3**

Ingen lektion.

## **Måndag 27/3**

Idag fortsatte jag att göra loggan, som jag nu har kommit på exakt hur den skall vara. Loggan ska bestå av en glödlampa där dem glödande strängarna istället ska vara två växter. Jag har nästan gjort färdigt formen på lampan och därefter återstår växten samt färgläggning.

## **Tisdag 28/3**

idag fortsatte jag fortfarande med loggan, där jag nu har gjort färdigt glödlampan, samt nästan gjort färdigt växten. Jag ska finslipa och bestämma färgerna, sedan är loggan färdig.

## **Måndag 3/4**

Sten sax påse turnering tog hela lektionen

## **Tisdag 4/4**

CSS podcast provet tog hela lektionen

## **Måndag 17/4**

Idag exporterade jag båda versionerna av loggan samt gjorde en ny "bakgrunds-svg" som skall ha en parallax animation. Jag optimerade dessutom alla tre och lade in dem i vår hemsidas mapp.

## **Tisdag 18/4**

Idag jobbade jag med att ändra bakgrunds-svg färgschemat, samt segmenterade den till olika svg filer. Andra delen av lektionen använde jag för att försöka förstå hur olika parallax effekter fungerade, som exempel på codepen och javascript library. Jag märkte i efterhand att segmenteringen ej behövs, så jag tog bort dem.

## **Måndag 24/4**

Idag fixade jag storleken på alla parallax element, eftersom dem alla hade en maskerad och därmed osynlig del som räknades med i background size-cover, på grund av hur jag gjorde dem med clipping tools i inkscape. När man då använde "background-size: cover;" så blev parallax elementen effektivt mindre än hela skärmen, eftersom dem osynliga delarna räknades med. Jag gjorde som sagt därför om elementen denna lektion för att bli av med dem osynliga delarna, så background-size kommer fungera som den skall.

## **Tisdag 25/4**

Engelska NP, ingen webblektion.

## **Måndag 1/5**

1a maj, ledig dag.

## **tisdag 2/5**

Vi har omtänkt hela vårat färgschema, vilket jag började göra idag. Vi vill ha det mer gradient-orienterat, som t.ex. prime gaming ser ut.

## **måndag 8/5**

Idag gjorde jag klart färgschemat samt implementerat det där det skall vara så mycket som jag han.

## **hemma**

Jag och Joel har suttit tillsammans och jobbat väldigt mycket på fritiden, då vi har fixat javascripten på fritiden, löst brytpunkter på t.ex. parallaxen, fixat med besökanalysverktyg, tester med mera. Jag bestämde mig för analysverktyget Tinyanalytics då dem har allt man vill ha som land, enhetsinformation och heatmaps utan att lämna ett märke på hemsidans prestanda. Vid snabbhetstestning så märkte vi att svgn var delen som tog mest prestanda, så vi tog bort den och ersatte den med en bild istället. Detta gjorde att vi kunde ta bort javascripten för mobilen vilket behövdes.

Vi gjorde dessutom om vårat färgschema eftersom vi kände att det hade vandrat bort från orginalidén och känslan som vi hade kopplat till den. Nu är den mycket mer åt "sage-green" hållet, samt använder kontrast på ett mer intuitivt sätt än vad vi gjorde innan. Det var bara snabbhetstester som vi behövde göra större ändringar för, eftersom vi hade accessibility och usability i åtanke när vi gjorde sidan, vilket vi inte hade på samma sätt med speed, eftersom vi ej hade ett lika formade tankar om t.ex. hur stora svg filer var jämfört med webp/png/jpg, hur mycket javascript saktade ner hemsidan och hur optimerad en hemsida behövde vara generellt. Vi har också gjort väldigt många småsaker som att optimera bilder, testa olika bildformat, ändrat widthen så att undersidorna är mer "pappersliknande".

Fram tills sista veckan i projektet har jag och Joel jobbat väldigt mycket hen
