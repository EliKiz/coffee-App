import Divider from '../divider/divider';
import Title from '../title/title';

export default function TitleWithDivider(props) {
	const { title } = props;

	return (
		<>
			<Title title={title} mod='title_with-divider'/>
			<Divider color='black' />
		</>
	)
}