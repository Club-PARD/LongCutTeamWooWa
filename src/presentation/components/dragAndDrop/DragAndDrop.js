import { Upload, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import useFilePreview from "./hooks/useFilePreview";
//주석주석확인
const { Dragger } = Upload;

const DragAndDrop = ({ addFile, removeFile, handleSubmit }) => {
  const [handlePreview, previewContent] = useFilePreview();

  const beforeUploadHandler = (file) => {
    addFile(file);
    return false;
  };

  return (
    <>
      <Dragger
        maxCount={1}
        multiple={false}
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
      <Button type="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </>
  );
};

export default DragAndDrop;
