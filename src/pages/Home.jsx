import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Contact from "../pages/Contact.jsx";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<>
			<div className="container" >
				<Contact/>
				
			</div>
		</>

	);
};