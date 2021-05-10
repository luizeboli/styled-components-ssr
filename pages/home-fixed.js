import { useEffect, useState } from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'


//just runs on client due useEffect
export default function Home() {

  const [bgImage, setBgImage] = useState()


  
  useEffect(() => {

    const imgs = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg'];
		const indexImg = Math.floor(Math.random() * imgs.length);
		setBgImage(`/${imgs[indexImg]}`);

  });


  return (
    <div>
      <h1>We run only once on the client because we are using useEffect, and useEffect are not rendered on server. read more here: https://codewithhugo.com/react-useeffect-ssr/</h1>
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