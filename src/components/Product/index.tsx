import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
      quisquam tempore enim eos natus placeat repellat porro eum tempora.
      Laborum officiis blanditiis magnam doloribus necessitatibus itaque
      assumenda iste dolorem tempore.
    </Descricao>
  </Card>
)

export default Product
