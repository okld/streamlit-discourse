import React, { useEffect, useState } from "react"
import {
  ComponentProps,
  Streamlit, 
  withStreamlitConnection
} from "streamlit-component-lib"

import HeightObserver from "./height-observer"

declare global {
  interface Window {
    DiscourseEmbed: any
  }
}

interface StreamlitDiscourseProps extends ComponentProps {
  args: {
    discourseUrl: string
    topicId: number
  }
}

const withHttps = (url: string) =>
  (!/^https?:\/\//i.test(url) ? `https://${url}` : url).replace(/\/*$/, "/")

const StreamlitDiscourse = ({ args }: StreamlitDiscourseProps) => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null)
  const containerRef = (node: HTMLDivElement) => setContainer(node)

  useEffect(() => {
    if (container) {
      window.DiscourseEmbed = {
        discourseUrl: withHttps(args.discourseUrl),
        topicId: args.topicId,
        discourseReferrerPolicy: "strict-origin-when-cross-origin"
      }

      const discourse = container

      const script = document.createElement("script")
      script.type = "text/javascript"
      script.async = true
      script.src = window.DiscourseEmbed.discourseUrl + "javascripts/embed.js"

      document.head.appendChild(script)

      return () => {
        document.head.removeChild(script)

        while (discourse.firstChild) {
          discourse.removeChild(discourse.firstChild)
        }
      }
    }
  }, [container, args.discourseUrl, args.topicId])

  return (
    <HeightObserver onChange={Streamlit.setFrameHeight}>
      <div ref={containerRef} id="discourse-comments"></div>
    </HeightObserver>
  )
}

export default withStreamlitConnection(StreamlitDiscourse)
