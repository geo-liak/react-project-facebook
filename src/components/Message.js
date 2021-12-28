import "../css/App.css";

export default function Message(props) {
	return (
		<>
			{props.status === "success" ? (
				<h6 className='msgSuccess text-center'>{props.message}</h6>
			) : (
				<h6 className='msgFail text-center'>{props.message}</h6>
			)}
		</>
	);
}
