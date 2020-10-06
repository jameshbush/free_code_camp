import { Handler, Context, Callback, APIGatewayEvent } from "aws-lambda";

interface HelloResponse {
  statusCode: number;
  body: string;
}

const handler: Handler = (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback
) => {
  console.log("queryStringParameters", event.queryStringParameters);

  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify({ msg: `Hello, World! ${Math.floor(Math.random() * 100)}` }),
  };

  callback(undefined, response);
};

export { handler };
