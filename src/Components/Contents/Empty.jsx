import styled from 'styled-components';

function Empty({Button}) {

	const Empty = styled.div`
		margin: 14% auto;
		text-align: center;
		font-weight: bold;

		h1{
			color: #0C0D0D;
			font-size: 0.7em;
			padding: 6px;
		}

		p{
			font-size: 0.65em;
			color: #495D69;
		}
	`;

	return (
		<Empty>
			<h1>NOTHING HERE</h1>
			<p>Just like your crush's replies</p>
			<br /><br />
			<Button text='START WITH A NEW TASK' />
		</Empty>
	)
}

export default Empty;