import React from "react"
import { useCTAAreaQuery } from "../../hooks/useCTAAreaQuery"
import { Wrapper } from "./CTAArea.styles"

const CTAArea = () => {
  const { cta } = useCTAAreaQuery()

  return <div>CTAArea</div>
}

export default CTAArea
