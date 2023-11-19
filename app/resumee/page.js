  import { siteTitle } from "../layout";
  
  const pageTitle = 'My resumee';

  export const metadata = {
    title: pageTitle + ' – ' + siteTitle,
    description: 'Heia! I am from Northern Norway and I have always been passionate about design and coding.',
  }
  
  export default function Resumee() {
    return (
      <>
      <h2>{ pageTitle }</h2>
      <h3>🎓 Education</h3>
      <h4>Master of Design (5 years), The Oslo School of Architecture and
      Design</h4>
      <p class="has-small-font-size">August 2021–</p>
      
      <h4>Craft Certificate in Digital Media Design, Chili Harstad AS</h4>
      <p class="has-small-font-size">August 2016–July 2018</p>
      
      <h4>Media and Communication, Bardufoss videregående skole</h4>
      <p class="has-small-font-size">August 2014–July 2016</p>
      
      <h3>💼 Experience</h3>
      <h4>Student Assistant, Ocean Industries Concept Lab (part-time)</h4>
      <p class="has-small-font-size">August 2023–</p>
      
      <h4>Interaction Designer, SEAM AS (summer internship)</h4>
      <p class="has-small-font-size">June 2023–August 2023</p>
      
      <h4>Interaction Designer, SEAM AS (part-time)</h4>
      <p class="has-small-font-size">February 2023–June 2023</p>
      
      <h4>Designer/Developer, Big Fish AS (summer internship)</h4>
      <p class="has-small-font-size">June 2022–August 2022</p>
      
      <h4>Designer/Developer, Big Fish AS (part-time)</h4>
      <p class="has-small-font-size">October 2021–June 2022</p>
      
      <h4>Designer/Developer, Røst Kommunikasjon AS</h4>
      <p class="has-small-font-size">March 2019–Oktober 2021</p>
      
      <h4>Developer, Gnist Design AS (temporary work)</h4>
      <p class="has-small-font-size">July 2018–March 2019</p>
      
      <h4>Equine Photographer, Self-Employed</h4>
      <p class="has-small-font-size">2016–2020</p>
      
      <h4>Graphic Design Intern, UiT – The Arctic University of Norway</h4>
      <p class="has-small-font-size">March 2016–July 2016</p>
      
      
      <h3>✏️ Design skills</h3>
      <ul>
      <li>User Research</li>
      <li>Service Mapping</li>
      <li>Flowcharts</li>
      <li>Wireframing</li>
      <li>Prototyping</li>
      <li>User Testing</li>
      </ul>
      
      <h3>👩🏻‍💻 Coding skills</h3>
      <ul>
      <li>HTML5</li>
      <li>CSS3/SCSS</li>
      <li>PHP</li>
      <li>Javascript</li>
      <li>React</li>
      </ul>
      
      <h3>💻 Software</h3>
      <ul>
      <li>Adobe Creative Cloud</li>
      <li>Figma</li>
      <li>Sketch</li>
      <li>Blender</li>
      <li>Notion</li>
      </ul>
      
      <h3>🏆 Achievements</h3>
      <h4>Prize for sustainability, AHO WORKS AWARDS (2022)</h4>
      <p class="has-small-font-size">As a board member of the student organization KAHOS.</p>
      
      <h4>Show of Fame, The Oslo School of Architecture and Design (2022)</h4>
      <p class="has-small-font-size">With an interaction design project for the Norwegian Museum of Science and
      Technology.</p>
      </>
      );
    }