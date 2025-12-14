import React, { useState, useEffect, useRef, createElement } from "react";
import Style from "./style";

type Props = {
  items: string[];
};

const Circle = ({ items }: Props): React.JSX.Element => {
  const [itemColors, setItemsColors] = useState<string[]>([]);
  // 前回のdegの数値
  const [prevDeg, setPrevDeg] = useState<number>(0);
  // 当たったアイテム
  const [hitItem, setHitItem] = useState<string>("");
  // 回転しているか
  const [isRotating, setIsRotating] = useState<boolean>(false);

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
    const canvas = canvasRef.current as HTMLCanvasElement | null;
    if (canvas && !isRotating) {
      setIsRotating(true);
      // 10 ~ 20周の間を決める
      const max = 7200 + prevDeg;
      const min = 3600 + prevDeg;
      const sec = 4;
      // 3600 ~ 7200 の値を取得 切り上げ(0~1未満 * (最大値 + (0にしないために1)) - 最小値)) + 最小値
      const deg = getBetweenMaxAndMin(min, max);
      setPrevDeg(deg);
      canvas.style.transition = `${sec}s ease-out`;
      canvas.style.transform = `rotate(${deg}deg)`;
      const basicPoint = 90;

      // 赤色の矢印に位置するものを表示する
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
        setIsRotating(false);
      }, sec * 1000);
    }
  };

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
        <Style.CanvasWrap>
          <Style.Canvas
            id="roulette"
            width={400}
            height={400}
            ref={canvasRef}
          />
        </Style.CanvasWrap>
      </Style.Content>
      <Style.ButtonGroup>
        <Style.Button onClick={handleRotate}>クリック</Style.Button>
      </Style.ButtonGroup>
      {hitItem != "" ? <Style.HitItem>{hitItem}が当たり</Style.HitItem> : ""}
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

/**
 * 最長値から最大値の値を返す
 * @param min 最小値
 * @param max 最大値
 * @returns
 */
const getBetweenMaxAndMin = (min: number, max: number): number => {
  // 最小値 ~ 最大値 の値を取得 切り上げ(0~1未満 * (最大値 + (0にしないために1)) - 最小値)) + 最小値
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

export default Circle;
