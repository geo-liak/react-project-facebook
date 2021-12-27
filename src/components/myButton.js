import Button  from 'react-bootstrap/Button';
import { propTypes } from 'react-bootstrap/esm/Image';

export default function MyButton(props) {

    return (
        <Button className="btn success" style={{ border: "red"}}>{props.btnText}</Button>
    )
}