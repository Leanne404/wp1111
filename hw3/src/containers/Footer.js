import Buttons from '../components/Buttons'

const Footer = () => {
    return (
        <footer className="todo-app__footer" id = "todo-footer">
            <div className="todo-app__total">
                <p className="todo-count"></p>
            </div>
            <Buttons />
        </footer>
    );
}
 
export default Footer;
