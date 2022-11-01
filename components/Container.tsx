import React, { PropsWithChildren } from "react"

const Container: React.FC<PropsWithChildren> = ({ children }) => {
    return <div className="container mx-auto">{children}</div>
  }
  
  export default Container