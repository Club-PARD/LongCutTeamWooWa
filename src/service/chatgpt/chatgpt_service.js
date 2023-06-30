import axios from 'axios';

const apiKey = 'YOUR_API_KEY';
const apiUrl = 'https://api.openai.com/v1/chat/completions';

const systemPromt = [
    "I am going to provide a text and I want you to summarize the given text.",
    "Note that the summarized text will be used as a summrized content of a post before reading whole the content. So the people should be able to assume what the post is about."
];

const requestSummarize = ({maxNumLetter, targetMessage}) => {
    const maxNumLetterPrompt = `Nscote that the summarized text should be under ${maxNumLetter} number of letters`;
    
    systemPromt.add(maxNumLetterPrompt);

    const messages = systemPromt.map((prompt) => ({ role: 'system', content: prompt }));

    const userMessage = { role: 'user', content: targetMessage };
    messages.unshift(userMessage);

    return generateChatResponse(messages);
}

const generateChatResponse = async (messages) => {
  try {
    const response = await axios.post(apiUrl, {
      messages: messages,
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    const chatResponse = response.data.choices[0].message.content;
    return chatResponse;
  } catch (error) {
    console.error('Error generating chat response:', error);
    throw error;
  }
};

export {requestSummarize, generateChatResponse};