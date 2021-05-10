import { useMemo } from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'

export default function Home() {
  	const bgImage = useMemo(() => {
		const imgs = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg'];
		const indexImg = Math.floor(Math.random() * imgs.length);
		return `/${imgs[indexImg]}`;
	}, []);


  const renderWhere = typeof window === 'undefined' ? 'Sever': 'Client';

  console.log(`BgImage on ${renderWhere}`,bgImage);

  return (
    <div>
      <h1>The bgImage are executed on server and client and it generate a different value in each one due Math.random</h1>
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