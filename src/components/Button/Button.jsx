import s from './Button.module.css'

export const Btn = ({ onClickBtn }) => {
    return (
         
        <button className={s.Button} type="button" onClick={onClickBtn}>
        Load more
    </button>
   
    )
   
    

}