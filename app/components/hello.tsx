"use client";;
import { ClickUIProvider, CodeBlock } from "@clickhouse/click-ui";

export function Hello() {
  return (
    <ClickUIProvider theme='dark'>
      <CodeBlock lang="sql">
        {`SELECT * FROM table`}
      </CodeBlock>
    </ClickUIProvider>
  )
}
