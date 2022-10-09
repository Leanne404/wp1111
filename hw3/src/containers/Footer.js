import Buttons from '../components/Buttons'

const Footer = (note) => {
    console.log('footer');
    console.log('note_footer',note)
    return (
        <footer className="todo-app__footer">
            <div className="todo-app__total">
                <p className="todo-count">{global.todoCnt + "left"}</p>
            </div>
            <Buttons />
        </footer>
    );
}
 
export default Footer;
