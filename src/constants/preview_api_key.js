import FirebaseService from '../service/firebase/FirebaseService';

const collectionName = 'api';
const docName = 'previewlink';

const get_preview_api_key = async () => {
    const snap = await FirebaseService.getDocument(collectionName, docName);
    return snap['apikey'];
}

export default get_preview_api_key;