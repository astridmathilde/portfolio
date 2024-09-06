import { siteTitle } from "../layout";
import BlockIcon from "../../components/icon";
import BlockRow from "../../components/row";
import BlockColumn from "../../components/column";
import BlockResumee from "../../components/resumee";
import { experience, education, skills, achievements } from "../../data/resumee";

const pageTitle = 'My resumee';

export const metadata = {
  title: pageTitle + ' – ' + siteTitle,
  description: 'I was born in April 1998 (currently 26 🎉) and I have 6 years experience in web design and coding after working in several design agencies in Harstad, Tromsø and Oslo. In August 2021, I started doing a five year integrated master in design at The Oslo School of Architecture and Design.'
}

export default function Resumee() {
  return (
    <>
    <h2>My resumee <BlockIcon>📄</BlockIcon></h2>
    <p>I was born in April 1998 (currently 26 <BlockIcon>🎉</BlockIcon>) and I have 6 years experience in web design and coding after working in several design agencies in Harstad, Tromsø and Oslo. In August 2021, I started doing a five year integrated master in design at <a href="https://aho.no" target="_blank" rel="external">The Oslo School of Architecture and Design</a>.</p>
    
    <h3>Work experience <BlockIcon>👩🏻‍💻</BlockIcon></h3>
    {experience.map((experience) => (
      <BlockResumee key={experience.id} position={experience.position} locationUrl={experience.location.url} locationName={experience.location.name} description={experience.description} time={experience.time} />
      ))}
      
      <h3>Education <BlockIcon>👩🏻‍🎓</BlockIcon></h3>
      {education.map((education) => (
        <BlockResumee id={education.id} position={education.position} locationUrl={education.location.url} locationName={education.location.name} description={education.description} time={education.time} />
        ))}
        
        <BlockRow>
        {skills.map((skills) => (
          <BlockColumn key={skills.title}>
          <h3>{skills.title}</h3>
          <ul>
          {skills.keywords.map((keyword) => (
            <li key={keyword}>{keyword}</li>
            ))}
            </ul>
            </BlockColumn>
            ))}
            </BlockRow>
            
            <h3>Achievements <BlockIcon>🏆</BlockIcon></h3>
            {achievements.map((achievement) => (
              <article key={achievement.id}>
              <h4>{achievement.title}, <a href={achievement.location.url}>{achievement.location.name}</a> ({achievement.year})</h4>
              <p>{achievement.description}</p>
              </article>
              ))}
              
              </>
              )
            }