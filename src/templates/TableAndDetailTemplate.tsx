interface TableAndDetailTemplateProps {
	Table: React.ComponentType;
	Detail: React.ComponentType;
	isOpenDetail: boolean;
}

export const TableAndDetailTemplate = ({
	Table,
	Detail,
	isOpenDetail,
}: TableAndDetailTemplateProps) => {
	return (
		<div className="tableAndDetailTemplate">
			<Table />
			{isOpenDetail && <Detail />}
		</div>
	);
};
