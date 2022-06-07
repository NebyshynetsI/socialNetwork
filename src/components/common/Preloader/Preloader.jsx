import style from './Preloader.module.css';
import preloader from '../../../assets/images/1.gif';

let Preloader = (props) => {
    return (<div style={ {backgroundColor: 'blue'}}>
    <img src={preloader} />
</div>
    )
}

export default Preloader;