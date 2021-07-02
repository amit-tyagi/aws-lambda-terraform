import { APIGatewayEvent, Context } from 'aws-lambda';
import { encryptPassword } from './utils'

const containerId = Date.now().toString().slice(-6);

export const handler = async (event: APIGatewayEvent, context: Context) => {
  console.log("Container ID:", containerId)
  console.log('Event:', JSON.stringify(event, undefined, 2))
  console.log('Context:', JSON.stringify(context, undefined, 2))

  const encryptedPassword = await encryptPassword('testpassword')
  console.log('Encrypted Password:', encryptedPassword)
  
  return {
    success: 200,
    body: {
      password: encryptedPassword
    }
  }

}
