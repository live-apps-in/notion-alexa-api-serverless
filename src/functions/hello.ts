import { APIGatewayProxyEvent, APIGatewayProxyHandler } from 'aws-lambda';


export const handler: APIGatewayProxyHandler = async(_event: APIGatewayProxyEvent) => {
	try {
		console.log(_event.body);
		const response = {
			statusCode: 200,
			body: 'Hello World!'
		};

		return response;
        
	} catch (error) {
		return {
			statusCode: 500,
			body: 'Invalid Exception'
		};
	}
};
