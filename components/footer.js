import styles from '../styles/footer.module.css'

export default function Footer() {
  const github = 'mwesterby';
  const linkedin = 'michael-westerby';
  const medium = '@michael.westerby';
  
  const spacer = " • "

  return (
      <footer className={styles.footer}>
        <a href={`https://github.com/${github}`} target="_blank">GitHub</a>{spacer}
        <a href={`https://www.linkedin.com/in/${linkedin}`} target="_blank">LinkedIn</a>{spacer}
        <a href={`https://medium.com/${medium}`} target="_blank">Medium</a>{spacer}
        <a href={`#`} target="_blank">💩</a>
      </footer>
  )
}