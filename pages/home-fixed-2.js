import { useMemo } from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'


export const getServerSideProps =  async (ctx) => {

		const imgs = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg'];
		const indexImg = Math.floor(Math.random() * imgs.length);
	return { 
    props: {
      bgImage: `/${imgs[indexImg]}`
    }
  } 
	
}


export default function Home(props) {

  const {bgImage} = props;


  return (
    <div>
      <h1>We run only once on the server via getServerSide Props. (This will make your page SSR - read more at nextjs)</h1>
      <ImageBg image={bgImage} />

      <Link href="/about" passHref>
        <a>About</a>
      </Link>
    </div>
  )
}

const ImageBg = styled.div`
  ${({image}) => css`
    background-image: url(${image});
    width: 300px;
    height: 300px;
  `}
`