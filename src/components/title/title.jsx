import './title.scss';

export default function Title(props) {
	const { title, mod } = props;
	const clazz = mod? `title ${mod}` : 'title'
	return <h2 className={clazz}>{title}</h2>
}