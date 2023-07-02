<<<<<<< HEAD
import { Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import useFilePreview from './hooks/useFilePreview';

=======
import { Upload, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import useFilePreview from "./hooks/useFilePreview";
//주석주석확인
>>>>>>> 952cb120e280ae9b0fd00af365234b3771611d65
const { Dragger } = Upload;

const DragAndDrop = ({ addFile, removeFile }) => {
  const [handlePreview, previewContent] = useFilePreview();

  const beforeUploadHandler = (file) => {
    addFile(file);
    return false;
  };

  return (
    <>
      <Dragger
        multiple={true}
        onRemove={removeFile}
        showUploadList={true}
        listType="picture-card"
        beforeUpload={beforeUploadHandler}
        onPreview={handlePreview}
        accept="image/*"
      >
        <p className="ant-upload-drag-icon">
          <PlusOutlined />
        </p>
        <p className="ant-upload-text">
          Click this area or drag files to upload
        </p>
      </Dragger>
      {previewContent}
    </>
  );
};

export default DragAndDrop;
