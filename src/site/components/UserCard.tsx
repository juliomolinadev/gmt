import { useTypedSelector } from "../../hooks";

export const UserCard = ({
	isExpanded,
	large = false,
}: {
	isExpanded: boolean;
	large: boolean;
}) => {
	const { photoURL, displayName } = useTypedSelector((state) => state.auth);

	return (
		<div className="userCard">
			<div className={`userCard__userImage ${large && "userCard__userImage--large"}`}>
				<img src={photoURL ? photoURL : "img/user.jpg"} alt="user" />
			</div>

			<div
				className={`userCard__name ${
					isExpanded ? "userCard__name--expanded" : "userCard__name--collapsed"
				} ${large && "userCard__name--large"}`}
			>
				{displayName}
			</div>
		</div>
	);
};
