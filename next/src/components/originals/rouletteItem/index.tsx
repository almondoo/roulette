import { useRef, Dispatch, SetStateAction } from "react";
import Style from "./style";

type Props = {
  handleSetItem: Dispatch<SetStateAction<string[]>>;
};

const RouletteItem = ({ handleSetItem }: Props) => {
  const textarea = useRef(null);
  const handleSet = () => {
    const element = textarea.current as HTMLTextAreaElement | null;
    if (element) {
      const inputText = element.value;
      handleSetItem(inputText.split(/\n/).filter((v) => v.length));
    }
  };
  return (
    <Style.Wrapper>
      <Style.TextArea
        ref={textarea}
        defaultValue={
          "one\ntwe\nthree\nfour\nfive\nsix\nseven\neight\nnine\nten"
        }
      />
      <Style.Button onClick={handleSet}>セット</Style.Button>
    </Style.Wrapper>
  );
};

export default RouletteItem;
