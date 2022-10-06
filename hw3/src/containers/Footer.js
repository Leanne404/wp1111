import View_btn from '../components/View_btn'
import Clean_btn from '../components/Clean_btn'

const Footer = () => {
    return (  
        <footer className="todo-app__footer">
            <div className="todo-app__total">
                <span className="todo-count">2</span>
                left
            </div>
            <View_btn />
            <Clean_btn />
        </footer>
    );
}
 
export default Footer;
