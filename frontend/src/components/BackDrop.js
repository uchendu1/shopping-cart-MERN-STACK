import './BackDrop.css';
const BackDrop = ({show, click}) => {
    return show && (
        <div className='backdrop' onClick={click}>
           am a backdrop 
        </div>
    );
}

export default BackDrop;