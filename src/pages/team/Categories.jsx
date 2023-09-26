import { Text } from "../../containers/Languages"

const Categories = () => {
    return (
        <ul className="categories grey d-flex align-items-center border border-1 rounded-3 justify-content-between m-5 gap-1">
            <li className="active rounded-3 p-3 m-0 flex-grow-1" role="button" id="All"><Text tid={"team.categories.all"} /></li>
            <li className="rounded-3 p-3 m-0 flex-grow-1" role="button" id="Managers"><Text tid={"team.categories.managers"} /></li>
            <li className="rounded-3 p-3 m-0 flex-grow-1" role="button" id="UI-UX"><Text tid={"team.categories.ui-ux"} /></li>
            <li className="rounded-3 p-3 m-0 flex-grow-1" role="button" id="Mobile-Developer"><Text tid={"team.categories.mobile-developer"} /></li>
            <li className="rounded-3 p-3 m-0 flex-grow-1" role="button" id="Web-Developer"><Text tid={"team.categories.web-developer"} /></li>
            <li className="rounded-3 p-3 m-0 flex-grow-1" role="button" id="Non-Technical"><Text tid={"team.categories.non-technical"} /></li>
            <li className="rounded-3 p-3 m-0 flex-grow-1" role="button" id="Others"><Text tid={"team.categories.others"} /></li>
        </ul>
    )
}

export default Categories