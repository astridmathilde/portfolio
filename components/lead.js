import utils from '../assets/scss/utils.module.scss';

export default function lead({ children }) {
  return (
    <>
    <p className={utils.lead}>{ children }</p>
    </>
  )
}