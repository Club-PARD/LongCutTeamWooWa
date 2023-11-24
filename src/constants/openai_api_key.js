import FirebaseService from '../service/firebase/FirebaseService';

const collectionName = 'api';
const docName = 'openai';

const get_openai_api_key = async () => {
    const snap = await FirebaseService.getDocument(collectionName, docName);
    return snap['apikey'];
}

export default get_openai_api_key;