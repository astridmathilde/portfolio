import Link from "next/link";
import { siteTitle } from "../../layout";
import { projects } from "../../../data/projects";
import style from "../../../assets/scss/project.module.scss";
import projectNav from "../../../assets/scss/components/project-navigation.module.scss";
import BlockImage from "../../../components/image";
import BlockProjects from "../../../components/projects";

const pageTitle = 'Sommerinternship hos Fremtind';
const projectID = projects[2];

export const metadata = {
  title: pageTitle + ' – ' + siteTitle
}


export default function fremtind() {
  return (
    <>
    <article className={style.project}>
    <header className={style.header}>
    <h2>{projectID.title}</h2>
    </header>
    
    <BlockImage class={style.thumbnail} url={projectID.thumbnail} alt={projectID.title} width="1378" height="1008" />
    
    <div className={style.container}>
    
    <div className={style.meta}>
    <ul>
    <li key="project_type"><span className={style.label}>Type of project:</span> {projectID.type}</li>
    <li key="project_location"><span className={style.label}>Location:</span> <a href={projectID.location.url}>{projectID.location.name}</a></li>
    <li key="project_time_frame"><span className={style.label}>Time frame:</span> {projectID.time}</li>
    <li key="project_contributors"><span className={style.label}>Contributors:</span>
    <ul className={style.contributors}>
    {projectID.team.map((team) => (
      <li key={team} className={style.contributor}>{team}</li>
    ))}
    </ul>
    </li>
    </ul>
    </div>
    
    <div className={style.content}>
    <p>Product Config Manager er en ny, intern applikasjon for å se, forstå og endre oppsettet til et produkt. Applikasjonen skal gjøre det smidigere og tryggere å vedlikeholde dataen, og samtidig gi produkteier et tettere forhold til oppsettet. Det var forventet at applikasjonen skulle vise produktegenskaper, støtte endringer, støtte visning av produkter på tvers av testmiljøoer, og bruke designsystemet <a href="https://jokul.fremtind.no/" target="_blank" rel="external">Jøkul</a></p>
    
    <p>Applikasjonen automatiserer prosessen med å hente og oppdatere produktinnstillinger fra fagsystemet, noe som tidligere ble gjort manuelt med store regneark og høy feilrisiko.</p>
    
    <h3>Prosess</h3>
    <p>Vi har hatt en designprosess som i stor grad har involvert hele teamet, for å sikre felles forståelse og eierskap til prosjektet. Det at utviklerne var med på arbeidet med struktur og flyt, gjorde at de kunne starte koding tidlig. I sluttfasen hadde vi flere iterasjoner med testing og endringer i design, struktur og flyt.</p>
    
    <h4>1. Forstå oppgaven</h4>
    <p>I starten brukte vi mye tid på å forstå oppgaven. Vi leste gjennom kravspesifikasjonen og fikk oversikt over alle begrepene.</p>
    
    <h4>2. Analyse av kravspesifikasjon</h4>
    <p>Da alle hadde lest kravspesifikasjonen, fasiliterte designerne en workshop der målet var å få en felles forståelse for hva som er de viktigste funksjonene i applikasjonen. Vi sorterte funksjonene etter (høy prioritet), “bør” (middels prioritet) og “kan” (lav prioritet).</p>
    
    <h4>3. Struktur og flyt</h4>
    <h5>Flytdiagrammer</h5>
    <p>Designerne fasiliterte en intern workshop der vi skulle lage flytdiagrammer basert på eksempler i kravspesifikasjonen med fire oppgaver totalt. Vi arbeidet individuelt med oppgaven i fem minutter, deretter hadde vi en kort presentasjon og diskusjon, før vi laget et felles flytdiagram for oppgaven.</p>
    
    <p>Resultatet etter workshop var en oversikt over flyten på de viktigste funksjonene, som utviklerne brukte som utgangspunkt når de satte i gang med utviklingen.</p>
    
    <h5>Wireframes</h5>
    <p>Designerne fasiliterte en intern workshop der vi skulle tegnet skisser basert på flytdiagrammene i forrige workshop. Det var seks ulike oppgaver, der vi tegnet individuelt i fem minutter, før vi presenterte for hverandre og hadde en runde med “dot voting” på de elementene vi likte best.</p>
    
    <p>Basert på skissene vi tegnet under workshop, fikk utviklerne satt opp sidene som viser produkter og egenskaper.</p>
    
    <h4>4. Prototyping og testing</h4>
    <h5>Papirprototyping med post-its</h5>
    <p>Neste steg for designerne var å bruke skissene fra forrige workshop til å tegne ut ferdige wireframes og teste disse på produkteier.Vi oppdaget raskt at det var smartere å lage wireframes med post-its, for da kunne komponentene flyttes på og gjenbrukes.Resultatet var en papirprototype som var enkel å teste på produkteier og presentere for menorene våre og resten av temaet.</p>
    
    <h5>Oppsett i Figma</h5>
    <p>Papirprototypen kombinert med at vi brukte designsystemet Jøkul, gjorde at vi raskt fikk satt opp hovedsidene og de viktigste funksjonene i Figma. Parallelt kunne utviklerne starte med å implementere designet i applikasjonen.</p>
    
    <h5>Brukertesting</h5>
    <p>I denne prosjektfasen var det dessverre lite folk på kontoret, men designerne fikk mulighet til å teste prototypen i Figma med en av utvikler-mentorene våre. Under testing fokuserte vi på redigering av enkeltprodukt og redigering av markerte produkter. På forhånd hadde vi laget fire oppgaver.</p>
    
    <h4>5. Utvikling</h4>
    <p>Parallelt med at designere gjorde iterasjoner med prototyping og testing, hadde utviklerne jobbet med å implementere designet i applikasjonen. Etter hvert var det en del som var ulikt i applikasjonen og prototypen. Det løste vi med en felles “progge session” der designere kom med endringer, og hvis det var noe som var lett å fikse, fikset utviklerne det der og da. Denne metoden gjentok vi to ganger i sluttfasen av prosjektet.</p>
    
    <h3>Løsningsforslag</h3>
    <p>Applikasjonen er laget i designsystemet <a href="https://jokul.fremtind.no/" target="_blank" rel="external">Jøkul</a> og er tilgjengelig i lys og mørk fargepalett.</p>
    
    <h5>Oversikt over produkter</h5>
    <p>Hovedsiden i applikasjonen er produktoversikten. Her vises alle produktene til Fremtind, i samme rekkefølge som de er lagt til. Det er mulig å søke, filtrere på produktkategori eller egenskap, se detaljer om hvert produkt, samt markere flere produkter for å redigere eller sammenligne.</p>
    
    <h5>Se detaljer for enkeltprodukt</h5>
    <p>Knappen “se detaljer” på produktoversikten åpner en ny side med detaljer om produktet. Det er mulig å søke etter egenskaper og filtrere på egenskapskategori, og ekspandere hver rad for å se mer informasjon om hver egenskaper. I tillegg er det mulig å både redigere egenskapsverdier og sammenligne verdier på tvers av miljø.</p>
    
    <h5>Redigere egenskaper for enkeltprodukt</h5>
    <p>Trykking på knappen “rediger” på enkeltprodukt, legger til en ny kolonne for hver rad, med felt for å fylle inn ny verdi. Ved å se gammel verdi og ny verdi ved siden av hverandre, er det lett å holde oversikt. Knappen “Generer SQL” åpner et modalvindu med generert SQL-spørring basert på endringene.</p>
    
    <h5>Sammenligne enkeltprodukt på tvers av miljø</h5>
    <p>Knappen “sammenlign i miljø” på enkeltprodukt, åpner en ny side med oversikt over egenskapsverdier på tvers av miljø. Ved ulike egenskapsverdier i miljø, er det mulig å generere en SQL-spørring for synkronisering av verdier på tvers av miljø. Knappen “Synkroniser verdier” åpner et modalvindu for valg av miljø å synkronisere fra.</p>
    
    <h5>Sammenligne markerte produkter</h5>
    <p>Fra produktoversikten er det mulig å markere flere produkter og sammenligne egenskapsverdi. Knappen “sammenlign markerte” åpner en ny side med oversikt over egenskapsverdi for markerte produkter. Det er mulig å filtrere på egenskapskategori, og velge å vise alle egenskaper eller kun det som er ulikt.</p>
    
    <h5>Redigere markerte produkter</h5>
    <p>Knappen “rediger markerte” fra produktoversikten, åpner en ny side med mulighet for å velge egenskaper å redigere og fylle inn nye egenskapsverdi for hvert produkt. Det er også mulig å krysse av “endre for alle produkter” for å få samme egenskapsverdi på alle valgte produkter. Knappen “Generer SQL” vil åpne et modalvindu med generert SQL-spørring basert på endringene.</p>
    
    <h5>Oversikt over egenskaper</h5>
    <p>Applikasjonen har et oppslagsverk med oversikt over alle egenskaper, vist i rekkefølgen de er lagt til. Det er mulig å søke og filtrere på egenskapskategori, endre sortering basert på ID, se detaljer om egenskapen, samt redigere felt for visningsnavn, beskrivelse og kategori.</p>
    
    <h5>Redigere egenskaper</h5>
    <p>På egenskaper er det mulig å gjøre endringer direkte i tabellen, og endringene blir synlig i applikasjonen med én gang. Det er fordi feltene for visningsnavn, kategori og beskrivelse ikke hentes fra Product Config, men blir definert i denne applikasjonen. Funksjonen er nyttig for dynamisk innhenting av nye egenskaper, der feltene for visningsnavn, kategori og beskrivelse vil mangle verdi.</p>
    
    <h3>Resultat</h3>
    <p></p>
    </div>
    </div>
    </article>
    
    <h2>Keep looking 👀</h2>
    <div className={projectNav.container}>
    {projects.filter(project => project.id != '2').map((project) => (
      <BlockProjects id={project.id} slug={project.slug} title={project.title} category={project.category} location={project.location.name} thumbnail={project.thumbnail} />
    ))}
    </div>
    </>
  )
}