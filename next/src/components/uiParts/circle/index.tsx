import { useState, useEffect, useRef, createElement } from "react";
import Style from "./style";

type Props = {
  items: string[];
};

const Circle = ({ items }: Props): JSX.Element => {
  const [itemColors, setItemsColors] = useState<string[]>([]);
  const [prevDeg, setPrevDeg] = useState<number>(0);
  const [hitItem, setHitItem] = useState<string>("");
  const canvasRef = useRef(null);
  const createCanvas = (): CanvasRenderingContext2D => {
    const canvas: any = canvasRef.current || createElement("canvas");
    return canvas.getContext("2d");
  };

  useEffect(() => {
    const ctx = createCanvas();

    let oneBlock = 360 * (100 / items.length / 100);
    let colors: string[] = [];
    for (let i = 0; i < items.length; ++i) {
      ctx.beginPath();
      ctx.arc(
        200,
        200,
        200,
        ((oneBlock * items.indexOf(items[i]) - 90) * Math.PI) / 180,
        ((oneBlock * items.indexOf(items[i]) + oneBlock - 90) * Math.PI) / 180,
        false
      );
      ctx.lineTo(200, 200);
      let color = String(createRandomColor());
      ctx.fillStyle = color;
      ctx.fill();
      colors.push(color);
    }
    setItemsColors(colors);
  }, [items]);

  const handleRotate = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const max = 7200 + prevDeg;
      const min = 3600 + prevDeg;
      let deg = Math.floor(Math.random() * (max + 1 - min)) + min;
      setPrevDeg(deg);
      canvas.style.transition = "1s ease-out";
      canvas.style.transform = `rotate(${deg}deg)`;
      const basicPoint = 90;
      setTimeout(() => {
        // 回転回数
        const tmpRotate = deg / 360;
        // 回転回数の小数点のみ
        const rotateRad = Number("0." + String(tmpRotate).split(".")[1]);
        // 赤が差している角度
        let hitRad = 360 - rotateRad * 360 + basicPoint;
        if (hitRad > 360) {
          hitRad = hitRad - 360;
        }
        const hit = hitRad / (360 / items.length);
        const hitNumber = Math.ceil(hit);
        console.log("rotateRad:", rotateRad);
        console.log("hitRad:", hitRad);
        console.log(hit);

        setHitItem(items[hitNumber - 1]);
      }, 1000);
    }
  };
  /**
   * 90度の位置に矢印がある
   * 0度が1番上の真ん中とする
   * 360/60 1つ60度持ってる
   */

  return (
    <Style.Wrapper>
      <Style.List>
        {items.map((v, i) => (
          <Style.ListItem key={i}>
            <Style.ColorBox bgc={itemColors[i]} />
            <Style.Text>{v}</Style.Text>
          </Style.ListItem>
        ))}
      </Style.List>
      <Style.Content>
        <Style.Arrow />
        <canvas id="roulette" width="400px" height="400px" ref={canvasRef} />
      </Style.Content>
      <button onClick={handleRotate}>クリック</button>
      {hitItem != "" ? <p>{hitItem}が当たり</p> : ""}
    </Style.Wrapper>
  );
};

/**
 * ランダムに生成したカラーコードを返す
 * @returns {string}
 */
const createRandomColor = (): string => {
  let colorCode = "#";
  for (var i = 0; i < 6; i++) {
    colorCode += "0123456789abcdef"[(16 * Math.random()) | 0];
  }
  return colorCode;
};

export default Circle;
