'use client'

import React, { useRef, useState, useEffect } from 'react'

type DiagramType =
  | 'public-affairs'
  | 'regulatory'
  | 'studies'
  | 'economic'
  | 'strategic-advisory'
  | 'economic-policy'
  | 'crisis'
  | 'media'
  | 'governance'
  | 'policy-design'
  | 'media-research'
  | 'impact'
  | 'performance'
  | 'process'
  | 'economic-eval'

interface InstitutionalDiagramProps {
  type: DiagramType
  width?: number
  height?: number
}

interface DiagramConfig {
  top: [string, string, string]
  center: string
  bottom: [string, string, string]
}

const DIAGRAM_STROKE = '#0f2463'
const DIAGRAM_CONNECTOR = '#c8d5f0'
const DIAGRAM_TEXT = '#2a3a5c'
const DIAGRAM_FONT = 'Inter, system-ui, sans-serif'
const DIAGRAM_STROKE_WIDTH = 2
const CONNECTOR_WIDTH = 1
const FONT_SIZE = 11
const CIRCLE_FONT_SIZE = 10
const CIRCLE_FILL = '#f8faff'
const RECTANGLE_FILL = '#eef2ff'

const diagramConfigs: Record<DiagramType, DiagramConfig> = {
  'public-affairs': {
    top: ['Policy Analysis', 'Institutional Systems', 'Governance'],
    center: 'Policy Advisory',
    bottom: ['Legislative Review', 'Institutional Mapping', 'Advisory Notes']
  },
  regulatory: {
    top: ['Regulatory Scan', 'Compliance Signals', 'Policy Timeline'],
    center: 'Strategic Intelligence',
    bottom: ['Monitoring Briefs', 'Risk Mapping', 'Regulatory Updates']
  },
  studies: {
    top: ['Research Design', 'Field Studies', 'Data Review'],
    center: 'Research Program',
    bottom: ['Evidence Papers', 'Analytical Notes', 'Research Outputs']
  },
  economic: {
    top: ['Fiscal Policy', 'Monetary Policy', 'Regulatory Policy'],
    center: 'Economic Affairs',
    bottom: ['Economic Briefs', 'Policy Models', 'Institutional Review']
  },
  'strategic-advisory': {
    top: ['Governance', 'Regulation', 'Economic Policy'],
    center: 'Strategic Advisory',
    bottom: ['Institutional Systems', 'Research Analysis', 'Policy Context']
  },
  'economic-policy': {
    top: ['Economic Data', 'Policy Models', 'Fiscal Review'],
    center: 'Economic Policy',
    bottom: ['Policy Briefs', 'Analytical Notes', 'Evidence Synthesis']
  },
  crisis: {
    top: ['Preparedness', 'Coordination', 'Recovery'],
    center: 'Crisis Management',
    bottom: ['Response Plans', 'System Links', 'Continuity Review']
  },
  media: {
    top: ['Research Outputs', 'Briefing Formats', 'Institutional Channels'],
    center: 'Strategic Communications',
    bottom: ['Policy Briefs', 'Analytical Notes', 'Knowledge Outputs']
  },
  governance: {
    top: ['Accountability', 'Administrative Capacity', 'Regulatory Systems'],
    center: 'Governance Architecture',
    bottom: ['Oversight', 'Institutional Balance', 'Compliance Review']
  },
  'policy-design': {
    top: ['Policy Design', 'Implementation Review', 'Evaluation Methods'],
    center: 'Policy Evaluation',
    bottom: ['Design Options', 'Process Review', 'Outcome Logic']
  },
  'media-research': {
    top: ['Media Data', 'Institutional Context', 'Policy Coverage'],
    center: 'Media Research',
    bottom: ['Analysis Notes', 'Insight Briefs', 'Communication Review']
  },
  impact: {
    top: ['Inputs', 'Activities', 'Outputs'],
    center: 'Impact Evaluation',
    bottom: ['Outcomes', 'Long-term Impact', 'Evidence Review']
  },
  performance: {
    top: ['Indicators', 'Benchmarks', 'Monitoring'],
    center: 'Performance Measurement',
    bottom: ['Data Review', 'Feedback Loops', 'Reporting']
  },
  process: {
    top: ['Planning', 'Initiation', 'Implementation'],
    center: 'Process Evaluation',
    bottom: ['Process Review', 'Institutional Context', 'Operational Insights']
  },
  'economic-eval': {
    top: ['Cost Effectiveness', 'Efficiency', 'Outcome Comparison'],
    center: 'Economic Evaluation',
    bottom: ['Cost Analysis', 'Efficiency Metrics', 'Policy Outcomes']
  }
}

function renderLabel(x: number, y: number, label: string, isCircle: boolean = false) {
  const fontSize = isCircle ? CIRCLE_FONT_SIZE : FONT_SIZE
  const words = label.split(' ')

  if (isCircle) {
    const charWidth = fontSize * 0.6
    const maxWidth = 50

    if (words.length === 1 && label.length * charWidth <= maxWidth) {
      return (
        <text x={x} y={y} textAnchor="middle" fontSize={fontSize} fill={DIAGRAM_TEXT}
          fontFamily={DIAGRAM_FONT} dominantBaseline="middle">{label}</text>
      )
    }

    if (words.length === 2) {
      return (
        <text x={x} y={y - 5} textAnchor="middle" fontSize={fontSize} fill={DIAGRAM_TEXT}
          fontFamily={DIAGRAM_FONT} dominantBaseline="middle">
          <tspan x={x} dy="0">{words[0]}</tspan>
          <tspan x={x} dy="13">{words[1]}</tspan>
        </text>
      )
    }

    let line1Words: string[] = []
    let line2Words: string[] = []
    let line1Length = 0
    const targetLength = label.length / 2

    for (const word of words) {
      if (line1Length < targetLength) {
        line1Words.push(word)
        line1Length += word.length + 1
      } else {
        line2Words.push(word)
      }
    }

    if (line1Words.length === 0) { line1Words = [words[0]]; line2Words = words.slice(1) }
    if (line2Words.length === 0) { line2Words = [words[words.length - 1]]; line1Words = words.slice(0, -1) }

    return (
      <text x={x} y={y - 5} textAnchor="middle" fontSize={fontSize} fill={DIAGRAM_TEXT}
        fontFamily={DIAGRAM_FONT} dominantBaseline="middle">
        <tspan x={x} dy="0">{line1Words.join(' ')}</tspan>
        <tspan x={x} dy="13">{line2Words.join(' ')}</tspan>
      </text>
    )
  }

  if (words.length === 1) {
    return (
      <text x={x} y={y} textAnchor="middle" fontSize={fontSize} fill={DIAGRAM_TEXT}
        fontFamily={DIAGRAM_FONT} dominantBaseline="middle">{label}</text>
    )
  }

  const line1 = words[0]
  const line2 = words.slice(1).join(' ')
  return (
    <text x={x} y={y - 6} textAnchor="middle" fontSize={fontSize} fill={DIAGRAM_TEXT}
      fontFamily={DIAGRAM_FONT} dominantBaseline="middle">
      <tspan x={x} dy="0">{line1}</tspan>
      <tspan x={x} dy="16">{line2}</tspan>
    </text>
  )
}

function renderUnifiedDiagram(config: DiagramConfig, width: number, height: number, animated: boolean) {
  const topY = 70
  const topRadius = 35
  const topXs: [number, number, number] = [120, 300, 480]
  const centerRect = { x: 200, y: 125, width: 200, height: 50 }
  const bottomY = 210
  const bottomRect = { width: 150, height: 40 }
  const bottomXs: [number, number, number] = [60, 225, 390]
  const cx = centerRect.x + centerRect.width / 2
  const cy = centerRect.y + centerRect.height / 2

  // Line lengths (approximate, generous dasharray)
  const topLineLengths = [185, 22, 185]
  const bottomLineLengths = [172, 38, 172]

  const nodeDelay = (i: number) => i * 180
  const topConnectorDelay = (i: number) => 550 + i * 80
  const centerDelay = 900
  const bottomConnectorDelay = (i: number) => 1200 + i * 80
  const bottomDelay = (i: number) => 1500 + i * 100

  const nodeStyle = (delayMs: number): React.CSSProperties => ({
    opacity: animated ? 1 : 0,
    transform: animated ? 'scale(1)' : 'scale(0.5)',
    transformOrigin: 'center',
    transition: animated
      ? `opacity 0.45s ease ${delayMs}ms, transform 0.45s cubic-bezier(0.34,1.56,0.64,1) ${delayMs}ms`
      : 'none',
  })

  const lineStyle = (len: number, delayMs: number): React.CSSProperties => ({
    strokeDasharray: len,
    strokeDashoffset: animated ? 0 : len,
    transition: animated
      ? `stroke-dashoffset 0.55s ease ${delayMs}ms`
      : 'none',
  })

  const centerStyle: React.CSSProperties = {
    opacity: animated ? 1 : 0,
    transform: animated ? 'scale(1)' : 'scale(0.85)',
    transformOrigin: `${cx}px ${cy}px`,
    transition: animated
      ? `opacity 0.4s ease ${centerDelay}ms, transform 0.4s ease ${centerDelay}ms`
      : 'none',
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 600 300"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <style>{`
        @keyframes id-pulse {
          0%, 100% { filter: drop-shadow(0 0 0px rgba(15,36,99,0)); }
          50%       { filter: drop-shadow(0 0 6px rgba(15,36,99,0.35)); }
        }
        .id-center-pulse {
          animation: ${animated ? 'id-pulse 2.4s ease-in-out 1.4s infinite' : 'none'};
        }
      `}</style>

      {/* Top connectors — drawn first under circles */}
      {topXs.map((x, i) => (
        <line key={`tc-${i}`}
          x1={x} y1={topY + topRadius}
          x2={cx} y2={centerRect.y}
          stroke={DIAGRAM_CONNECTOR} strokeWidth={CONNECTOR_WIDTH}
          style={lineStyle(topLineLengths[i], topConnectorDelay(i))}
        />
      ))}

      {/* Bottom connectors */}
      {bottomXs.map((x, i) => (
        <line key={`bc-${i}`}
          x1={cx} y1={centerRect.y + centerRect.height}
          x2={x + bottomRect.width / 2} y2={bottomY}
          stroke={DIAGRAM_CONNECTOR} strokeWidth={CONNECTOR_WIDTH}
          style={lineStyle(bottomLineLengths[i], bottomConnectorDelay(i))}
        />
      ))}

      {/* Top circles */}
      {topXs.map((x, i) => (
        <g key={`top-${i}`} style={nodeStyle(nodeDelay(i))}>
          <circle cx={x} cy={topY} r={topRadius}
            fill={CIRCLE_FILL} stroke={DIAGRAM_STROKE} strokeWidth={DIAGRAM_STROKE_WIDTH} />
          {renderLabel(x, topY, config.top[i], true)}
        </g>
      ))}

      {/* Center node with pulse */}
      <g className="id-center-pulse" style={centerStyle}>
        <rect
          x={centerRect.x} y={centerRect.y}
          width={centerRect.width} height={centerRect.height}
          fill={RECTANGLE_FILL} stroke={DIAGRAM_STROKE}
          strokeWidth={DIAGRAM_STROKE_WIDTH} rx={6}
        />
        {renderLabel(cx, centerRect.y + 28, config.center)}
      </g>

      {/* Bottom nodes */}
      {bottomXs.map((x, i) => (
        <g key={`bot-${i}`} style={nodeStyle(bottomDelay(i))}>
          <rect
            x={x} y={bottomY}
            width={bottomRect.width} height={bottomRect.height}
            fill={RECTANGLE_FILL} stroke={DIAGRAM_STROKE}
            strokeWidth={DIAGRAM_STROKE_WIDTH} rx={6}
          />
          {renderLabel(x + bottomRect.width / 2, bottomY + 24, config.bottom[i])}
        </g>
      ))}
    </svg>
  )
}

export default function InstitutionalDiagram({
  type,
  width = 720,
  height = 360
}: InstitutionalDiagramProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true) },
      { threshold: 0.25 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  if (type === 'strategic-advisory') {
    const svgProps = {
      width, height,
      viewBox: '0 0 600 300',
      xmlns: 'http://www.w3.org/2000/svg',
      preserveAspectRatio: 'xMidYMid meet'
    }

    const centerRect = { x: 220, y: 125, width: 160, height: 50 }
    const nodeRadius = 32
    const cx = centerRect.x + centerRect.width / 2
    const cy = centerRect.y + centerRect.height / 2

    const nodes = [
      { label: 'Governance', x: 300, y: 60 },
      { label: 'Regulation', x: 460, y: 120 },
      { label: 'Economic Policy', x: 410, y: 230 },
      { label: 'Institutional Systems', x: 190, y: 230 },
      { label: 'Research Analysis', x: 140, y: 120 }
    ]

    return (
      <div ref={ref} style={{ width: '100%', maxWidth: `${width}px`, margin: '0 auto' }}>
        <svg {...svgProps}>
          <style>{`
            @keyframes id-pulse {
              0%, 100% { filter: drop-shadow(0 0 0px rgba(15,36,99,0)); }
              50%       { filter: drop-shadow(0 0 6px rgba(15,36,99,0.35)); }
            }
            .id-center-pulse { animation: ${animated ? 'id-pulse 2.4s ease-in-out 1.4s infinite' : 'none'}; }
          `}</style>
          {nodes.map((node, i) => {
            const dx = node.x - cx
            const dy = node.y - cy
            const lineLen = Math.round(Math.sqrt(dx * dx + dy * dy))
            return (
              <g key={`sa-${i}`}>
                <line
                  x1={cx} y1={cy} x2={node.x} y2={node.y}
                  stroke={DIAGRAM_CONNECTOR} strokeWidth={CONNECTOR_WIDTH}
                  style={{
                    strokeDasharray: lineLen,
                    strokeDashoffset: animated ? 0 : lineLen,
                    transition: animated ? `stroke-dashoffset 0.55s ease ${300 + i * 100}ms` : 'none',
                  }}
                />
                <g style={{
                  opacity: animated ? 1 : 0,
                  transform: animated ? 'scale(1)' : 'scale(0.5)',
                  transformOrigin: 'center',
                  transition: animated
                    ? `opacity 0.4s ease ${i * 160}ms, transform 0.4s cubic-bezier(0.34,1.56,0.64,1) ${i * 160}ms`
                    : 'none',
                }}>
                  <circle cx={node.x} cy={node.y} r={nodeRadius}
                    fill={CIRCLE_FILL} stroke={DIAGRAM_STROKE} strokeWidth={DIAGRAM_STROKE_WIDTH} />
                  {renderLabel(node.x, node.y, node.label, true)}
                </g>
              </g>
            )
          })}
          <g className="id-center-pulse" style={{
            opacity: animated ? 1 : 0,
            transform: animated ? 'scale(1)' : 'scale(0.85)',
            transformOrigin: `${cx}px ${cy}px`,
            transition: animated ? 'opacity 0.4s ease 900ms, transform 0.4s ease 900ms' : 'none',
          }}>
            <rect x={centerRect.x} y={centerRect.y}
              width={centerRect.width} height={centerRect.height}
              fill={RECTANGLE_FILL} stroke={DIAGRAM_STROKE}
              strokeWidth={DIAGRAM_STROKE_WIDTH} rx={6} />
            {renderLabel(cx, centerRect.y + 28, 'Strategic Advisory')}
          </g>
        </svg>
      </div>
    )
  }

  const config = diagramConfigs[type]
  if (!config) return <div>Diagram type not found</div>

  return (
    <div ref={ref} style={{ width: '100%', maxWidth: `${width}px`, margin: '0 auto' }}>
      {renderUnifiedDiagram(config, width, height, animated)}
    </div>
  )
}
