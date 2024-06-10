import React, { useEffect, useRef, useState } from 'react'
import './analytics.css'
import * as d3 from "d3";

export const Analytics = () => {

  const [data] = useState([
    { property: 'Birthdays', value: 4 },
    { property: 'Other', value: 2 },
    { property: 'Weddings', value: 10 },
    { property: 'Fiestival', value: 8 }
  ])
  const svgRef = useRef();

  useEffect(() => {
    const w = 500;
    const h = 500;
    const radius = w / 2;
    const svg = d3.select(svgRef.current)
    .attr('width', w)
    .attr('height', h)
    .style('overflow', 'visible')
    .style('margin-top', '400px')

    const formattedData = d3.pie().value(d => d.value)(data);
    const arcGenerator = d3.arc().innerRadius(0).outerRadius(radius);
    const color = d3.scaleOrdinal().range(d3.schemeSet2);

    svg.selectAll()
    .data(formattedData)
    .join('path')
    .attr('d', arcGenerator)
    .attr('fill', d => color(d.value))
    .style('opacity', 0.7);

    svg.selectAll()
    .data(formattedData)
    .join('text')
    .text(d => d.data.property)
    .attr('transform', d => `translate(${arcGenerator.centroid(d)})`)
    .style('text-anchor', 'middle');
  }, [data]);

  return (
    <div className='box'>
      <h1>Administrative Dashboard</h1>
      <div className='pie'>
        <svg ref={svgRef}></svg>
      </div>
    </div>
  )
}
