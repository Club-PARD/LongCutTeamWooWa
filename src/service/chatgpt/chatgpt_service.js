import api_key from './api_key';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: api_key,
});

delete configuration.baseOptions.headers['User-Agent'];

const openai = new OpenAIApi(configuration);

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


  return generateChatResponse(messages);
};

const generateChatResponse = async (messages) => {
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: messages,
    });
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
