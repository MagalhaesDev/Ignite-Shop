import Image from 'next/image'
import { useRouter} from 'next/router'
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product'

export default function Product() {
    const { query } = useRouter()

    return (
        <ProductContainer>
            <ImageContainer>
            </ImageContainer>

            <ProductDetails>
                <h1>Casmiseta X</h1>
                <span>R$ 79,90</span>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, error. Hic accusantium itaque numquam facilis maxime iusto labore maiores praesentium eos? Saepe repellat provident quas. Maiores quod sint quia ea.</p>
           
                <button>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}