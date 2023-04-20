import { useEffect } from "react";

export default function () {

  const drawContent = () => {
    let drawing = document.getElementById('drawing')
    if (drawing.getContext) {
      let context = drawing.getContext('2d')

      // 描边
      context.strokeStyle = '#fff'
      context.strokeRect(10, 10, 30, 50)
      context.strokeStyle = 'red'
      context.strokeRect(20, 30, 50, 50)
      // 填充
      context.fillStyle = 'red'
      context.fillRect(20, 20, 30, 50)
      context.fillStyle = '#0000ff'
      context.fillRect(30, 30, 50, 50)
      // 擦除
      context.clearRect(20, 30, 50, 50)
    }
  }

  const drawPath = () => {
    let drawing = document.getElementById('drawing')
    console.log(drawing);
    if (drawing.getContext) {
      let context = drawing.getContext('2d')

      context.beginPath()

      context.arc(150, 150, 99, 2 * Math.PI, false)

      context.moveTo(244, 150)
      context.arc(150, 150, 94, 2 * Math.PI, false)

      context.moveTo(150, 150)
      context.lineTo(150, 65)

      context.moveTo(150, 150)
      context.lineTo(95, 150)

      context.stroke()
    }
  }

  useEffect(() => {
    // drawContent()
    drawPath()
  })

  return (
    <canvas id='drawing' width={300} height={300} style={{background:"#fff"}}>canvas
    </canvas>
  );
}