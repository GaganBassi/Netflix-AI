import OpenAI from 'openai';
import { OPEN_AI_KEY } from './constant';

//Once openAI feature has been build, now we can use openAI functions
const openai = new OpenAI({
  apiKey: OPEN_AI_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser:true// Usually openAI calls are from backened but here we are making from 
  //client side so we have to give this key as true.
});

export default openai;