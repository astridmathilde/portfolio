import style from "../assets/scss/components/resumee.module.scss";

export default function BlockResumee(entry) {
  return (
<>
  <article key={entry.id} className={style.entry}>
   <header className={style.header}>
      <h3 className={style.position}>{entry.position} @ <a href={entry.locationUrl}>{entry.locationName}</a></h3>
      <p className={style.description} dangerouslySetInnerHTML={{ __html: entry.description }} />
      </header>
      <p className={style.time}>{entry.time}</p>
</article>
</>
  );
}