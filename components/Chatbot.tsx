'use client'

import { useState, useRef, useEffect } from 'react'
import './Chatbot.css'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

interface FAQ {
  question: string
  answer: string
  keywords: string[]
}

const faqData: FAQ[] = [
  {
    question: 'What is Pakistan Business Forum?',
    answer: 'Pakistan Business Forum® — Strategic Policy & Research Function is an independent strategic policy and research platform contributing analytical work on governance, economic systems, regulatory frameworks, and institutional development. We operate independently of political affiliation, advocacy agendas, and commercial interests.',
    keywords: ['what is', 'about', 'who are you', 'organization', 'forum']
  },
  {
    question: 'Who is the Patron-in-Chief?',
    answer: 'Mian Muhammad Usman is the Patron-in-Chief of Pakistan Business Forum® — Strategic Policy & Research Function. He provides institutional oversight focused on continuity, standards, and responsibility in research practice and governance. As Patron-in-Chief, he ensures the Forum maintains its commitment to institutional excellence and analytical independence.',
    keywords: ['patron', 'patron in chief', 'patron-in-chief', 'who is patron', 'leadership', 'mian muhammad usman']
  },
  {
    question: 'Who is the Founder?',
    answer: 'Malik Naseer Ahmed is the Founder of Pakistan Business Forum — Strategic Policy & Research Function. He established the Forum as a structured analytical institution with clear boundaries and commitment to independence. The Forum was founded with the vision of creating an independent platform for evidence-based policy analysis.',
    keywords: ['founder', 'who founded', 'malik naseer ahmed', 'established', 'created']
  },
  {
    question: 'Who are the Policy Board members?',
    answer: 'The Policy Board consists of: Mian Muhammad Usman (Patron-in-Chief), Malik Naseer Ahmed (Founder), Dr. Sarah Khan (Policy Board Member - Expert in governance frameworks and institutional development, based in United Kingdom, London), and Ahmed Hassan (Policy Board Member - Specializes in economic policy research and strategic policy advisory, based in Pakistan, Islamabad). For inquiries, contact policy.board@pakistanbusinessforum.org',
    keywords: ['policy board', 'board members', 'board of directors', 'governance board', 'who are board members', 'dr sarah khan', 'ahmed hassan']
  },
  {
    question: 'Who are the Board of Advisors?',
    answer: 'Our distinguished Board of Advisors includes: Prof. Dr. Amartya Sen (Nobel Laureate in Economic Sciences, United States, Cambridge), Prof. Dr. Joseph Stiglitz (Nobel Laureate in Economic Sciences, United States, New York), Prof. Dr. Thomas Piketty (Economic Inequality & Public Policy, France, Paris), Prof. Dr. Dani Rodrik (International Political Economy, United States, Cambridge), Prof. Dr. Anne-Marie Slaughter (International Law & Policy, United States, Washington D.C.), Prof. Dr. Ngaire Woods (Global Economic Governance, United Kingdom, Oxford), Prof. Dr. Kishore Mahbubani (Asian Affairs & Global Governance, Singapore), Prof. Dr. Jeffrey Sachs (Sustainable Development, United States, New York), Prof. Dr. Daron Acemoglu (Political Economy & Institutions, United States, Cambridge), and Prof. Dr. Raghuram Rajan (Finance & Economic Policy, United States, Chicago).',
    keywords: ['advisors', 'board of advisors', 'advisory board', 'who are advisors', 'advisory committee']
  },
  {
    question: 'Who are the Research Heads?',
    answer: 'The Research Heads include: Dr. Fatima Ali (Head of Research - Leads research activities across governance, economic policy, and institutional analysis, based in Pakistan, Islamabad, contact: head.research@pakistanbusinessforum.org), Prof. Muhammad Zain (Head of Economic Research - Specializes in economic policy analysis and fiscal policy evaluation, based in United States, New York, contact: head.economic.research@pakistanbusinessforum.org), Dr. Ayesha Malik (Head of Policy Evaluation - Expert in policy design and impact assessment, based in Canada, Ottawa, contact: head.policy.evaluation@pakistanbusinessforum.org), and Dr. Hassan Raza (Head of Governance Research - Focuses on institutional design and governance frameworks, based in Australia, Canberra, contact: head.governance.research@pakistanbusinessforum.org).',
    keywords: ['research head', 'head of research', 'research team', 'research leadership', 'dr fatima ali', 'prof muhammad zain', 'dr ayesha malik', 'dr hassan raza']
  },
  {
    question: 'Who are the Media Heads?',
    answer: 'The Media Heads include: Zara Sheikh (Head of Media & Communications - Leads strategic communications and media relations, based in Pakistan, Islamabad, contact: head.media@pakistanbusinessforum.org), Omar Farooq (Head of Strategic Communications - Specializes in media engagement and public affairs, based in United Arab Emirates, Dubai, contact: head.strategic.communications@pakistanbusinessforum.org), and Hina Abbas (Head of Publications - Manages publication programs and research dissemination, contact: head.publications@pakistanbusinessforum.org).',
    keywords: ['media head', 'head of media', 'communications', 'zara sheikh', 'omar farooq', 'hina abbas', 'publications']
  },
  {
    question: 'Who are the Regional Heads?',
    answer: 'Our Regional Heads include: Dr. James Wilson (Regional Head, Americas - Coordinates research across North and South American regions), Dr. Li Wei (Regional Head, Asia-Pacific - Leads regional analysis across Asia-Pacific countries), Dr. Klaus Mueller (Regional Head, Europe - Manages research initiatives across European institutions), Dr. Amina Hassan (Regional Head, Middle East & North Africa - Specializes in regional policy analysis across MENA countries), Dr. Kwame Osei (Regional Head, Africa - Coordinates research activities across African regional contexts), and Dr. Elena Petrov (Regional Head, Russia & Eurasia - Leads research initiatives across Russia and Eurasian regional frameworks).',
    keywords: ['regional head', 'regional leadership', 'regions', 'americas', 'asia pacific', 'europe', 'middle east', 'africa', 'russia', 'eurasia']
  },
  {
    question: 'What are your main areas of work?',
    answer: 'Our main areas include: Public Policy and Governance, Economic and Development Policy, Regulatory and Legal Frameworks, Institutional Performance and Reform, and Regional and International Affairs. We provide evidence-based research and policy analysis to support informed decision-making.',
    keywords: ['areas', 'work', 'services', 'what do you do', 'research areas', 'practice areas']
  },
  {
    question: 'How can I access your publications?',
    answer: 'Our publications are available through the Media section of our website. We publish Academic Journals, Research Reports, Policy Briefs, and Working Papers. All publications undergo rigorous peer review and maintain high standards of methodological rigor and analytical accuracy.',
    keywords: ['publications', 'research papers', 'papers', 'reports', 'briefs', 'journals', 'access publications']
  },
  {
    question: 'Do you provide consulting services?',
    answer: 'We engage with government institutions, international organizations, academic bodies, and policy professionals seeking objective analysis and structured insight. Engagements are conducted within clearly defined analytical and ethical boundaries. Please visit our "Work with us" section for more information.',
    keywords: ['consulting', 'services', 'work with', 'collaboration', 'partnership', 'hire', 'consult']
  },
  {
    question: 'How can I become a member?',
    answer: 'For membership information, please visit our "Become a Member" page. We welcome engagement from policy professionals, researchers, and institutions aligned with our mission of evidence-based policy development.',
    keywords: ['membership', 'member', 'join', 'become a member', 'how to join']
  },
  {
    question: 'What is your research methodology?',
    answer: 'Our research applies established policy-analysis methodologies, including empirical assessment, comparative analysis, and qualitative institutional review. Outputs are developed to inform understanding rather than advocate positions. We maintain methodological transparency and analytical rigor in all our work.',
    keywords: ['methodology', 'research methods', 'how do you research', 'approach', 'analytical approach']
  },
  {
    question: 'Do you engage in lobbying or political advocacy?',
    answer: 'No. The Forum operates independently and does not engage in lobbying, political campaigning, or representation of interest groups. We focus on objective analysis and evidence-based research to inform policy understanding.',
    keywords: ['lobbying', 'advocacy', 'political', 'independent', 'neutral', 'bias']
  },
  {
    question: 'How can I contact your team?',
    answer: 'You can contact us through our Contact page. For specific inquiries: Policy Board - policy.board@pakistanbusinessforum.org, Research - head.research@pakistanbusinessforum.org, Economic Research - head.economic.research@pakistanbusinessforum.org, Policy Evaluation - head.policy.evaluation@pakistanbusinessforum.org, Governance Research - head.governance.research@pakistanbusinessforum.org, Media & Communications - head.media@pakistanbusinessforum.org, Strategic Communications - head.strategic.communications@pakistanbusinessforum.org, Publications - head.publications@pakistanbusinessforum.org. You can also reach out via WhatsApp using the floating button on our website.',
    keywords: ['contact', 'email', 'phone', 'reach out', 'get in touch', 'how to contact', 'email address']
  },
  {
    question: 'What regions do you work in?',
    answer: 'We have regional presence and engagement across multiple regions including Africa, Americas, Asia-Pacific, Europe, Middle East, and South Asia. Each region has dedicated leadership and focuses on region-specific policy analysis and engagement.',
    keywords: ['regions', 'geographic', 'where', 'locations', 'global', 'international']
  },
  {
    question: 'Can I partner with your organization?',
    answer: 'Yes, we collaborate with international think tanks, academic institutions, and policy organizations. We have partnerships with leading institutions worldwide. Please visit our Partners page or contact us through the "Work with us" section to discuss potential collaborations.',
    keywords: ['partner', 'partnership', 'collaborate', 'collaboration', 'affiliate', 'alliance']
  },
  {
    question: 'What types of events do you organize?',
    answer: 'We organize various events including policy briefings, research presentations, and knowledge-sharing sessions. For information about upcoming events, please visit our Events page or contact our events team.',
    keywords: ['events', 'conferences', 'seminars', 'workshops', 'meetings', 'upcoming events']
  },
  {
    question: 'How do you ensure research quality?',
    answer: 'All our publications undergo rigorous peer review and editorial processes to ensure methodological rigor, analytical accuracy, and adherence to scholarly standards. We maintain high standards of intellectual independence and methodological transparency in all our research outputs.',
    keywords: ['quality', 'standards', 'peer review', 'rigor', 'accuracy', 'credibility']
  },
  {
    question: 'Who is in the Administration team?',
    answer: 'Our Administration team includes: Rashid Mahmood (Chief Administrative Officer - Oversees administrative operations and institutional management), Nadia Khan (Director of Operations - Manages day-to-day operations and resource coordination), Usman Ali (Finance Director - Oversees financial management and budgeting), and Sana Ahmed (Administrative Coordinator - Coordinates administrative support and documentation).',
    keywords: ['administration', 'admin', 'operations', 'finance', 'rashid mahmood', 'nadia khan', 'usman ali', 'sana ahmed']
  },
  {
    question: 'When was the Forum established?',
    answer: 'Pakistan Business Forum — Strategic Policy & Research Function was established in 2020 as an independent strategic policy and research platform. Key milestones: 2021 - Structural definition and research protocols, 2022 - Research orientation and practice areas, 2023 - Institutional safeguards and governance frameworks, 2024 - Strategic consolidation and expansion, Present - Ongoing commitment to evidence-based policy analysis.',
    keywords: ['established', 'founded', 'when', 'history', 'timeline', '2020', 'formation']
  }
]

const extraQuestions = [
  {
    question: 'What makes your research different?',
    answer: 'Our research is distinguished by its independence from political and commercial interests, rigorous methodological approach, and focus on evidence-based analysis. We prioritize analytical objectivity and long-term policy perspective over advocacy positions.'
  },
  {
    question: 'Do you accept research proposals?',
    answer: 'We welcome research proposals that align with our areas of work and methodological standards. Please contact our research team through the "Work with us" section with your proposal details and research objectives.'
  },
  {
    question: 'How can I stay updated with your work?',
    answer: 'You can stay updated by subscribing to our publications, following us on social media (links in the footer), or visiting our website regularly. We also publish briefings and knowledge outputs that provide timely analysis of policy developments.'
  },
  {
    question: 'What is your policy on data and privacy?',
    answer: 'We maintain strict confidentiality and privacy standards in all our engagements. For detailed information about our data handling and privacy practices, please visit our Privacy Notice page in the footer.'
  },
  {
    question: 'Do you offer internships or research positions?',
    answer: 'Yes, we offer internship programs and research positions. Please visit our "Work with us" section to learn about current opportunities, application processes, and requirements for research positions and internships.'
  }
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m here to help answer your questions about Pakistan Business Forum® — Strategic Policy & Research Function. What would you like to know?',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const findAnswer = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase().trim()

    // Check FAQ data
    for (const faq of faqData) {
      for (const keyword of faq.keywords) {
        if (lowerInput.includes(keyword)) {
          return faq.answer
        }
      }
    }

    // Check extra questions
    for (const extra of extraQuestions) {
      const lowerQuestion = extra.question.toLowerCase()
      const words = lowerInput.split(' ')
      const questionWords = lowerQuestion.split(' ')
      
      // Check if at least 2 words match
      const matches = words.filter(word => 
        questionWords.some(qWord => qWord.includes(word) || word.includes(qWord))
      )
      
      if (matches.length >= 2) {
        return extra.answer
      }
    }

    // Default responses
    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return 'Hello! How can I assist you today? Feel free to ask about our research, publications, partnerships, or any other questions about Pakistan Business Forum®.'
    }

    if (lowerInput.includes('thank') || lowerInput.includes('thanks')) {
      return 'You\'re welcome! Is there anything else you\'d like to know?'
    }

    if (lowerInput.includes('bye') || lowerInput.includes('goodbye')) {
      return 'Thank you for visiting! If you have more questions, feel free to ask anytime. Have a great day!'
    }

    return 'I understand you\'re asking about: "' + userInput + '". While I may not have a specific answer for this, I can help you with questions about our research areas, publications, partnerships, membership, events, or contact information. Could you rephrase your question or ask about one of these topics?'
  }

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    // Simulate bot thinking
    setTimeout(() => {
      const botAnswer = findAnswer(inputValue)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botAnswer,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
    }, 500)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleQuickQuestion = (question: string) => {
    setInputValue(question)
    setTimeout(() => {
      handleSend()
    }, 100)
  }

  return (
    <>
      <button
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close chatbot' : 'Open chatbot'}
        aria-expanded={isOpen}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {isOpen ? (
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          ) : (
            <>
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 10h.01M12 10h.01M16 10h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </>
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-content">
              <div className="chatbot-avatar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3>Assistant</h3>
                <p>Ask me anything</p>
              </div>
            </div>
          </div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender}`}>
                <div className="message-content">
                  {message.text}
                </div>
                <div className="message-time">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-quick-questions">
            <p>Quick questions:</p>
            <div className="quick-questions-list">
              <button onClick={() => handleQuickQuestion('Who is the Patron-in-Chief?')}>
                Patron-in-Chief
              </button>
              <button onClick={() => handleQuickQuestion('Who are the Policy Board members?')}>
                Policy Board
              </button>
              <button onClick={() => handleQuickQuestion('Who are the Board of Advisors?')}>
                Advisors
              </button>
              <button onClick={() => handleQuickQuestion('What are your main areas of work?')}>
                Areas of Work
              </button>
              <button onClick={() => handleQuickQuestion('How can I contact you?')}>
                Contact Info
              </button>
            </div>
          </div>

          <div className="chatbot-input-container">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your question..."
              className="chatbot-input"
            />
            <button onClick={handleSend} className="chatbot-send" aria-label="Send message">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
