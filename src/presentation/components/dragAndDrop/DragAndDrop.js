import { Upload, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import useFilePreview from "./hooks/useFilePreview";
import styled from "styled-components";

const { Dragger } = Upload;

const Text = styled.p`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  font-size: ${(props) => props.theme.fontSizes.Body1};
  color: ${(props) => props.theme.color.blackHigh};
  line-height: 22px;
  text-align: center;
`;

const DraggerWrapper = styled(Dragger)`
  .ant-upload {
    width: auto;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CustomButton = styled(Button)`
  font-family: ${(props) => props.theme.fontFamily.mainfont};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  font-size: ${(props) => props.theme.fontSizes.Body2};
  flex: column;
  text-align: center;
  border-radius: 42.481px;
  background: var(--black-high, #272727);
  color: var(--surface-white, #fff);
  line-height: 160%;
  margin-top: 15px;
`;

const DragAndDrop = ({ addFile, removeFile, handleSubmit }) => {
  const [handlePreview, previewContent] = useFilePreview();

  const beforeUploadHandler = (file) => {
    addFile(file);
    return false;
  };

  return (
    <>
      <DraggerWrapper
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
        <Text>
          클릭하거나 그래그하여
          <br />
          대표 이미지를 업로드하세요
        </Text>
      </DraggerWrapper>

      {previewContent}
      <CenteredContainer>
        <CustomButton type="primary" onClick={handleSubmit}>
          업로드
        </CustomButton>
      </CenteredContainer>
    </>
  );
};

export default DragAndDrop;
