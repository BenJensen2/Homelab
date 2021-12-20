import React, { useEffect } from 'react'
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { select } from 'd3-selection'
import { hierarchy } from 'd3-hierarchy'
import { data } from '../data/data'
import * as d3 from 'd3'

const Sunburst = (props) => {
  const svgRef = React.useRef<SVGAElement>(null);
  console.log(svgRef)

  return (
    <div>
      div
      <svg>
      </svg>
    </div>
  )
}

export default Sunburst;