import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: '$green300',
  borderRadius: 4,
  border: 0,
  padding: '10px 18px',
})

export default function Home() {
  return (
    <Button>Enviar</Button>
  )
}
