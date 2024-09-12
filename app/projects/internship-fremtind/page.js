import Link from "next/link";
import { siteTitle } from "../../layout";
import { projects } from "../../../data/projects";
import style from "../../../assets/scss/project.module.scss";
import projectNav from "../../../assets/scss/components/project-navigation.module.scss";
import BlockImage from "../../../components/image";
import BlockImageRow from "../../../components/image_row";
import BlockProjects from "../../../components/projects";

import flowchart from "../../../assets/img/projects/internship-fremtind/flowchart.svg";
import functions from "../../../assets/img/projects/internship-fremtind/flowchart-finished.jpg";
import terms from "../../../assets/img/projects/internship-fremtind/begreper.svg";


import imgProcess1 from "../../../assets/img/projects/internship-fremtind/prosess-0.jpg";
import imgProcess0 from "../../../assets/img/projects/internship-fremtind/prosess-1.jpg";
import imgProcess2 from "../../../assets/img/projects/internship-fremtind/prosess-2.jpg";
import imgProcess3 from "../../../assets/img/projects/internship-fremtind/prosess-3.jpg";
import imgProcess4 from "../../../assets/img/projects/internship-fremtind/prosess-5.jpg";
import imgProcess5 from "../../../assets/img/projects/internship-fremtind/prosess-6.jpg";
import imgProcess6 from "../../../assets/img/projects/internship-fremtind/prosess-7.jpg";
import imgProcess7 from "../../../assets/img/projects/internship-fremtind/prosess-8.jpg";
import imgProcess8 from "../../../assets/img/projects/internship-fremtind/prosess-9.jpg";
import imgProcess9 from "../../../assets/img/projects/internship-fremtind/prosess-10.jpg";

import imgResult from "../../../assets/img/projects/internship-fremtind/resultat-bilde-3.jpg";


const projectID = projects[2];
const pageTitle = projectID.short_title;


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
    
    <BlockImage class={style.thumbnail} url={projectID.thumbnail} alt={projectID.title} width="1378" height="1008" priority="true" />
    
    <div className={style.container}>
    
    <div className={style.meta}>
    <ul>
    <li key="project_type"><span className={style.label}>Type of project:</span> {projectID.category}  ({projectID.type.toLocaleLowerCase()})</li>
    <li key="project_location"><span className={style.label}>Location:</span> <a href={projectID.location.url}>{projectID.location.name}</a></li>
    <li key="project_time_frame"><span className={style.label}>Time frame:</span> {projectID.time}</li>
    <li key="project_contributors"><span className={style.label}>Team:</span>
    <ul className={style.contributors}>
    {projectID.team.map((team) => (
      <li key={team} className={style.contributor}>{team}</li>
    ))}
    </ul>
    </li>
    <li key="project_role"><span className={style.label}>My role:</span> {projectID.role}</li>
    <li key="skip_link"><Link href="#result">Skip to result</Link></li>
    </ul>
    </div>
    
    <div className={style.content}>
    <p>This project is a part of a summer internship where I worked in a multi-disiplinary product team with three other students from <a href="https://www.ntnu.edu/" target="_blank" rel="external" title="Norwegian University of Science and Technology">NTNU</a> and <a href="https://www.uio.no/english/index.html" target="_blank" rel="external" title="University of Oslo">UiO</a>. We designed and developed the web application "Product Config Manager" for managing the configuration of Fremtind's insurance products. The application will be used by product owners, functional architects and developers within <a href="https://fremtind.no" target="_blank" rel="external">Fremtind Forsikring</a>.</p>
    
    <p>I was responsible for project management and visual design, while Kaja, my co-designer, was responsible for planning and facilitating design workshops within the product team. Apart from that, we worked closely together throughout the project.</p> 

    <h3>The background 🔎</h3>
     <p>Fremtind is offering a number of insurance products to private customers, and they all have different configurations. Previously, the configurations were "hard coded" into Fremtind's applications, making the data difficult to update. To solve this, Fremtind introduced "Product Config", a database including every insurance product and their properties. Now it was possible for the applications to fetch the product data using API, and changes made in "Product Config" would be automatically synchronized across all the applications.</p>

    <h3>The problem 😐</h3>
    <p>While "Product Config" made it easier to update the product data across applications, it was still difficult to view, understand and edit the product configurations. In order to make changes, the product owner had to open the data in a spreadsheet, which consisted of more than a hundred rows and columns, look for the correct cells, edit their values, then send a screenshot of the changes to the system administrator, who would create a SQL statement based on the changes, and run it in the database.</p>

    <p>The process was time consuming, and with a high risk of human error.</p>

    <h3>The brief 📃</h3>
    <p>We were expected to deliver a web application that fetches the data from "Product Config", making it possible to view the product properties across multiple test environments and make changes. In addition, we were required to use Fremtind's design system <a href="https://jokul.fremtind.no/" target="_blank" rel="external">Jøkul</a>.</p>

    <h3>The process ✏️</h3>
    <p>Our design process has included the entire team, to ensure that we are all working towards the same goal, and share the same insights and understandings. Involving the developers in the early design phase by inviting them to work on the structure with us, also enabled them to start coding early. In the final design phase we did several iterations with user testing and changes in the design, structure and flow.</p>

    <p>I was in charge of the project structure and design process, making sure that we were able to meet the requirements and finish the delivery on time. Additionally, it was important to me that we started our project by sitting down together to talk about how we wanted to work together and clarify teams expectations.</p>
    
    <h4>1. Understanding the problem (week 1)</h4>
    <p>We spent a lot of time trying to understand the problem. A document with requirement specification were provided, which we all read through, while trying to wrap our heads around the terms and their definitions.</p>
    
    <BlockImage url={terms} placeholder="false" alt="Terms and their definitions" />
    
    <h4>2. Analyzing the requirements (week 1)</h4>
    <p>We looked at the list of functions and sorted them by priority. The goal was to have a common understanding of what the most important functions are. That way, we could prioritize to implement those first, and do the other functions if we had more time later.</p> 
    
    <BlockImage url={imgProcess1} alt="Requirements specification" />
    
    <h4>3. Application structure (week 1-2)</h4>
    <p>Kaja and I created 4 use cases based on the prioritized functions. Then Kaja planned and facilitated a design workshop with the rest of the team, where we made flow charts of each use case. First individually for five minutes, then we did a round of show-and-tell, before we combined the flow charts into one for each use case.</p>

     <BlockImage url={imgProcess2} alt="Workshop with flow charts" />
    <BlockImage url={imgProcess0} alt="Workshop with flow charts" />

    <p>The result after the workshop,  </p>

    
    <p>After the workshop, I combined every flow chart into one, visualising the entire application structure.</p>
        
   
    <p>Designerne fasiliterte en intern workshop der vi skulle lage flytdiagrammer basert på eksempler i kravspesifikasjonen med fire oppgaver totalt. Vi arbeidet individuelt med oppgaven i fem minutter, deretter hadde vi en kort presentasjon og diskusjon, før vi laget et felles flytdiagram for oppgaven. Resultatet etter workshop var en oversikt over flyten på de viktigste funksjonene, som utviklerne brukte som utgangspunkt når de satte i gang med utviklingen.</p>
    
   
    <BlockImage url={flowchart} placeholder="false" alt="Flowchart" caption="Flyten ble videreutviklet i løpet av hele designprosessen mens vi gjennom prototyping og testing kom fram til nye og bedre løsninger. " />
    
    <p>Designerne fasiliterte en intern workshop der vi skulle tegnet skisser basert på flytdiagrammene i forrige workshop. Det var seks ulike oppgaver, der vi tegnet individuelt i fem minutter, før vi presenterte for hverandre og hadde en runde med “dot voting” på de elementene vi likte best. Basert på skissene vi tegnet under workshop, fikk utviklerne satt opp sidene som viser produkter og egenskaper.</p>
    
    <BlockImage url={imgProcess3} alt="Workshop with wireframes" />    
    
    <h4>4. Prototyping and user testing (week 3-7)</h4>
    <p>Neste steg for designerne var å bruke skissene fra forrige workshop til å tegne ut ferdige wireframes og teste disse på produkteier.Vi oppdaget raskt at det var smartere å lage wireframes med post-its, for da kunne komponentene flyttes på og gjenbrukes. Resultatet var en papirprototype som var enkel å teste på produkteier og presentere for menorene våre og resten av temaet.</p>
    
    <BlockImageRow>
    <BlockImage url={imgProcess4} alt="Prototyping with post-its" /> 
    <BlockImage url={imgProcess5} alt="Prototyping with post-its" /> 
    </BlockImageRow>
    
    <p>Papirprototypen kombinert med at vi brukte designsystemet Jøkul, gjorde at vi raskt fikk satt opp hovedsidene og de viktigste funksjonene i Figma. Parallelt kunne utviklerne starte med å implementere designet i applikasjonen.</p>
    
    <p>I denne prosjektfasen var det dessverre lite folk på kontoret, men designerne fikk mulighet til å teste prototypen i Figma med en av utvikler-mentorene våre. Under testing fokuserte vi på redigering av enkeltprodukt og redigering av markerte produkter. På forhånd hadde vi laget fire oppgaver.</p>
    
    <BlockImageRow>
    <BlockImage url={imgProcess6} alt="User testing" /> 
    <BlockImage url={imgProcess7} alt="User testing" /> 
    </BlockImageRow>
    
    <h4>5. Development (week 1-7)</h4>
    <p>Parallelt med at designere gjorde iterasjoner med prototyping og testing, hadde utviklerne jobbet med å implementere designet i applikasjonen. Etter hvert var det en del som var ulikt i applikasjonen og prototypen. Det løste vi med en felles “progge session” der designere kom med endringer, og hvis det var noe som var lett å fikse, fikset utviklerne det der og da. Denne metoden gjentok vi to ganger i sluttfasen av prosjektet.</p>
    
    <BlockImageRow>
    <BlockImage url={imgProcess8} alt="Programming" /> 
    <BlockImage url={imgProcess9} alt="Programming" /> 
    </BlockImageRow>
    
    <h3>Løsningsforslag 🖥️</h3>
    <p>Applikasjonen er laget i designsystemet <a href="https://jokul.fremtind.no/" target="_blank" rel="external">Jøkul</a> og er tilgjengelig i lys og mørk fargepalett.</p>
    
    <BlockImage url={functions} alt="Flytdiagram" caption="Selve applikasjonen kan kokes ned til disse funksjonene " /> 
    
    <h4>Oversikt over produkter</h4>
    <p>Hovedsiden i applikasjonen er produktoversikten. Her vises alle produktene til Fremtind, i samme rekkefølge som de er lagt til. Det er mulig å søke, filtrere på produktkategori eller egenskap, se detaljer om hvert produkt, samt markere flere produkter for å redigere eller sammenligne.</p>
    
    <h4>Se detaljer for enkeltprodukt</h4>
    <p>Knappen “se detaljer” på produktoversikten åpner en ny side med detaljer om produktet. Det er mulig å søke etter egenskaper og filtrere på egenskapskategori, og ekspandere hver rad for å se mer informasjon om hver egenskaper. I tillegg er det mulig å både redigere egenskapsverdier og sammenligne verdier på tvers av miljø.</p>
    
    <h4>Redigere egenskaper for enkeltprodukt</h4>
    <p>Trykking på knappen “rediger” på enkeltprodukt, legger til en ny kolonne for hver rad, med felt for å fylle inn ny verdi. Ved å se gammel verdi og ny verdi ved siden av hverandre, er det lett å holde oversikt. Knappen “Generer SQL” åpner et modalvindu med generert SQL-spørring basert på endringene.</p>
    
    <h4>Sammenligne enkeltprodukt på tvers av miljø</h4>
    <p>Knappen “sammenlign i miljø” på enkeltprodukt, åpner en ny side med oversikt over egenskapsverdier på tvers av miljø. Ved ulike egenskapsverdier i miljø, er det mulig å generere en SQL-spørring for synkronisering av verdier på tvers av miljø. Knappen “Synkroniser verdier” åpner et modalvindu for valg av miljø å synkronisere fra.</p>
    
    <h4>Sammenligne markerte produkter</h4>
    <p>Fra produktoversikten er det mulig å markere flere produkter og sammenligne egenskapsverdi. Knappen “sammenlign markerte” åpner en ny side med oversikt over egenskapsverdi for markerte produkter. Det er mulig å filtrere på egenskapskategori, og velge å vise alle egenskaper eller kun det som er ulikt.</p>
    
    <h4>Redigere markerte produkter</h4>
    <p>Knappen “rediger markerte” fra produktoversikten, åpner en ny side med mulighet for å velge egenskaper å redigere og fylle inn nye egenskapsverdi for hvert produkt. Det er også mulig å krysse av “endre for alle produkter” for å få samme egenskapsverdi på alle valgte produkter. Knappen “Generer SQL” vil åpne et modalvindu med generert SQL-spørring basert på endringene.</p>
    
    <h4>Oversikt over egenskaper</h4>
    <p>Applikasjonen har et oppslagsverk med oversikt over alle egenskaper, vist i rekkefølgen de er lagt til. Det er mulig å søke og filtrere på egenskapskategori, endre sortering basert på ID, se detaljer om egenskapen, samt redigere felt for visningsnavn, beskrivelse og kategori.</p>
    
    <h4>Redigere egenskaper</h4>
    <p>På egenskaper er det mulig å gjøre endringer direkte i tabellen, og endringene blir synlig i applikasjonen med én gang. Det er fordi feltene for visningsnavn, kategori og beskrivelse ikke hentes fra Product Config, men blir definert i denne applikasjonen. Funksjonen er nyttig for dynamisk innhenting av nye egenskaper, der feltene for visningsnavn, kategori og beskrivelse vil mangle verdi.</p>
    
    <h3 id="result">Resultat ✅</h3>
    <p>The result is a web application that makes it smoother and safer to maintain the product data, while also giving the product managers a closer relationship to the product.</p>
    
    
    <p>Applikasjonen vi har designet automatiserer prosessen med å hente og oppdatere produktinnstillinger fra fagsystemet. Gjennom en grundig designprosess har vi sikret at verktøyet er brukervennlig og effektivt. Resultatet er en løsning som både er tidsbesparende og minimerer risikoen for feil. </p>
    
    <p>Ved å involbere hele teamet i startfasen av designprosessen, har vi sikret at alle har felles forståelse og jobber mot felles mål. Det har også gjort at utviklerne har kunne starte kodingen mye tidligere, noe som gjorde at vi rakk mye mer enn det som var forventet i løpet av sommeren. Samtidig tilfører utviklerne andre perspektiver i en designprosess.</p>
    
    <p>The product team consisted of students from Norwegian University of Science and Technology and University of Oslo. Our backgrounds were different.</p>
    
    <p>Vi hadde alle i teamet ulik bakgrunn og kompetanse. Vi hadde en god kultur i teamet for å si ifra når vi var uenige med hverandre, og tørre å ta de diskusjonene. Det var lav terskel i teamet for å si ifra når vi var uenige med hverandre, og tørre å ta de diskusjonene. Jeg tror det var veldig viktig for å kunne få det resultatet vi gjorde.</p>
    
    <p>I løpet av prosjektet har jeg lært en hel del om samarbeid, og jeg har blitt mer bevisst på hvordan jeg fremstår når jeg argumenterer for eller mot noe. Jeg har blitt bedre på å articulating my design decisions and making myself understood.</p>
    
    <p>I starten av prosjektet hadde vi en forventningsavklaring for å snakke om hvordan vi liker å jobbe. Det var viktig for å bli kjent med hverandre, og sørge for at alle sine behov ble ivaretatt. Jeg tror også at det bidro til at resultatet ble så bra</p>
    
    <p>Vi har hatt god fremgang i løpet av prosjektet, selv om vi aldri laget en detaljert prosjektplan.</p>
    
    <p>Om leveransen skriver fagansvarlig for HR at det ble "levert en applikasjon som gikk over alle forventinger vi hadde til dette sommerprosjektet.</p>

 
    <p>ikke alltid like lett å komme til enighet med alle i teamet når man har ulike bakgrunner og tanker </p>
       <p>felles forståelse med hyppige workshops</p>
    
    <BlockImage url={imgResult} alt="The result" /> 
    </div>
    </div>
    </article>
    
    <h2>Keep looking 👀</h2>
    <div className={projectNav.container}>
    {projects.filter(project => project.id != '2').toReversed().map((project) => (
      <BlockProjects id={project.id} slug={project.slug} title={project.title} category={project.category} location={project.location.name} thumbnail={project.thumbnail} />
    ))}
    </div>
    </>
  )
}