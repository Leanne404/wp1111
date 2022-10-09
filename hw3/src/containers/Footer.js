import View_btn from '../components/View_btn'
import Clean_btn from '../components/Clean_btn'

const Footer = (note) => {
    console.log('footer');
    console.log('note_footer',note)
    return (
        <footer className="todo-app__footer">
            <div className="todo-app__total">
                <p className="todo-count">{global.todoCnt + "left"}</p>
            </div>
            <View_btn />
            <Clean_btn />
        </footer>
    );
}
 
export default Footer;
