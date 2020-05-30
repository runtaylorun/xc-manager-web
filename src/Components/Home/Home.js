import React from 'react';
import { Container, Table, Grid, Segment } from 'semantic-ui-react';

const Home = () => {
	return (
		<React.Fragment>
			<h1 style={{ textAlign: 'center' }}>Team Name Here</h1>
			<Grid
				stackable
				style={{ height: '60vh' }}
				textAlign="center"
				columns={3}
				divided
			>
				<Grid.Column stretched>
					<Segment>
						<h2>Varisty Runners Here</h2>
					</Segment>
				</Grid.Column>
				<Grid.Column stretched>
					<Segment>
						<h2>Varisty Runners Here</h2>
					</Segment>
				</Grid.Column>
				<Grid.Column stretched>
					<Segment>
						<h2>Varisty Runners Here</h2>
					</Segment>
				</Grid.Column>
			</Grid>
			<Grid columns={1} textAlign="center">
				<Grid.Column>
					<Segment>
						<h2>Next Race</h2>
					</Segment>
				</Grid.Column>
			</Grid>
		</React.Fragment>
	);
};

export default Home;
