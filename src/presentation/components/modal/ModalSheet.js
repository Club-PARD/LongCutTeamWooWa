import "./ModalLayout.css";
import React, { useContext, useState } from "react";

import { Divider, DashedDivider } from "../commons/Divider";
import ModalHeader from "./ModalSheetHeader";
import VerticalSpacing from "../commons/VerticalSpacing";
import ModalTagSelection from "./ModalTagSelection";
import InputTitle from "./InputTitle";
import DateSelector from "../DateSelector";
import SubmitBtn from "../buttons/SubmitBtn";
import ModalTemplateContent from "./ModalTemplateContent";
import ModalWritingContent from "./ModalWritingContent";
import LinkBox from "./LinkBox";
import {
  useDataInput,
  useUpdateDataInput,
} from "../../../service/providers/data_input_provider";
import FirebaseService from "../../../service/firebase/FirebaseService";
import postService from "../../../service/firebase/PostService";
import storageService from "../../../service/firebase/storageService";
import useFileSelection from "../dragAndDrop/hooks/useFileSelection";

const tags = [
  { tagName: "도전정신", color: "#4386F7" },
  { tagName: "성취감", color: "#F0935F" },
  { tagName: "동기부여", color: "#90BC77" },
  { tagName: "학습", color: "#77BCAB" },
  { tagName: "자기존중", color: "#ED735D" },
  { tagName: "문제 해결 능력", color: "#F673A2" },
  { tagName: "협업", color: "#ED735D" },
  { tagName: "리더십", color: "#8560F6" },
  { tagName: "커뮤니케이션", color: "#FFCF55" },
  { tagName: "신체적", color: "#4386F7" },
];



const ModalSheet = ({ modalType, handleModalOpen, handleSetModalType }) => {
  const dataInput = useDataInput();
  const [selectedFile] = useFileSelection();

  // Function to handle button click and collect the input data
  const handleSubmitBtnClick = async () => {
    try {
      const userId = "tlsgn"; // User ID
      const docId = await postService.createPost(userId, dataInput);
      console.log("Document created with ID:", docId);
      if(selectedFile){
        // todo: upload "selectedFile" into storage
        // Upload selectedFile to Firebase Storage\
        const postId = docId; // Post ID (same as the created document ID)
        const file = selectedFile; // The selected file to upload
        const downloadUrl = await storageService.uploadPostImage(userId, postId, file);
        console.log("Image uploaded successfully:", downloadUrl);

         // Update the Firestore document with the download URL
        const updateData = { imageURL: downloadUrl }; // Replace 'imageURL' with the actual field name in your Firestore document
        await postService.updatePost(postId, userId, updateData);
        console.log("Document updated with imageURL successfully!");
      }

    } catch (error) {
      console.error("Error creating document:", error);
    }
  };

  const modalTypeInfo = {
    "add-link": {
      title: "링크 추가하기",
      width: "510px",
      height: "357px",
      hasTitleInput: false,
      children: <LinkBox />,
      hasDatePicker: true,
      hasTagSelection: true,
      Button: (
        <SubmitBtn buttonText={"기록하기"} onSubmit={handleSubmitBtnClick} />
      ),
    },
    "add-free": {
      title: "경험 작성하기",
      width: "510px",
      height: "690px",
      hasTitleInput: true,
      children: <ModalWritingContent />,
      hasDatePicker: true,
      hasTagSelection: true,
      Button: (
        <SubmitBtn buttonText={"기록하기"} onSubmit={handleSubmitBtnClick} />
      ),
    },
    "add-template": {
      title: "경험 작성하기",
      width: "550px",
      height: "690px",
      hasTitleInput: true,
      children: <ModalTemplateContent />,
      hasDatePicker: true,
      hasTagSelection: true,
      Button: (
        <SubmitBtn buttonText={"기록하기"} onSubmit={handleSubmitBtnClick} />
      ),
    },
    post: {
      title: "경험 제목",
      width: "510px",
      height: "554px",
      hasTitleInput: false,
      hasDatePicker: false,
      hasTagSelection: false,
      Button: (
        <SubmitBtn buttonText={"수정하기"} onSubmit={handleSubmitBtnClick} />
      ),
    },
  };

  const data = modalTypeInfo[modalType];
  if (data === null) return <></>;

  return (
    <div
      className="modal-sheet"
      style={{
        "--sheet-width": dataInput.isExpanded ? "1131px" : data["width"],
        "--sheet-height": dataInput.isExpanded ? data["hight"] : data["hight"],
        "--max-width": "100%",
      }}
    >
      <ModalHeader title={data["title"]} handleModalOpen={handleModalOpen} />
      <Divider />
      <VerticalSpacing height={25} />
      {data["hasTitleInput"] ? (
        <>
          <InputTitle modalType={modalType} handleSetModalType={handleSetModalType}  />
          <VerticalSpacing height={13.9} />
        </>
      ) : (
        <></>
      )}
      {data["children"]}
      {data["hasDatePicker"] ? (
        <>
          <Divider />
          <VerticalSpacing height={14} />
          <DateSelector />
          <VerticalSpacing height={14} />
        </>
      ) : (
        <></>
      )}
      {data["hasTagSelection"] != null ? (
        <>
          <Divider />
          <VerticalSpacing height={14} />
          <ModalTagSelection
            title={"태그 입력"}
            hasButton={false}
            modalTagList={tags}
          />
          <VerticalSpacing height={14} />
          <Divider />
        </>
      ) : (
        <></>
      )}
      {data["Button"] != null ? (
        <>
          <VerticalSpacing height={26.5} />
          <div className="button-layout">{data["Button"]}</div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ModalSheet;
