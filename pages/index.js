import { useMemo } from 'react'
import styled, { css } from 'styled-components'

export default function Home() {
  	const bgImage = useMemo(() => {
		const imgs = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg'];
		const indexImg = Math.floor(Math.random() * imgs.length);
		return `/${imgs[indexImg]}`;
	}, []);

  return (
    <div>
      <ImageBg image={bgImage} />
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