import get_openai_api_key from '../../constants/openai_api_key';
import { Configuration, OpenAIApi } from 'openai';

let openaiInstance = null;

const initializeOpenAI = async () => {
  if (openaiInstance) {
    return openaiInstance;
  }

  const apiKey = await get_openai_api_key();

  const configuration = new Configuration({
    apiKey: apiKey,
  });

  delete configuration.baseOptions.headers['User-Agent'];

  openaiInstance = new OpenAIApi(configuration);
  return openaiInstance;
};

const systemPrompt = [
  "I am going to provide a text and I want you to summarize the given text.",
  "Note that the summarized text will be used as a summarized content of a post before reading the whole content. So people should be able to assume what the post is about.",
  "Note that you should answer in the same language that the user role used",
];

const requestSummarize = async (maxNumLetter, targetMessage) => {
  const maxNumLetterPrompt = `Note that the summarized text should be under ${maxNumLetter} number of letters`;
  const targetSystemPrompt = [...systemPrompt, maxNumLetterPrompt];

  let messages = targetSystemPrompt.map((prompt) => ({ role: 'system', content: prompt }));
  const userMessage = { role: 'user', content: targetMessage };

  messages = [...messages, userMessage];

  console.log('openai init..')

  const openai = await initializeOpenAI();

  console.log('openai init done!')

  return generateChatResponse(openai, messages);
};

const generateChatResponse = async (openai, messages) => {
  try {
    console.log('openai summrize request')
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: messages,
    });
    console.log('openai summrize request done!')
    console.log(response);
    const chatResponse = response.data.choices[0].message.content;
    console.log(chatResponse);
    return chatResponse;
  } catch (error) {
    console.error('Error generating chat response:', error);
    throw error;
  }
};

export { requestSummarize, generateChatResponse };
