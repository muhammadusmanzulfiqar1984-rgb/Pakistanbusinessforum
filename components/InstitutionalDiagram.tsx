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
const DIAGRAM_STROKE_WIDTH = 1.5
const CONNECTOR_WIDTH = 1
const FONT_SIZE = 11
const CIRCLE_FONT_SIZE = 10
const CIRCLE_FILL = 'url(#glassCircle)'
const RECTANGLE_FILL = 'url(#glassRect)'

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
      <defs>
        {/* glassmorphic circle fill */}
        <radialGradient id="glassCircle" cx="38%" cy="32%" r="68%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.88)" />
          <stop offset="60%" stopColor="rgba(238,244,255,0.72)" />
          <stop offset="100%" stopColor="rgba(192, 192, 192,0.10)" />
        </radialGradient>
        {/* glassmorphic rect fill */}
        <linearGradient id="glassRect" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.92)" />
          <stop offset="50%" stopColor="rgba(220,232,255,0.70)" />
          <stop offset="100%" stopColor="rgba(192, 192, 192,0.12)" />
        </linearGradient>
        {/* shimmer sweep */}
        <linearGradient id="shimmer" x1="-1" y1="0" x2="2" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.55)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          <animateTransform attributeName="gradientTransform" type="translate"
            values="-600 0; 600 0" dur="3.5s" repeatCount="indefinite" />
        </linearGradient>
        {/* connector gradient */}
        <linearGradient id="connGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(192, 192, 192,0.55)" />
          <stop offset="100%" stopColor="rgba(15,36,99,0.18)" />
        </linearGradient>
        <filter id="glassBlur" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="0.8" />
        </filter>
      </defs>
      <style>{`
        @keyframes id-pulse {
          0%, 100% { filter: drop-shadow(0 2px 8px rgba(15,36,99,0.10)); }
          50%       { filter: drop-shadow(0 4px 18px rgba(15,36,99,0.22)) drop-shadow(0 0 8px rgba(192, 192, 192,0.18)); }
        }
        @keyframes dashFlow {
          to { stroke-dashoffset: -24; }
        }
        .id-center-pulse {
          animation: ${animated ? 'id-pulse 3.5s ease-in-out 1.4s infinite' : 'none'};
        }
        .id-connector-flow {
          animation: ${animated ? 'dashFlow 1.8s linear infinite' : 'none'};
        }
      `}</style>

      {/* Top connectors — drawn first under circles */}
      {topXs.map((x, i) => (
        <line key={`tc-${i}`}
          x1={x} y1={topY + topRadius}
          x2={cx} y2={centerRect.y}
          stroke="url(#connGrad)" strokeWidth={1.5}
          strokeDasharray="6 4"
          className="id-connector-flow"
          style={lineStyle(topLineLengths[i], topConnectorDelay(i))}
        />
      ))}

      {/* Bottom connectors */}
      {bottomXs.map((x, i) => (
        <line key={`bc-${i}`}
          x1={cx} y1={centerRect.y + centerRect.height}
          x2={x + bottomRect.width / 2} y2={bottomY}
          stroke="url(#connGrad)" strokeWidth={1.5}
          strokeDasharray="6 4"
          className="id-connector-flow"
          style={lineStyle(bottomLineLengths[i], bottomConnectorDelay(i))}
        />
      ))}

      {/* Top circles */}
      {topXs.map((x, i) => (
        <g key={`top-${i}`} style={nodeStyle(nodeDelay(i))}>
          <circle cx={x} cy={topY} r={topRadius + 2}
            fill="rgba(192, 192, 192,0.10)" stroke="none" />
          <circle cx={x} cy={topY} r={topRadius}
            fill={CIRCLE_FILL} stroke={DIAGRAM_STROKE} strokeWidth={DIAGRAM_STROKE_WIDTH} />
          {/* shimmer overlay */}
          <circle cx={x} cy={topY} r={topRadius}
            fill="url(#shimmer)" stroke="none" opacity={0.6} />
          {renderLabel(x, topY, config.top[i], true)}
        </g>
      ))}

      {/* Center node with pulse */}
      <g className="id-center-pulse" style={centerStyle}>
        {/* outer glow ring */}
        <rect
          x={centerRect.x - 4} y={centerRect.y - 4}
          width={centerRect.width + 8} height={centerRect.height + 8}
          fill="rgba(192, 192, 192,0.10)" stroke="rgba(192, 192, 192,0.25)" strokeWidth={1} rx={10}
        />
        <rect
          x={centerRect.x} y={centerRect.y}
          width={centerRect.width} height={centerRect.height}
          fill={RECTANGLE_FILL} stroke={DIAGRAM_STROKE}
          strokeWidth={DIAGRAM_STROKE_WIDTH} rx={7}
        />
        {/* shimmer sweep over center */}
        <rect
          x={centerRect.x} y={centerRect.y}
          width={centerRect.width} height={centerRect.height}
          fill="url(#shimmer)" stroke="none" rx={7} opacity={0.55}
        />
        {renderLabel(cx, centerRect.y + 28, config.center)}
      </g>

      {/* Bottom nodes */}
      {bottomXs.map((x, i) => (
        <g key={`bot-${i}`} style={nodeStyle(bottomDelay(i))}>
          <rect
            x={x - 2} y={bottomY - 2}
            width={bottomRect.width + 4} height={bottomRect.height + 4}
            fill="rgba(15,36,99,0.05)" stroke="none" rx={8}
          />
          <rect
            x={x} y={bottomY}
            width={bottomRect.width} height={bottomRect.height}
            fill={RECTANGLE_FILL} stroke={DIAGRAM_STROKE}
            strokeWidth={DIAGRAM_STROKE_WIDTH} rx={6}
          />
          <rect
            x={x} y={bottomY}
            width={bottomRect.width} height={bottomRect.height}
            fill="url(#shimmer)" stroke="none" rx={6} opacity={0.5}
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
    const cx = 300, cy = 160
    const orbitR = 108
    const nodeR = 30
    const labels = ['Governance', 'Regulation', 'Economic Policy', 'Institutional Systems', 'Research Analysis']
    const nodes = labels.map((label, i) => {
      const angle = (i * 72 - 90) * (Math.PI / 180)
      return { label, x: cx + orbitR * Math.cos(angle), y: cy + orbitR * Math.sin(angle) }
    })

    return (
      <div ref={ref} style={{
        width: '100%', maxWidth: `${width}px`, margin: '0 auto',
        background: 'linear-gradient(160deg, #0d1b3e 0%, #09122a 100%)',
        borderRadius: '20px',
        border: '1.5px solid rgba(210,225,255,0.14)',
        padding: '16px 12px',
        boxShadow: '0 0 0 1px rgba(255,255,255,0.03) inset, 0 16px 48px rgba(0,0,0,0.45), 0 0 60px rgba(15,36,99,0.25)',
      }}>
        <svg width={width} height={height} viewBox="0 0 600 320"
          preserveAspectRatio="xMidYMid meet" style={{ overflow: 'visible' }}>
          <defs>
            {/* Navy-gold circle fill — matches header */}
            <radialGradient id="saNavyCircle" cx="35%" cy="28%" r="72%">
              <stop offset="0%" stopColor="#e8eeff" />
              <stop offset="50%" stopColor="#b8cafe" />
              <stop offset="100%" stopColor="#0f2463" stopOpacity="0.80" />
            </radialGradient>
            {/* Gold accent for center */}
            <linearGradient id="saCenterFill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#eef3ff" />
              <stop offset="100%" stopColor="#C0C0C0" stopOpacity="0.25" />
            </linearGradient>
            {/* Silver line */}
            <linearGradient id="saStringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(192, 192, 192,0.80)" />
              <stop offset="50%" stopColor="rgba(230,240,255,1.00)" />
              <stop offset="100%" stopColor="rgba(100,150,255,0.70)" />
            </linearGradient>
          </defs>

          <style>{`
            @keyframes saOrbitSpin {
              from { transform: rotate(0deg); }
              to   { transform: rotate(360deg); }
            }
            @keyframes saCounterSpin {
              from { transform: rotate(0deg); }
              to   { transform: rotate(-360deg); }
            }
            @keyframes saCupPulse {
              0%,100% { filter: drop-shadow(0 2px 8px rgba(15,36,99,0.40)); }
              50%      { filter: drop-shadow(0 4px 18px rgba(30,77,183,0.70)) drop-shadow(0 0 12px rgba(192, 192, 192,0.40)); }
            }
            @keyframes saStringFlow {
              to { stroke-dashoffset: -18; }
            }
            .sa-wheel {
              transform-origin: ${cx}px ${cy}px;
              animation: ${animated ? 'saOrbitSpin 20s linear infinite' : 'none'};
            }
            .sa-cup-label {
              animation: ${animated ? 'saCounterSpin 20s linear infinite' : 'none'};
            }
            .sa-cup-label text, .sa-cup-label tspan {
              fill: #ddeeff !important;
            }
            .sa-string {
              animation: ${animated ? 'saStringFlow 1.6s linear infinite' : 'none'};
            }
            .sa-center-node {
              animation: ${animated ? 'saCupPulse 3s ease-in-out infinite' : 'none'};
            }
          `}</style>

          {/* Orbit track */}
          <circle cx={cx} cy={cy} r={orbitR}
            fill="none"
            stroke="rgba(180,205,255,0.22)"
            strokeWidth={1.5}
            strokeDasharray="4 7" />

          {/* Spinning wheel — strings + cups */}
          <g className="sa-wheel">
            {nodes.map((n, i) => (
              <g key={`str-${i}`}>
                {/* String */}
                <line x1={cx} y1={cy} x2={n.x} y2={n.y}
                  stroke="url(#saStringGrad)"
                  strokeWidth={1.5}
                  strokeDasharray="5 4"
                  className="sa-string" />
              </g>
            ))}
            {nodes.map((n, i) => (
              <g key={`cup-${i}`} className="sa-cup" style={{ cursor: 'pointer' }}>
                {/* Outer ring */}
                <circle cx={n.x} cy={n.y} r={nodeR + 4}
                  fill="none"
                  stroke="rgba(15,36,99,0.18)"
                  strokeWidth={1} />
                {/* Cup circle — navy glass */}
                <circle cx={n.x} cy={n.y} r={nodeR}
                  fill="url(#saNavyCircle)"
                  stroke="#0f2463"
                  strokeWidth={2} />
                {/* Gold top specular */}
                <ellipse cx={n.x - 5} cy={n.y - nodeR * 0.42}
                  rx={nodeR * 0.42} ry={nodeR * 0.18}
                  fill="rgba(255,255,255,0.65)" stroke="none" />
                {/* Counter-rotating label stays upright */}
                <g style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                  className="sa-cup-label">
                  {renderLabel(n.x, n.y, n.label, true)}
                </g>
              </g>
            ))}
          </g>

          {/* Center fixed node */}
          <g className="sa-center-node">
            <rect x={cx - 82} y={cy - 25} width={164} height={50}
              fill="url(#saCenterFill)" stroke="#0f2463" strokeWidth={1.5} rx={10} />
            <rect x={cx - 70} y={cy - 19} width={140} height={12}
              fill="rgba(255,255,255,0.60)" stroke="none" rx={4} />
            <text x={cx} y={cy + 6} textAnchor="middle" fontSize={12} fontWeight="700"
              fill="#e8eeff" fontFamily="Inter, system-ui, sans-serif">Strategic Advisory</text>
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
