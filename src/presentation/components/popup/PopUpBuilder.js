import Save from "../../../assets/img/popup_save.svg";
import Close from "../../../assets/img/popup_getout.svg";
import Error from "../../../assets/img/popup_error.svg";
import PopUp from "./PopUp";

const popup_db = [
  {
    id: 0,
    title: "경험 기록이 저장되었습니다.",
    body: "이제 저장된 기록을 내가 원하는 형태로 볼 수 있어요!",
    image: Save,
  },
  {
    id: 1,
    title: "기록창을 나가시겠어요?",
    body: "작성하던 기록은 삭제되어 다시 볼 수 없어요.",
    image: Close,
  },
  {
    id: 2,
    title: "유효하지 않은 링크입니다.",
    body: "입력하신 링크를 다시 한 번 확인해주세요.",
    image: Error,
  },
];

function PopUpBuilder({ id, close, handleModalOpen }) {
  const popup_data = popup_db.filter((value) => value["id"] === id);
  if (!popup_data.length > 0) return;

  const data = popup_data[0];
  return (
    <PopUp
      imgSrc={data["image"]}
      text1={data["title"]}
      text2={data["body"]}
      id={data["id"]}
      close={close}
      handleModalOpen={handleModalOpen}
    />
  );
}

export default PopUpBuilder;
