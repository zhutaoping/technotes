import { useSelector } from "react-redux";
import { selectAllUsers, useGetUsersQuery } from "../users/usersApiSlice";
import { PulseLoader } from "react-spinners";
import NewNoteForm from "./NewNoteForm";

const NewNote = () => {
	// const users = useSelector(selectAllUsers);

	const { users } = useGetUsersQuery("usersList", {
		selectFromResult: ({ data }) => ({
			users: data?.ids.map((id) => data?.entities[id]),
		}),
	});

	if (!users?.length) return <PulseLoader color={"#fff"} />;

	const content = <NewNoteForm users={users} />;

	return content;
};
export default NewNote;
