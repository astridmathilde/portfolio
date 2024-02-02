import styles from '../../assets/scss/components/project/meta.module.scss';

export default function Project(project) {
  return (
    <>
    <div className={styles.meta}>
    <ul>
    {project.stakeholder && project.stakeholderURL ? (
      <li className={styles.stakeholder}><span className={styles.label}>Stakeholder:</span> <a href={project.stakeholderURL} rel="external" target="_blank">{project.stakeholder}</a></li>
      ) : (
        null
        )}
        
        {project.location && project.locationURL ? (
          <li className={styles.location}><span className={styles.label}>Location:</span> <a href={project.locationURL} rel="external" target="_blank">{project.location}</a></li>
          ) : (
            null
            )}
            
            {project.contributors ? (
              <>
              <span className={styles.label}>Contributors: </span> 
                <ul className={styles.contributors}>
              {project.contributors.map((contributorName) => (
                <li key={contributorName}>{contributorName}</li>
                ))}
                </ul>
                </>
                ) : (
                  null
                  )}
                  
                  {project.time ? (
                    <li className={styles.period}><span className={styles.label}>Period:</span> {project.time}</li>
                    ) : (
                      null
                      )}
    
                          {project.tools ? (
                            <>
                            <span className={styles.label}>Tools: </span>
                            <ul className={styles.tools}>
                            {project.tools.map((tool) => (
                              <li key={tool}>{tool}</li>
                              ))}
                              </ul>
                              </>
                              ) : (
                                null
                                )}
                                
                                </ul>
                                </div>
                                </>
                                )
                              }
                              