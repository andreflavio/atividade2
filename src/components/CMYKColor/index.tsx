import Input from "../Input";
import Title from "../Title";
import Line from "../Line";
import Block from "../Block";
import useCMYK from "../../hooks/useCMYK";

export default function CMYKColor() {
  const { cyan, magenta, yellow, black, color, setCyan, setMagenta, setYellow, setBlack  } = useCMYK();
  
  return (
    <Block color={color}>
      <Title>CMYK - Ciano, Magenta, Yellow, Black</Title>
      <Line>
        <Input label="Ciano" value={cyan} setValue={setCyan} min={0} max={100} />
        <Input label="Magenta" value={magenta} setValue={setMagenta} min={0} max={100} />
        <Input label="Amarelo" value={yellow} setValue={setYellow} min={0} max={100} />
        <Input label="Black" value={black} setValue={setBlack} min={0} max={100} />
      </Line>
    </Block>
  );
}
