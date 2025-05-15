import { LazyExoticComponent, ReactNode, Suspense } from "react"
import { motion } from 'framer-motion';
import { LoaderCircle } from "lucide-react";

const SuspenseLoadComponent = (props: {
  Component: LazyExoticComponent<() => ReactNode>
}): ReactNode => {
  const { Component } = props

  return (
    <Suspense fallback={
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="flex py-12 justify-center items-center"
      >
        <LoaderCircle className="animate-spin" />
      </motion.div> }>
      <motion.div
        key="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Component />
      </motion.div>
    </Suspense>
  )
}

export {
  SuspenseLoadComponent
}