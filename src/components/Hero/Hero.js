import React from "react"
import { useHeroQuery } from "../../hooks/useHeroQuery"
import { Wrapper, HeaderWrapper, StyledImg } from "./Hero.styles"

const Hero = () => {
  const data = useHeroQuery()

  return (
    <Wrapper>
      <StyledImg
        fluid={
          data.wpPage.ACF_HomePage.heroImage.localFile.childImageSharp.fluid
        }
      />
      <HeaderWrapper>
        <h1>{data.wpPage.ACF_HomePage.heroText}</h1>
      </HeaderWrapper>
    </Wrapper>
  )
}

export default Hero
