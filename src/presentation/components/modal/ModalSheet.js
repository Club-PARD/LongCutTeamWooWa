import "./ModalLayout.css";
import React, { useContext, useEffect, useState } from "react";
import firebase from 'firebase/compat/app';


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
import IDvsLinkButton from "./IDvsLinkButton";
import IDBox from "./IDBox";
import {
  useDataInput,
  useUpdateDataInput,
} from "../../../service/providers/data_input_provider";
import postService from "../../../service/firebase/PostService";
import storageService from "../../../service/firebase/storageService";
import { useImageInput, useUpdateImageInput } from "../../../service/providers/image_input_provider";


const tags = [
  { tagName: "인사이트", color: "#4386F7" },
  { tagName: "여행", color: "#F0935F" },
  { tagName: "친구", color: "#90BC77" },
  { tagName: "업무", color: "#77BCAB" },
  { tagName: "학업", color: "#F673A2" },
  { tagName: "회고", color: "#ED735D" },
  { tagName: "연애", color: "#8560F6" },
  { tagName: "추억", color: "#FFCF55" },
  { tagName: "기타", color: "#4386F7" },
];

const ModalSheet = ({
  modalType,
  handleSnack,
  handleModalOpen,
  handleSetModalType,
}) => {
  const dataInput = useDataInput();
  const imageInput = useImageInput();
  const imageUpdateHandler = useUpdateImageInput();
  const [isIDvsLinkActive, setIsIDvsLinkActive] = useState(true);// 추가한부분.



  // Function to handle button click and collect the input data
  const handleSubmitBtnClick = async () => {
    try {
      const userId = "tlsgn"; // User ID
      if (!dataInput["date"]) dataInput["date"] = firebase.firestore.Timestamp.fromDate(new Date());
      const docId = await postService.createPost(userId, dataInput);
      console.log("Document created with ID:", docId);
      if (imageInput) {
        console.log(imageInput)
        // Upload selectedFile to Firebase Storage\
        const postId = docId; // Post ID (same as the created document ID)
        const file = imageInput; // The selected file to upload
        const downloadUrl = await storageService.uploadPostImage(userId, postId, file);
        console.log("Image uploaded successfully:", downloadUrl);

        // Update the Firestore document with the download URL
        const updateData = { imageURL: downloadUrl }; // Replace 'imageURL' with the actual field name in your Firestore document
        await postService.updatePost(postId, userId, updateData);
        console.log("Document updated with imageURL successfully!");

        imageUpdateHandler("image", null);
      }
    } catch (error) {
      console.error("Error creating document:", error);
    }
  };
  const handleIDvsLinkButtonClick = () => {
    setIsIDvsLinkActive(!isIDvsLinkActive);
  }; // 추가한부분. 

  const modalTypeInfo = {
    "add-link": {
      title: "링크 추가하기",
      width: "510px",
      height: "357px",
      IDvsLinkButton: true,
      hasTitleInput: false,
      children: isIDvsLinkActive ? <IDBox /> : <LinkBox />,
      hasDatePicker: !isIDvsLinkActive,
      hasTagSelection: !isIDvsLinkActive,
      Button: (
        <SubmitBtn
          buttonText={"추가하기"}
          handleSnack={handleSnack}
          handleModalOpen={handleModalOpen}
          onSubmit={handleSubmitBtnClick}
        />
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
        <SubmitBtn
          buttonText={"기록하기"}
          handleSnack={handleSnack}
          handleModalOpen={handleModalOpen}
          onSubmit={handleSubmitBtnClick}
        />
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
        <SubmitBtn
          buttonText={"기록하기"}
          handleSnack={handleSnack}
          handleModalOpen={handleModalOpen}
          onSubmit={handleSubmitBtnClick}
        />
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
      <ModalHeader modalType={modalType} title={data["title"]} handleModalOpen={handleModalOpen} />
      <Divider />
      <VerticalSpacing height={25} />
      {data["hasTitleInput"] ? (
        <>
          <InputTitle
            modalType={modalType}
            handleSetModalType={handleSetModalType}
          />
          <VerticalSpacing height={13.9} />
        </>
      ) : (
        <></>
      )}
      {data["IDvsLinkButton"] != null ? (
        <>
          <div style={{ justifyContent: "center", display: "flex" }}>
            <IDvsLinkButton
              isActive={isIDvsLinkActive}
              handleClick={handleIDvsLinkButtonClick}
            />
            <VerticalSpacing height={25} />
          </div>
        </>
      ) : (
        <></>
      )}
      {imageInput && <img style={{ maxHeight: "100px", width: "auto" }} src={URL.createObjectURL(imageInput)} alt="Preview" />}


      {data["children"]}
      {data["hasDatePicker"] ? (
        <>
          <Divider />
          <VerticalSpacing height={15} />
          <div style= {{display: "flex", }}>
            <p style = {
              {fontSize: "14px",
                fontWeight: 600,
                marginRight : "10px",
                marginLeft : "10px", 
                marginTop: "8px"
              }
            }>날짜 입력</p>
            <DateSelector />
          </div>
          <VerticalSpacing height={7} />
        </>
      ) : (
        <></>
      )}
      {data["hasTagSelection"] ? (
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
