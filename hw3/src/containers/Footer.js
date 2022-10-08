import View_btn from '../components/View_btn'
import Clean_btn from '../components/Clean_btn'

const Footer = (note) => {
    console.log('footer', global.todoCnt);
    return (
        <footer className="todo-app__footer">
            <div className="todo-app__total">
                <span className="todo-count">{global.todoCnt}</span>
                left
            </div>
            <View_btn />
            <Clean_btn />
        </footer>
    );
}
 
export default Footer;
